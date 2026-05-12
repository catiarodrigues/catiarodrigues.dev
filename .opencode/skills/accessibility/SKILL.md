---
name: accessibility
description: Audit accessibility of the portfolio site
---

## What to check

1. All `<img>` elements use `alt` (not `aria-label`) — e.g. profile image
2. Color contrast passes WCAG AA — `text-muted` (#666 on white) and `text-accent` (#f0c029 on white)
3. All `target="_blank"` links include `rel="noopener noreferrer"`
4. Interactive elements are keyboard-navigable — ThemeToggle is a `<button>`, links are `<a>`
5. Semantic HTML — root wrapper is `<div>` not `<article>`, header/footer/main landmarks exist
6. Dark mode toggle has an `aria-label` that describes the action
