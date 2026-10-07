# R & M Outdoor Services

Static website for R & M Outdoor Services in Fairbanks and North Pole, Alaska.

## Vercel deployment

Connect `ailligdavis-a11y/R-M-Website` in Vercel and use `main` as the production branch. Leave the root directory at the repository root. The checked-in `vercel.json` selects the Other framework, skips the build step, and serves `dist`.

Pushes to `main` trigger production deployments after the GitHub connection is configured.

## Editing

Edit `dist/index.html` and the image assets in `dist/`. The quote form prepares an email using the visitor’s email app; it does not send or store submissions on a server.

## Local preview

Run `python3 -m http.server 4317 --directory dist` and visit http://localhost:4317.
