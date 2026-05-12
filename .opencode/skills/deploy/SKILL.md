---
name: deploy
description: Build and deploy to GitHub Pages
---

## Steps

1. Run `yarn build` to produce the `dist/` folder
2. Deploy `dist/` to GitHub Pages:
   - `npx gh-pages -d dist`
   - Or push to the `gh-pages` branch
3. Verify the live site after deployment
