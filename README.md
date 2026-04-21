# AI briefing site

A personal daily briefing on AI in design and product, plus a tools comparison. Deployed on Vercel with HTTP basic auth.

## Structure

- `public/index.html` — the daily briefing (updated every morning at 7 AM by a scheduled task)
- `public/tools.html` — the tools comparison (updated manually when needed)
- `middleware.ts` — Edge middleware that enforces HTTP basic auth
- `app/layout.tsx`, `app/page.tsx` — minimal Next.js scaffold so the build succeeds; the real content is the HTML in `public/`
- `next.config.mjs` — rewrites `/` → `/index.html` and `/tools` → `/tools.html`

## Local dev

```bash
npm install
cp .env.example .env.local    # set AUTH_USERNAME and AUTH_PASSWORD
npm run dev
```

Open http://localhost:3000.

## Deploy

Pushes to `main` auto-deploy via Vercel's GitHub integration.

## Environment variables (set in Vercel)

| Var | Purpose |
|---|---|
| `AUTH_USERNAME` | HTTP basic auth username |
| `AUTH_PASSWORD` | HTTP basic auth password |

If either is unset, the site is public. Set both in Production, Preview, and Development environments.

## Daily update

The HTML at `public/index.html` is overwritten every morning by a scheduled task running in a separate environment. That task commits and pushes to GitHub; Vercel redeploys automatically.
