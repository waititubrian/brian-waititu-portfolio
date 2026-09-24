# Brian Muraya - Portfolio

Personal portfolio site built with Next.js 16, TypeScript, Tailwind CSS, and Motion. Showcases full-stack development work and QA engineering background, with a contact form backed by Resend.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Base UI primitives)
- **Motion** for animations
- **Resend** for the contact form

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form

The contact form sends email via [Resend](https://resend.com). To enable it locally:

1. Copy `.env.example` to `.env.local`
2. Add a Resend API key: `RESEND_API_KEY=re_...`
3. Restart the dev server

Without a key set, the form fails gracefully with a message telling visitors to email you directly instead.

## Editing content

Everything visitor-facing lives in `src/data/`, not scattered across components:

| File | Controls |
|---|---|
| `site-config.ts` | Name, role, tagline, social links, nav items |
| `projects.ts` | Featured project cards + detail pages |
| `services.ts` | "What I Build" section |
| `skills.ts` | Skills grid (Full-Stack / QA & Test Automation) |
| `experience.ts` | Experience timeline |

Project screenshots go in `public/projects/<slug>/`; reference them in that project's `images` array in `projects.ts` (`images[0]` becomes the card thumbnail, the full array becomes the gallery on that project's detail page).

## Build

```bash
npm run build
npm run lint
```

## Deploy

Deploys as a standard Next.js app on [Vercel](https://vercel.com). Set `RESEND_API_KEY` (and optionally `CONTACT_FROM_EMAIL`) as environment variables on the Vercel project.
