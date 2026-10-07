# Website deployment

This Next.js website is deployed through GitHub and Vercel. Its repository is https://github.com/ailligdavis-a11y/R-M-Website.git and production branch is `main`.

When the user asks to deploy changes, verify the website with `npm run build`, commit the requested changes, and push to `origin/main`. Vercel automatically deploys after its GitHub connection is configured. Do not deploy through Sites or change hosting provider.

The App Router source is in `app/`, and photos and other assets are in `public/`. Preserve the Vercel configuration and package lockfile. Never commit credentials, local environment files, `.next`, or `.openai` hosting metadata.
