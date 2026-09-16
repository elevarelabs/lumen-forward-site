# Lumen Forward

Marketing site for Lumen Forward Consulting. Operational consulting for founder-led service businesses.

**Growth exposes structure.** Primary CTA: **Let's Talk.**

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Formspree or mailto contact flow
- No CMS, no auth

## Brand

- Navy `#1C2340`
- Cream `#F5EFE0`
- Gold `#C9A96E` (accents only)
- Display: Cormorant Garamond
- Body: Raleway

## Local

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run typecheck
npm run lint
npm run build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Homepage (hero, What Growth Exposes, work, credibility, client example, Let's Talk) |
| `/structure-check` | Structure Check diagnostic |
| `/engagements` | Engagements, including Get the report |
| `/privacy` | Privacy |

Hero CTAs: Let's Talk (primary) and Take the Structure Check (one quieter secondary). Get the report lives on Engagements and as a mid-page link, not in the hero.

## Contact form

The Let's Talk form uses Formspree when an action URL is set. Otherwise it opens a mailto draft.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_FORM_ACTION` | No | Formspree endpoint |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Mailto fallback. Defaults to `hello@lumenforward.com` |
