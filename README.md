# R & M Outdoor Services

Next.js App Router website for R & M Outdoor Services in Fairbanks and North Pole, Alaska.

## Development

Use Node.js 20.9 or newer. Run `npm ci`, then `npm run dev`.

The homepage is in `app/page.jsx`, shared styles in `app/globals.css`, and metadata in `app/layout.jsx`. Photos and the logo are in `public/`.

The quote form prepares an email using the visitor’s email app; it does not send or store submissions on a server.

## Deployment

Run `npm run build` to verify production compilation. Connect `ailligdavis-a11y/R-M-Website` to Vercel with `main` as the production branch and the root directory set to the repository root. `vercel.json` selects Next.js, `npm run build`, and `.next` output.

Pushes to `main` trigger deployments once the Vercel GitHub connection is configured.
