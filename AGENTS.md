# Website deployment

This website is deployed through GitHub and Vercel. The corresponding repository is https://github.com/ailligdavis-a11y/R-M-Website.git and the production branch is `main`.

When the user asks to deploy changes, verify the website and its local asset references, commit the requested changes, and push to `origin/main`. Vercel automatically deploys after its GitHub connection is configured. Do not deploy through Sites or change the hosting provider.

The static website is in `dist/`. Preserve the Vercel configuration and do not add a build dependency unless the requested functionality requires one. Never commit credentials, local environment files, or `.openai` hosting metadata.
