-- Create admins table referencing auth.users
create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.admins enable row level security;

-- Create RLS policy for reading admin status
drop policy if exists "Allow logged in users to check their own admin status" on public.admins;
create policy "Allow logged in users to check their own admin status"
  on public.admins
  for select
  to authenticated
  using ( (select auth.uid()) = user_id );
