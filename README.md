# Lumen Forward Consulting

Marketing site for Lumen Forward, operating-model consulting for mission-driven founders of established service businesses (roughly $500K to $5M, 5 to 20 people).

This is a preview build. The live domain (`lumenforward.com`) is not connected yet. Contact uses a mailto draft to a placeholder address.

## Stack

- React 19
- Vite
- TypeScript
- Framer Motion

Brand tokens are locked: navy `#1C2340`, cream `#F5EFE0`, gold `#C9A96E`. Display type is Cormorant Garamond. Body type is Raleway.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually [http://localhost:5173](http://localhost:5173)).

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. Deploy that folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, and so on). No CMS, database, or auth.

## Contact (preview)

The conversation form does not post to a server. It opens a mail draft to `hello@lumenforward.com`, which is a placeholder until the domain is live. Replace that address in `src/copy.ts` when the mailbox exists.

## Site structure

Single page:

1. Hero
2. Problem scenarios
3. The Lumen Forward Method (Discern through Deploy)
4. The Stewardship Paradox
5. Credibility
6. Client change story and contact
7. Footer
