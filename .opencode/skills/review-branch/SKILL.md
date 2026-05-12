---
name: review-branch
description: Review all changes in the current branch
---

## What to do

1. Identify the base branch (usually `main`) and run `git diff main...HEAD` to see all changes
2. Check every changed file for:
   - TypeScript errors or unused variables
   - Missing or incorrect accessibility attributes
   - Hardcoded values that could use theme tokens
   - Dead code (unused imports, empty files)
   - Security issues in `rel`, `target`, or user-facing content
3. Summarize findings by severity — anything that blocks merge vs. nice-to-have
4. Suggest specific fixes per file
