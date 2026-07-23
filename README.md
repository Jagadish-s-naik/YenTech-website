# YenTech-website

The official website of YenTech Technical Club.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18 or later
- **pnpm**: `npm install -g pnpm`

---

## 🛠️ Local Development

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set your `.env.local` to point to your Supabase project credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<your-publishable-key>
```

### 3. Run the Next.js Dev Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Supabase & Migration Workflow

We manage database schema changes, RLS policies, and triggers via SQL migrations.

### Commands Reference

| Command                                 | Purpose                                          |
| :-------------------------------------- | :----------------------------------------------- |
| `pnpm supabase link --project-ref <id>` | Link your CLI to your remote Supabase project    |
| `pnpm supabase migration new <name>`    | Create a new SQL migration file                  |
| `pnpm supabase db push`                 | Push unapplied SQL migrations to remote Supabase |

### Migration Rules

1. **Pushed Migrations are Immutable**: Never edit an existing migration file that has already been pushed to remote or committed to the `main` branch.
2. **Adding Schema Changes**: Create a new migration file:
   ```bash
   pnpm supabase migration new <descriptive_name>
   ```
3. **Idempotent Cleanup**: Always write migrations defensively with explicit cleanup (`DROP POLICY IF EXISTS`, `DROP TRIGGER IF EXISTS`, `CREATE OR REPLACE FUNCTION`, `IF NOT EXISTS` for tables/columns) so statements execute cleanly.
4. **Code Quality**: Always run `pnpm lint` and `pnpm format` before committing.
