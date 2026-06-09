# catiarodrigues.dev

Personal portfolio site built with [Vite](https://vite.dev) + [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) + [Tailwind CSS v4](https://tailwindcss.com).

## Tech stack

- **Framework:** React 19 with TypeScript
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Linting:** oxlint
- **Formatting:** oxfmt
- **Package manager:** pnpm
- **Fonts:** Cookie (display), Raleway (body) via Google Fonts

## Scripts

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `pnpm dev`         | Start development server            |
| `pnpm build`       | Type-check and build for production |
| `pnpm lint`        | Run oxlint                          |
| `pnpm format:write` | Format code with oxfmt             |
| `pnpm format:check` | Check formatting with oxfmt        |
| `pnpm preview`     | Preview production build            |

## Project structure

```
src/
├── assets/          # Static assets (images)
├── components/      # Reusable UI components
├── contexts/        # React contexts (theme)
├── pages/           # Page-level components
└── resources/       # Constants and configuration
```

## Features

- Light/dark mode with system preference detection and localStorage persistence
- Responsive single-page layout
- External links to LinkedIn, GitHub, Instagram, and email
