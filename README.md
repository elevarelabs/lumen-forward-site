# Lumen Forward

Marketing site for Lumen Forward Consulting.

**Growth exposes structure.** Primary CTA: **Let's Talk.** Hero secondary: **Take the Structure Check** only.

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
| `/` | Homepage |
| `/structure-check` | Structure Check diagnostic |
| `/engagements` | Engagement models |
| `/about` | About Jen Zils |
| `/contact` | Let's Talk |
| `/privacy` | Privacy Policy |

Homepage: editorial split hero, What Growth Exposes (Get the report mid-page), How We Work (unbranded stages), outcomes, about teaser, Let's Talk. No branded Method. No revenue band on Home or About.

## Contact form

The Let's Talk form uses Formspree when an action URL is set. Otherwise it opens a mailto draft.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_FORM_ACTION` | No | Formspree endpoint |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Mailto fallback. Defaults to `jen@lumenforward.com` |
