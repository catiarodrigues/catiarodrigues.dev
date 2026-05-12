---
name: performance
description: Run Lighthouse audit and check bundle size
---

## What to check

1. Run `yarn build` then `npx lighthouse dist/ --view` for a full report
2. Check bundle size with `npx vite build --report` or analyze `dist/assets/`
3. Verify image optimization — `src/assets/profile.png` should be under 50 KB
4. Confirm Google Fonts are preloaded (already set in `index.html`)
5. Check that `dark:` mode transition uses `transition-colors` on the root wrapper (not body) to avoid layout thrashing
