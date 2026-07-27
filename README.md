# M.N. Salamath Faiha — Portfolio

Personal portfolio site for M.N. Salamath Faiha, Full-Stack Software Engineer —
showcasing production ERP/POS platforms, AI-integrated systems, and client web
applications.

## Tech stack

- [Vite](https://vitejs.dev/) — build tool and dev server
- [React 18](https://react.dev/) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- [React Router](https://reactrouter.com/) for routing
- [TanStack Query](https://tanstack.com/query) for data fetching

## Getting started

Requires Node.js 18+ and npm.

```sh
# Install dependencies
npm install --legacy-peer-deps

# Start the dev server (http://localhost:8080)
npm run dev

# Create a production build in dist/
npm run build
```

## Other scripts

```sh
npm run build:dev   # development-mode production build
npm run preview     # serve the built site locally
npm run lint        # run ESLint
```

## Project structure

```
public/          static assets (favicon, resume PDF, robots.txt)
src/components/  page sections (Hero, About, Projects, Contact, ...) and ui/ primitives
src/pages/       route-level components
src/hooks/       shared React hooks
src/lib/         utilities
```

## Deployment

`npm run build` outputs a static site to `dist/`, which can be served by any
static host (Netlify, Vercel, GitHub Pages, Nginx, etc.).
