-- Create private schema if it does not exist
create schema if not exists private;

-- Move existing public.admins table to private schema if it exists in public
do $$
begin
  if exists (
    select 1 from information_schema.tables 
    where table_schema = 'public' and table_name = 'admins'
  ) then
    alter table public.admins set schema private;
  end if;
end $$;

-- Create admins table in private schema if not exists
create table if not exists private.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on private.admins
alter table private.admins enable row level security;

-- Create whitelist table
create table if not exists public.whitelist (
  campus_id text primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on whitelist
alter table public.whitelist enable row level security;

-- Whitelist policies (check against private.admins)
drop policy if exists "Allow admins to manage whitelist" on public.whitelist;
create policy "Allow admins to manage whitelist"
  on public.whitelist
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Create members table referencing auth.users
create table if not exists public.members (
  id uuid primary key references auth.users(id) on delete cascade,
  campus_id text unique not null,
  email text unique not null,
  full_name text,
  avatar_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on members
alter table public.members enable row level security;

-- Members policies
drop policy if exists "Allow whitelisted members to select" on public.members;
create policy "Allow whitelisted members to select"
  on public.members
  for select
  to authenticated
  using (
    exists (
      select 1 from public.whitelist
      where whitelist.campus_id = split_part(auth.jwt()->>'email', '@', 1)
    )
  );

drop policy if exists "Allow members to update own row" on public.members;
create policy "Allow members to update own row"
  on public.members
  for update
  to authenticated
  using (
    auth.uid() = id
    and exists (
      select 1 from public.whitelist
      where whitelist.campus_id = split_part(auth.jwt()->>'email', '@', 1)
    )
  )
  with check (
    auth.uid() = id
    and exists (
      select 1 from public.whitelist
      where whitelist.campus_id = split_part(auth.jwt()->>'email', '@', 1)
    )
  );

drop policy if exists "Allow admins to manage members" on public.members;
create policy "Allow admins to manage members"
  on public.members
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Create security definer function to securely check if the current caller is an admin
create or replace function public.is_admin()
returns boolean
language plpgsql
security definer
set search_path = public, private, pg_temp
as $$
begin
  return exists (
    select 1 from private.admins where user_id = auth.uid()
  );
end;
$$;

-- Create check_member_status RPC function for public login check
create or replace function public.check_member_status(p_email text)
returns json
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_campus_id text;
  v_is_whitelisted boolean := false;
  v_has_profile boolean := false;
begin
  if p_email not like '%@yenepoya.edu.in' then
    return json_build_object('valid_domain', false, 'whitelisted', false, 'has_profile', false);
  end if;

  v_campus_id := split_part(p_email, '@', 1);

  select exists(select 1 from public.whitelist where campus_id = v_campus_id) into v_is_whitelisted;
  select exists(select 1 from public.members where campus_id = v_campus_id) into v_has_profile;

  return json_build_object(
    'valid_domain', true,
    'whitelisted', v_is_whitelisted,
    'has_profile', v_has_profile
  );
end;
$$;

-- Create check_user_allowed function and trigger on auth.users insertion (Gating)
create or replace function public.check_user_allowed()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_campus_id text;
begin
  if NEW.email not like '%@yenepoya.edu.in' then
    raise exception 'INVALID_DOMAIN: Only @yenepoya.edu.in emails are allowed.';
  end if;

  v_campus_id := split_part(NEW.email, '@', 1);

  if not exists (select 1 from public.whitelist where campus_id = v_campus_id) then
    raise exception 'NOT_WHITELISTED: Your campus ID (%) is not pre-authorized. Please contact the administrator.', v_campus_id;
  end if;

  return NEW;
end;
$$;

drop trigger if exists on_auth_user_created_check on auth.users;
create trigger on_auth_user_created_check
  before insert on auth.users
  for each row
  execute function public.check_user_allowed();

-- Create handle_user_sync function and trigger (Syncing metadata)
create or replace function public.handle_user_sync()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_campus_id text;
begin
  v_campus_id := split_part(NEW.email, '@', 1);

  insert into public.members (id, campus_id, email, full_name, avatar_url, updated_at)
  values (
    NEW.id,
    v_campus_id,
    NEW.email,
    coalesce(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
    NEW.raw_user_meta_data->>'avatar_url',
    now()
  )
  on conflict (id) do update set
    full_name = coalesce(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', public.members.full_name),
    avatar_url = coalesce(NEW.raw_user_meta_data->>'avatar_url', public.members.avatar_url),
    updated_at = now();

  return NEW;
end;
$$;

drop trigger if exists on_auth_user_sync on auth.users;
create trigger on_auth_user_sync
  after insert or update on auth.users
  for each row
  execute function public.handle_user_sync();
