# AGENTS.md — Senior Frontend Agent Guidelines

Instructions for AI agents working on this codebase. Read this fully before making any changes.

---

## Sequential Thinking

Always use the `mcp__sequential-thinking__sequentialthinking` MCP tool before implementing any non-trivial task. Use it to:
- Identify which files actually need to change (and which don't)
- Spot breaking changes and edge cases before writing code
- Validate the approach is minimal and correct

Do this before touching any file, not after.

---

## Project Overview

Personal portfolio website for Frédéric — a Full Stack developer and graphic designer. The site showcases web development and graphic design projects, with individual project pages and a contact section.

- **Deployed to:** Vercel
- **Routing:** React Router v5 (`BrowserRouter`, `Switch`, `Route`)
- **Styling:** SCSS (`.scss` files per component/page)
- **Animations:** `react-reveal` (Fade, Slide), `animejs`, `react-spring`

---

## Tech Stack

| Layer | Current | Target (new features / refactors) |
|---|---|---|
| Framework | React 16 (class + functional components) | Next.js 14+ App Router + React 18 |
| Language | JavaScript (`.js`) | TypeScript (`.tsx` / `.ts`) |
| Styling | SCSS modules | TailwindCSS (utility-first) |
| Routing | React Router v5 | Next.js file-system routing |
| State | Local component state | hooks (`useState`, `useReducer`, `useContext`) |
| Data fetching | Client-side | Next.js Server Components + `fetch` with caching |

> When working on **existing files**, preserve their current language and styling approach unless explicitly asked to migrate. When creating **new files**, prefer TypeScript, TailwindCSS, and Next.js App Router conventions.

---

## File Structure

```
src/
  components/      # Reusable UI components (Button, SideMenu, MobileNav, Name, ...)
  Pages/           # Full page components, one per route
  images/          # Static assets
  styles/          # Global SCSS variables, mixins, base styles
  App.js           # Root component — router + layout
  App.scss         # Global app styles
```

**Rules:**
- One component per file.
- File name = component name (PascalCase).
- Pages go in `Pages/`, reusable UI goes in `components/`.
- Do not create utility folders or abstract helpers for one-time use.

---

## React Conventions

### Functional components (preferred for new code)

```tsx
// Good — functional with typed props
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="...">
      <h2>{title}</h2>
    </div>
  );
};

export default ProjectCard;
```

### Class components (existing code only)

Do not convert class components to functional components unless explicitly asked. Preserve the existing pattern when editing existing files.

```js
// Existing pattern — do not change unless asked
export class SideMenu extends Component {
  render() {
    return <div className="sideMenu-container">...</div>;
  }
}
export default SideMenu;
```

### Hooks

- Use `useState`, `useEffect`, `useCallback`, `useMemo` appropriately.
- Do not use `useEffect` for things that can be computed directly in the render.
- Avoid creating custom hooks unless the logic is genuinely shared across 2+ components.

---

## TypeScript Guidelines (new files)

- Always type component props with an `interface`, not `type` aliases (unless union types are needed).
- Never use `any`. Use `unknown` and narrow it, or define the proper type.
- Do not add types to things TypeScript can infer (e.g., `const x: string = "hello"` is redundant).
- Use `React.FC` only when you need the implicit `children` prop — otherwise just type the props directly.

```ts
// Avoid
const MyComp: React.FC<Props> = ({ title }) => ...

// Prefer
const MyComp = ({ title }: Props) => ...
```

---

## Styling Guidelines

### TailwindCSS (new files / new features)

- Use utility classes directly in JSX. Do not create one-off wrapper classes just to group utilities.
- For repeated patterns, use `cn()` (e.g., with `clsx` + `tailwind-merge`) rather than duplicating class strings.
- Responsive design: mobile-first with `sm:`, `md:`, `lg:` prefixes.
- Dark mode: use `dark:` variant if the project supports it.
- Do not use `@apply` in CSS files to recreate what Tailwind already provides inline.

```tsx
// Good
<div className="flex flex-col gap-4 p-6 rounded-xl bg-white shadow-md md:flex-row">

// Avoid — unnecessary abstraction
<div className={styles.card}>
```

### SCSS (existing files)

- Preserve existing SCSS class names and structure when editing existing components.
- Variables and mixins are in `src/styles/`. Use them — do not hardcode colors or breakpoints.
- BEM naming is used in some components: respect it (`.block__element--modifier`).
- The project uses `.mobile-hidden` / `.home-page-mobile` patterns for responsive visibility — keep this approach in existing files.

---

## Animation

- `react-reveal` (`Fade`, `Slide`, etc.) is the primary animation library.
- `animejs` is available for more complex keyframe animations.
- Do not add new animation libraries. Use what is already installed.
- Keep animation delays consistent with existing pages (e.g., `delay={500}`, `delay={1900}`).

---

## Routing

### Current (React Router v5)

- All routes are declared in `App.js` using React Router v5 `<Switch>` / `<Route exact path="...">`.
- When adding a new page:
  1. Create the component in `src/Pages/`.
  2. Import it in `App.js`.
  3. Add a `<Route exact path="/slug">` entry in the `<Switch>`.
- Do not use nested routers.

### Next.js App Router (new code / migration target)

The App Router uses the filesystem. Each folder under `app/` maps to a URL segment.

```
app/
  layout.tsx          # Root layout — wraps all pages (replaces App.js shell)
  page.tsx            # Route: /
  contact/
    page.tsx          # Route: /contact
  projets/
    page.tsx          # Route: /projets
    [slug]/
      page.tsx        # Route: /projets/[slug] — dynamic segment
```

**Key rules:**
- Every `page.tsx` is a Server Component by default — do not add `"use client"` unless the component needs browser APIs or React state/effects.
- Use `<Link href="/path">` from `next/link` — never `<a href>` for internal navigation.
- Use `<Image>` from `next/image` instead of `<img>` for all images — it handles optimization, lazy loading, and responsive sizing automatically.
- Do not use React Router in Next.js projects. Routing is handled by the file system.
- For programmatic navigation use `useRouter` from `next/navigation` (not `next/router`).

```tsx
// Internal link
import Link from "next/link";
<Link href="/projets">Projets</Link>

// Optimized image
import Image from "next/image";
<Image src="/images/project.png" alt="Project" width={800} height={600} />

// Programmatic navigation (client component only)
"use client";
import { useRouter } from "next/navigation";
const router = useRouter();
router.push("/contact");
```

---

## Next.js Server vs Client Components

This is the most critical distinction in the App Router — get it wrong and the build fails or you lose SSR benefits.

### Server Components (default)

- Run on the server, never sent to the client bundle.
- Can `async/await` directly — no `useEffect` needed for data fetching.
- Cannot use hooks (`useState`, `useEffect`, etc.), browser APIs, or event handlers.
- Cannot import Client Components that use hooks without marking them `"use client"`.

```tsx
// app/projets/page.tsx — Server Component
const ProjetsPage = async () => {
  const projects = await fetchProjects(); // direct async call, no useEffect
  return (
    <ul>
      {projects.map((p) => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
};
export default ProjetsPage;
```

### Client Components

- Add `"use client"` at the top of the file — this marks the file and all its imports as client-side.
- Required for: `useState`, `useEffect`, `useRef`, event handlers (`onClick`, etc.), browser APIs.
- Keep them as leaf nodes in the component tree — push `"use client"` as far down as possible.

```tsx
"use client";
// components/AnimatedHero.tsx — needs useState/useEffect for animation
import { useState, useEffect } from "react";

const AnimatedHero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);
  return <h1 className={visible ? "opacity-100" : "opacity-0"}>Hello</h1>;
};
export default AnimatedHero;
```

**Decision rule:** start with a Server Component. Only add `"use client"` when you hit a hard requirement (hook, event, browser API).

---

## Next.js Data Fetching

- Fetch data directly in Server Components using `async/await`. Do not use `useEffect` + `useState` for server data.
- Use Next.js extended `fetch` with cache options:

```tsx
// Cached (default — equivalent to getStaticProps)
const data = await fetch("https://api.example.com/projects").then(r => r.json());

// No cache — fresh on every request (equivalent to getServerSideProps)
const data = await fetch("https://api.example.com/projects", { cache: "no-store" }).then(r => r.json());

// Revalidate every N seconds (ISR)
const data = await fetch("https://api.example.com/projects", { next: { revalidate: 3600 } }).then(r => r.json());
```

- Do not use `getStaticProps` / `getServerSideProps` — those are Pages Router patterns. They do not work in the App Router.

---

## Next.js Layouts and Metadata

### Layouts

- `app/layout.tsx` is the root layout. It must render `{children}` and include `<html>` + `<body>`.
- Nested layouts inherit from parent layouts — use them to share UI across a section of routes.
- Do not duplicate navigation or shell UI across multiple layouts.

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SideMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### Metadata

- Define page metadata using the `metadata` export or `generateMetadata` function — never with `<head>` tags directly.

```tsx
// Static metadata
export const metadata = {
  title: "Frédéric — Développeur Full Stack",
  description: "Portfolio de développement web et de design graphique.",
};

// Dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  return { title: `Projet — ${params.slug}` };
}
```

---

## Next.js File Structure (App Router)

```
app/
  layout.tsx              # Root layout — <html>, <body>, persistent shell UI
  page.tsx                # Home page (/)
  globals.css             # Global styles (imported once in layout.tsx)
  contact/
    page.tsx
  projets/
    page.tsx
    [slug]/
      page.tsx
components/               # Reusable UI — Server Components by default
  SideMenu.tsx
  MobileNav.tsx
  ui/                     # Pure presentational components (no logic)
lib/                      # Server-side utilities, data fetching helpers
public/                   # Static assets — served at /
  images/
```

**Rules:**
- `page.tsx` and `layout.tsx` are reserved Next.js filenames — do not use them for anything else.
- `loading.tsx` and `error.tsx` are optional but reserved — add them only when explicitly asked.
- Components that are purely presentational live in `components/`. Only move to `components/ui/` if there is a clear presentational/logic split.

---

## What Agents Must NOT Do

- Do not add ESLint disable comments to silence warnings — fix the underlying issue.
- Do not use `// @ts-ignore` — fix the type error properly.
- Do not install new packages without explicit instruction.
- Do not remove or rename existing CSS classes — they may be referenced in SCSS files not immediately visible.
- Do not create `index.ts` barrel files unless the project already uses them.
- Do not add `console.log` to production code.
- Do not add comments explaining what the code does — the code should be self-explanatory. Only comment *why* when the reason is non-obvious.
- Do not add error boundaries, loading states, or fallback UI unless explicitly asked.
- Do not refactor code that was not part of the requested change.
- Do not add `"use client"` to a file unless strictly required — default to Server Components.
- Do not use `getStaticProps`, `getServerSideProps`, or `getInitialProps` — those are Pages Router APIs.
- Do not use `next/router` — use `next/navigation` in the App Router.
- Do not place data fetching logic inside Client Components when a Server Component can handle it.

---

## Commit Style

Follow the existing commit message style observed in this repo: short, lowercase, imperative sentences.

```
add contact form validation
fix mobile nav z-index
update hero animation delay
```

---

## Key Files

| File | Purpose |
|---|---|
| `src/App.js` | Root component — all routes defined here |
| `src/App.scss` | Global styles entry point |
| `src/Pages/Home.js` | Landing page with Webdev + Graphist sections |
| `src/components/SideMenu.js` | Desktop navigation sidebar |
| `src/components/MobileNav.js` | Mobile navigation |
| `firebase.json` | Firebase config (legacy — project now deployed on Vercel) |
