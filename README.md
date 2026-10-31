# iskit-ui

Component and section library for **[iskit.ai](https://iskit.ai)** — Idea Startup Kit.

> Fastest way to get a real signal on your idea.

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Ready for shadcn/ui + community registries (Magic UI, Aceternity, Page UI, Launch UI, etc.)

## Quick start (cloud / phone friendly)

### Option 1 — GitHub Codespaces (recommended)
1. Open https://github.com/petronikolaychuk-ai/iskit-ui
2. Click **Code → Codespaces → Create codespace on main**
3. Once ready: `npm install && npm run dev`

### Option 2 — StackBlitz
Open: https://stackblitz.com/github/petronikolaychuk-ai/iskit-ui

### Option 3 — Replit
Import the GitHub repo into a new Replit.

## Local (if you have a machine)

```bash
npm install
npm run dev
```

## Structure (planned)

```
src/
  components/
    ui/           ← shadcn primitives
    sections/     ← Hero, Problem, Benefits, SocialProof, CTA, Footer variants
  lib/
    utils.ts
```

## Next steps

1. Add first set of section components (Hero, Problem, Benefits, CTA, Footer)
2. Normalize props so the hybrid generator can fill them
3. Add design-token support for unique look per generated page
4. Connect to the main iskit generation pipeline

---

Built for solo founders validating ideas.
