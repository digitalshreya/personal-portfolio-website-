# Digital Shreya portfolio

Next.js portfolio configured as a static export for Cloudflare Pages.

## Build locally

Use Node.js 22 or newer.

```sh
npm ci
npm run build
```

The deployable website is generated in `out/`. `node_modules/` and build output are ignored by Git.

## Cloudflare Pages

When importing the GitHub repository in Cloudflare Pages, use:

- Production branch: `main`
- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: repository root

Set `NEXT_PUBLIC_SITE_URL` to your final production URL if using a custom domain. The build otherwise uses `CF_PAGES_URL`, with `https://digital-shreya-portfolio.pages.dev` as the local fallback.

For a manual upload after signing in to Wrangler:

```sh
npm run build
npx wrangler pages deploy out --project-name digital-shreya-portfolio --branch main
```

## Contact form

The form submits directly to FormSubmit and sends enquiries to `digitalsrehya@gmail.com`. No server-side API key is required. Submit the form once on the deployed site and activate it using FormSubmit's confirmation email if requested. Browser validation, a honeypot, and submission success/error messages are included.

Website copy, services, articles, and contact links are in `content/site.ts`. Set `NEXT_PUBLIC_BOOKING_URL` at build time to enable an external consultation scheduling link.
