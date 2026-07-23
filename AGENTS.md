<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Commands

| Command       | Purpose                        |
| ------------- | ------------------------------ |
| `pnpm dev`    | Start development server       |
| `pnpm build`  | Production build               |
| `pnpm start`  | Start production server        |
| `pnpm lint`   | Run ESLint across the project  |
| `pnpm format` | Format all files with Prettier |

Always run `pnpm lint` and `pnpm format` before committing.

## Conventions

- **Imports**: Use `@/` path alias. Never relative imports.
- **Brand colors**: primary `#0CBAA6` (blue-green), secondary `#D9FB02` (yellow-green, used in gradients).
- **GSAP**: Wrap in `gsap.context()` with a ref and cleanup via `ctx.revert()`.
- **ESLint**: Already disabled — `react/no-unescaped-entities`, `@next/next/no-img-element`.

## Supabase & Database Rules

- **Pushed Migrations are Immutable**: NEVER edit an existing migration file that has already been pushed to remote or committed to Git main branch.
- **New Changes**: Create a new migration file (`pnpm supabase migration new <name>`) for subsequent database schema/trigger modifications.
- **Idempotent Migrations**: Always write migrations defensively with explicit cleanup (`DROP POLICY IF EXISTS`, `DROP TRIGGER IF EXISTS`, `CREATE OR REPLACE FUNCTION`, `IF NOT EXISTS` for tables/columns) so re-running or modifying statements executes cleanly.
- **No Unapproved Pushes**: Do NOT execute `pnpm supabase db push` without explicit user request or approval.
