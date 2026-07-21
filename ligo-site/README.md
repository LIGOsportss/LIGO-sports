# Ligo — Marketing Site

The operating system for community sports organizers. Three pages: Home, About, Feedback.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom design tokens — see `tailwind.config.ts`)
- Framer Motion for all animation
- React Icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design system

- **Background** — matte charcoal `#0C0C0E`, near-black not pure black.
- **Accent** — vibrant yellow `#F4C51E`, with lime `#C7F24B` and cyan `#49E3C4` as secondary accents. Used sparingly, never as full gradients.
- **Type** — Space Grotesk for display/headings, Inter for body and UI text.
- **Motion** — everything animates via `transform`/`opacity` only (see `AnimatedBackground.tsx`, `CustomCursor.tsx`) to stay at 60fps and avoid layout thrashing.
- **Cursor** — custom yellow-outline cursor on desktop (`pointer: fine` devices only); falls back to the native cursor on touch devices.

## Structure

```
app/
  layout.tsx        Root layout: fonts, nav, footer, cursor, background
  page.tsx           Home
  about/page.tsx      About
  feedback/page.tsx   Feedback
components/           Reusable UI (Hero, FeatureGrid, AppMockup, etc.)
lib/data.ts            Feature copy/content
```

## Notes

- The animated phone mockup (`AppMockup.tsx`) cycles through Browse → Pay → QR → Check-in automatically; each state is also directly selectable.
- The feedback form is front-end only — wire `handleSubmit` in `FeedbackForm.tsx` to your backend or a form service (e.g. an API route) to persist submissions.
- Respects `prefers-reduced-motion`.
