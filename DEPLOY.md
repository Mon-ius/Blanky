# GitHub Pages Deployment Guide

## Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Configure the base URL (if deploying to a project page):**
   - If your repo is named `username.github.io`, no changes needed
   - If your repo has a different name (e.g., `Blanky`), set the base URL:
     ```bash
     # In .env or as a GitHub secret
     NUXT_APP_BASE_URL=/Blanky/
     ```

3. **Push to master branch:**
   The GitHub Action will automatically trigger and deploy your site.

## GitHub Secrets (Optional)

Add these secrets in Settings → Secrets and variables → Actions:
- `NUXT_APP_BASE_URL`: Your base URL (e.g., `/Blanky/`)
- `NUXT_PUBLIC_SITE_URL`: Your full site URL for sitemap

## Manual Deployment

To deploy manually:
```bash
# Install dependencies
yarn install

# Generate static site
yarn generate

# The output will be in .output/public/
```

## Troubleshooting

1. **404 errors on routes:**
   - Ensure `nitro.prerender.crawlLinks` is set to `true`
   - Add specific routes to `nitro.prerender.routes` if needed

2. **Assets not loading:**
   - Check that `app.baseURL` matches your GitHub Pages URL structure
   - Verify the `.nojekyll` file exists in the public folder

3. **Build failures:**
   - Check GitHub Actions logs for specific errors
   - Ensure all dependencies are listed in package.json

## Local Preview

To preview the static build locally:
```bash
yarn generate
yarn preview
```

This will serve the static files from `.output/public/` on http://localhost:3000