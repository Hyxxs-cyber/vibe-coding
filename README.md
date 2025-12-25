# Vibe Coding – Personal Portfolio

Full-stack personal homepage built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Requirements

- Node.js 18.18 or higher (Node 22.x tested)
- npm 9+ (11.x tested)

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project Structure

- `app/` – App Router routes, layout, and page sections
  - `/` – Home with hero, about, skills, projects, and contact
  - `/projects` – Project listing (placeholder data)
  - `/blog` – Blog listing (placeholder data)
- `components/` – Reusable UI components (navigation, cards, layout helpers)
- `lib/` – Shared data (skills, projects, posts)
- `public/` – Static assets
- `app/globals.css` – Global styles powered by Tailwind CSS

## Development Notes

- Tailwind CSS is preconfigured via `tailwind.config.ts`.
- SEO basics are defined in `app/layout.tsx` metadata.
- Navigation and footer are shared via the root layout.

## Verification Checklist

- `npm install` completes successfully.
- `npm run dev` starts the development server at port 3000.
- Home, Projects, and Blog routes render placeholder content without errors.
