# AGENTS.md

## Project Overview

This is a premium, high-performance personal portfolio website built with **Astro 5** and **React 19**. The project emphasizes exceptional design, smooth motion, and immersive interactive elements.

- **Frontend**: Astro 5 (Islands Architecture), React 19, TypeScript
- **Styling**: Tailwind CSS 4, Vanilla CSS
- **Motion**: GSAP, Framer Motion, Lenis (Smooth Scroll)
- **3D/Visuals**: Three.js, Network Globe visualizations
- **Integration**: Web3Forms, GitHub API

## Environment

- **Runtime**: Node.js >= 18.0
- **Package Manager**: **Bun** (Strictly mandatory)
- **Infrastructure**: GitHub Pages + GitHub Actions

## MANDATORY: Always Use `bun`

This project is configured specifically for **Bun**. **Never use `npm`, `yarn`, or `pnpm`.** Any package modifications or script executions must use `bun`.

```bash
# Correct
bun add <package>
bun run dev
bun run build

# Incorrect
npm install
yarn dev
```

## Project Structure

```
/
├── public/              # Static assets (PDFs, icons, CNAME)
├── src/
│   ├── components/      # Astro & React components
│   │   ├── About.astro
│   │   ├── ContactForm.astro
│   │   ├── MagneticButton.tsx  # Interactive React component
│   │   └── NetworkGlobe.tsx    # Three.js 3D Globe
│   ├── layouts/         # Page layouts (MainLayout.astro)
│   ├── lib/             # API clients and configurations
│   ├── pages/           # Routes (index.astro)
│   └── styles/          # Global CSS and Tailwind directives
├── astro.config.mjs     # Astro configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Design Philosophy

This project rejects "AI slop" aesthetics. Every UI element must feel intentional and premium.

- **Typography**: Use characterful, distinctive fonts. Pair a bold display font with a refined body font.
- **Color & Depth**: Use cohesive palettes, gradient meshes, grain overlays, and layered transparencies.
- **Motion**: Implement "one great reveal" on page load. Use GSAP for complex timelines and Framer Motion for component-level transitions.
- **Spatial Composition**: Use generous negative space, grid-breaking elements, and intentional asymmetry.

## Code Conventions

- **Functional Patterns**: Use functional components, hooks, and pure utility functions.
- **Conciseness**: Be thorough in planning but concise in implementation. Avoid unnecessary boilerplate.
- **Type Safety**: Use interfaces for all props and data structures.
- **Implicit Returns**: Avoid explicit return types for functions and components unless they are complex or absolutely required.
- **Standard Formatting**: Maintain clean, readable code. Do *not* add excessive whitespace between every line.
- **GSAP Management**: Always kill/revert GSAP animations on unmount to prevent leaks. Wrap browser-specific GSAP logic in `<script>` tags in `.astro` files.
- **Component Structure**: Always use Astro frontmatter (`---`) for component logic.

### Code Style Example:

**Bad Example (Verbose/Implicit):**
```tsx
function MyComponent(props: any): JSX.Element {
  const handleClick = (e: any) => {
    return console.log(e);
  }
  return (
    <div onClick={handleClick}>
      {props.text}
    </div>
  );
}
```

**Correct Example (Concise/Functional/Bun-ready):**
```tsx
interface Props {
  text: string;
}

export const MyComponent = ({ text }: Props) => {
  const handleClick = (e: React.MouseEvent) => console.log(e);

  return (
    <div onClick={handleClick} className="px-4 py-2 bg-accent/10">
      {text}
    </div>
  );
};
```

## Boundaries

- **No Deletions**: Never use `rm` or similar commands to delete files.
- **No Git**: Do not use `git` commands. Source control is managed externally.
- **No Placeholders**: Never use placeholder images. Use `generate_image` or actual assets.
- **No Generic Styles**: Avoid default Tailwind colors or standard shadcn/ui components without significant customization to fit the "Aura".