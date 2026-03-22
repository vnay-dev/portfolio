# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15 portfolio website** (TypeScript, Tailwind CSS v4, Three.js). It is a single-service frontend app with no database or backend API.

### Key commands

| Task | Command |
|---|---|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000, uses Turbopack) |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Format check | `npm run format:check` |
| Format fix | `npm run format` |

### Non-obvious notes

- **Husky pre-commit hook** runs `npm run build` before every commit. If the build fails, the commit is aborted. This means every commit triggers a full Next.js build, which takes ~13 seconds with Turbopack.
- **Prettier formatting** is not enforced on commit (only build is). The repo currently has formatting drift in 25 files — this is the existing state, not something to fix.
- **No environment variables** are needed. There are no `.env` files or secrets required.
- **Three routes** exist: `/`, `/projects/whatsapp-audio-summary`, `/projects/tdbridge`.
- **Node.js 22+** works fine despite README stating 18+ as minimum.
- The project uses `next dev --turbopack` and `next build --turbopack` (Turbopack for both dev and build).
