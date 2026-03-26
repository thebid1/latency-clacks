# AGENTS.md - Agent Context for thebid Portfolio

> This file provides essential context for AI agents working on this codebase.

---

## Project Overview

**thebid Portfolio** is a high-performance personal portfolio website for a Web3 Automation Engineer & Smart Contract Developer. The design theme is "Terminal High-End" - featuring dark mode, glassmorphism effects, monospace headers, and emerald green accents.

**Live URL:** https://thebidfr.vercel.app

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 |
| UI Animation | Framer Motion |
| Icons | Lucide React |
| Content | MDX (next-mdx-remote) |
| Fonts | Inter (UI), JetBrains Mono (Code) |
| Build Output | Static Export |

---

## Project Structure

```
/src
 ├── app/                     # Next.js App Router
 │   ├── layout.tsx           # Root layout with fonts & metadata
 │   ├── page.tsx             # Home page
 │   ├── globals.css          # Global styles & CSS variables
 │   ├── sitemap.ts           # SEO sitemap
 │   ├── robots.ts            # SEO robots.txt
 │   ├── not-found.tsx        # 404 page
 │   ├── contact/
 │   │   └── page.tsx         # Contact form (client component)
 │   ├── media/
 │   │   └── page.tsx         # Video gallery
 │   └── projects/
 │       ├── page.tsx         # Project list
 │       └── [slug]/
 │           └── page.tsx     # Dynamic case study pages
 ├── components/
 │   ├── ui/                  # Reusable UI components
 │   │   ├── Button.tsx       # Primary/Terminal/Ghost variants
 │   │   ├── Card.tsx         # Glass/bordered card variants
 │   │   ├── Badge.tsx        # Status badges
 │   │   ├── Container.tsx    # Max-width containers
 │   │   └── CodeBlock.tsx    # Code display
 │   ├── layout/
 │   │   ├── Navbar.tsx       # Fixed navigation
 │   │   └── Footer.tsx       # Site footer
 │   ├── home/
 │   │   ├── Hero.tsx         # Landing hero section
 │   │   ├── MetricsGrid.tsx  # Stats/trust indicators
 │   │   ├── TechTicker.tsx   # Scrolling tech stack
 │   │   ├── FeaturedProjects.tsx
 │   │   └── Testimonials.tsx
 │   └── mdx/
 │       └── MDXComponents.tsx # MDX styling overrides
 ├── content/projects/        # MDX case study files
 │   ├── master-splinter.mdx
 │   ├── octa-enigma.mdx
 │   ├── snoopers-tenfold.mdx
 │   └── nft-auction.mdx
 ├── lib/
 │   ├── utils.ts             # cn() helper, date formatting
 │   ├── mdx.ts               # MDX file parsing (gray-matter)
 │   ├── projects.ts          # Project data (static array)
 │   └── env.ts               # Environment validation
 ├── types/
 │   └── index.ts             # TypeScript interfaces
 └── styles/                  # Additional styles if needed
```

---

## Design System

### Colors
- **Background:** `bg-zinc-950` (Deep matte black)
- **Surface:** `bg-zinc-900/50` (Glass panels)
- **Primary Accent:** `text-emerald-500` (DeFi/Money signal)
- **Border:** `border-zinc-800`
- **Text Primary:** `text-zinc-100`
- **Text Secondary:** `text-zinc-400`
- **Text Muted:** `text-zinc-500`

### Typography
- **UI Font:** Inter (sans-serif)
- **Code/Mono:** JetBrains Mono (monospace)
- **Font Sizes:** Use standard Tailwind scale

### Custom CSS Classes (globals.css)
```css
.terminal-glow    # Text shadow for headings
glass             # bg-zinc-900/50 backdrop-blur-xl border-zinc-800/50
glass-strong      # Stronger glass effect for nav
.scanlines        # Subtle scanline overlay
dot-grid          # Background dot pattern
.status-dot       # Animated status indicator
```

### Button Variants
- `primary` - Emerald fill, dark text
- `secondary` - Zinc fill, light text
- `terminal` - Transparent, emerald border, mono font
- `ghost` - Transparent, subtle hover

---

## Environment Variables

Copy `.env.example` to `.env.local`:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree form endpoint | Yes |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email display | No |
| `NEXT_PUBLIC_SITE_URL` | Production domain for SEO | No |

---

## Common Tasks

### Add a New Project

1. Create MDX file in `src/content/projects/{slug}.mdx`:
```yaml
---
title: "Project Name"
description: "Short description"
status: "Live" | "Building" | "In Development" | "Open Source"
technologies: ["Tech1", "Tech2"]
liveUrl: "https://..."  # optional
icon: "🚀"
---

## Overview

Content here...
```

2. Update `src/lib/projects.ts` with project metadata (for featured display on home)

### Add a New Page

1. Create folder in `src/app/{route}/`
2. Add `page.tsx` with proper metadata export
3. Use `Container` component for consistent max-width
4. Follow existing page structure patterns

### Modify UI Components

- All UI components use `cn()` utility for class merging
- Prefer extending existing variants over creating new components
- Keep animations subtle and professional

---

## Build & Deploy

```bash
# Development
npm run dev

# Production build (static export)
npm run build

# Output is in `dist/` folder (configured in next.config.js)
```

**Deployment Platform:** Vercel (configured for static export)

---

## Key Patterns

### Client Components
Mark with `"use client"` when using:
- React hooks (useState, useEffect)
- Browser APIs
- Event handlers that need state

Pages that are client components:
- `/contact/page.tsx` - Form state management
- `/media/page.tsx` - Video player
- `components/home/*.tsx` - Interactive sections

### Server Components (Default)
Used for:
- `/projects/page.tsx` - MDX data fetching
- `/projects/[slug]/page.tsx` - Dynamic rendering
- `layout.tsx` - Root layout

### Data Flow
- Project data: Static arrays in `lib/projects.ts`
- MDX content: File system via `lib/mdx.ts` (gray-matter)
- Contact form: Formspree API (client-side submission)

---

## Security Considerations

- Contact form has input validation and length limits
- Honeypot field (`_gotcha`) for bot protection
- No sensitive data in client-side code
- Environment variables properly prefixed with `NEXT_PUBLIC_`

---

## Dependencies to Know

| Package | Purpose |
|---------|---------|
| `framer-motion` | Page transitions & micro-interactions |
| `next-mdx-remote` | Render MDX content |
| `gray-matter` | Parse MDX frontmatter |
| `clsx` / `tailwind-merge` | Conditional class utilities |
| `lucide-react` | Icon library |

---

## Troubleshooting

### Build Errors
- Ensure all MDX files have valid frontmatter
- Check `next.config.js` for static export settings
- Verify Node.js version >= 22

### Hydration Mismatches
- Use `useEffect` + `useState` pattern for client-only rendering (see TechTicker)
- Avoid `typeof window` checks without proper guards

### Style Issues
- All pages use `dark` class on body (forced dark mode)
- Check `globals.css` for custom utility classes
- Verify Tailwind content paths in `tailwind.config.ts`
