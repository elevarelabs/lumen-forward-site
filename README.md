# Lumen Forward

Marketing site for Lumen Forward — operational consulting for founder-led businesses.

**Growth exposes structure.** Find the priority. Move it in 90 days.

## Stack

- Next.js 15 App Router
- Tailwind CSS v4
- TypeScript
- Static contact form (Formspree or mailto)
- No CMS, no auth

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
| `/` | Home |
| `/structure-check` | Six-question Structure Check |
| `/engagements` | Structure Check, Priority Sprint, Implementation |
| `/about` | About Jen |
| `/contact` | Let's Talk |
| `/privacy` | Privacy |

## Contact form (Vercel)

The Let's Talk form uses Formspree when an action URL is set. Otherwise it opens a mailto draft.

In Vercel → Project → Settings → Environment Variables:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_FORM_ACTION` | No | Formspree endpoint, e.g. `https://formspree.io/f/xxxxxxxx` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Mailto fallback. Defaults to `hello@lumenforward.com` |

Redeploy after changing public env vars.

## Vercel deploy

1. Import this GitHub repository in Vercel.
2. Framework preset: Next.js (auto-detected).
3. Set the env vars above if you have a Formspree form.
4. Deploy.

No database, CMS, or auth to configure.

## Copy locks

- Homepage H1 is **Growth exposes structure.**
- The sole primary CTA label is **Let's Talk**.
- Priority Sprint price ($7,500) appears only on `/engagements`.
- Home and About do not state revenue bands or company-size dollars.
