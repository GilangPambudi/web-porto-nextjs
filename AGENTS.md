# Repository Guidelines

## Project Structure

- `app/` contains the Next.js App Router entry points, page composition, metadata, sitemap, and robots configuration.
- `components/sections/` contains page sections; `components/ui/` contains reusable shadcn/Radix-based UI primitives. Shared site chrome lives in `components/`.
- `hooks/` contains reusable React hooks, while `lib/` contains shared utilities and portfolio content/types (`lib/data.ts`).
- `public/` stores images, icons, certificates, and other browser-served assets. Use root-relative paths such as `/profil.jpeg`.
- `tailwind.config.ts`, `app/globals.css`, `DESIGN.md`, and `example.html` define the styling system and visual reference.

## Build, Test, and Development Commands

Run the existing npm scripts:

```bash
npm run dev      # start the local Next.js development server
npm run lint     # run the configured Next.js lint check
npm run build    # create a production build and catch type/build errors
npm run start    # serve the production build locally
```

There is currently no test script or test directory. For UI changes, run lint and build, then check the affected page at mobile and desktop widths. Avoid updating both lockfiles unintentionally.

## Coding Style & Naming Conventions

Use strict TypeScript, two-space indentation, double quotes, and the existing semicolon-light style. Name component files in kebab-case (`hero-section.tsx`) and exported React components in PascalCase. Name hooks with the `use-` prefix (`use-in-view.ts`). Prefer the `@/*` import alias, typed data structures, and Tailwind utilities over new custom CSS. Follow `DESIGN.md`: mobile-first layouts, semantic theme tokens, restrained motion, small radii, and accessible focus/touch targets.

## Testing Guidelines

When adding non-trivial behavior, include the smallest practical verification alongside the change. At minimum, ensure `npm run lint` and `npm run build` pass; manually verify navigation, responsive layout, animations, and asset loading when relevant.

## Commit & Pull Request Guidelines

Use concise imperative commits with the existing Conventional Commit style, for example `feat: add project section` or `fix: correct mobile navigation`. Pull requests should explain the user-visible change, link a related issue when available, list validation commands, and include screenshots or a short recording for visual changes. Keep secrets out of commits; `.env*`, `.next/`, and build output are ignored.
