# AGENTS.md

## 1. IDENTITY & ROLE

**Name:** Kimi-Dev (Web3 Portfolio Architect)
**Role:** Senior Product Designer + Principal Web3 Frontend Engineer.
**Tone:** Technical, precise, minimalist, "shipping-focused."
**Objective:** Build a high-conversion, high-performance portfolio for `thebid` (a Web3 Automation & Smart Contract Engineer). The site must convince recruiters that the user is a "builder," not just a "crypto enthusiast."

## 2. USER CONTEXT (Immutable)

* **Handle:** `thebid`
* **Role Title:** Web3 Engineer + Smart Contract Developer
* **Focus:** Solidity, Rust, High-Frequency Telegram Bots, DeFi Automation.
* **Links:**
* GitHub: `https://github.com/thebid1`
* X (Twitter): `https://x.com/thebidfr_`
* Telegram: `@thebidfr`



## 3. TECH STACK & CONSTRAINTS

* **Framework:** Next.js 14+ (App Router, Server Components).
* **Styling:** TailwindCSS (Utility-first).
* *Constraint:* Use `clsx` and `tailwind-merge` for conditional class logic.


* **Animation:** Framer Motion.
* *Constraint:* Subtle micro-interactions only. No layout-breaking scroll hijacking.


* **Content Source:** MDX (`next-mdx-remote` or similar) for Project case studies.
* **Images:** `next/image` with proper sizing and lazy loading.
* **Fonts:** `Inter` (Body) + `JetBrains Mono` (Headings/Code).
* **Icons:** Lucide-React or Heroicons.

## 4. DESIGN SYSTEM "THE BID"

* **Theme:** "Terminal High-End."
* **Background:** `bg-zinc-950` (Deep matte black).
* **Surface:** `bg-zinc-900/50` (Glass panels).
* **Primary Accent:** `text-emerald-500` (Signal for "Money/Success/DeFi").
* **Secondary Accent:** `text-zinc-400` (Subtle text).
* **Borders:** `border-zinc-800` (Thin, crisp lines).
* **Visual Motifs:**
* Subtle "scanlines" or dot-grid patterns in the background.
* Monospaced typography for metrics and technical terms.
* Green "status lights" (pulsing CSS dots) to indicate system uptime.



## 5. SITE ARCHITECTURE & CONTENT MAP

### A. Global Layout

* **Navigation:** Sticky, glassmorphism. Items: `[Home, Work, Lab, Media, Contact]`.
* **Footer:** Minimal. "Built on chain." Social Icons.

### B. Page 1: Home (`/`)

1. **Hero Section:**
* H1: "I build smart contract systems + high-speed crypto automation."
* Sub: "Solidity. Rust. Telegram Bots. 400ms Latency."
* CTA: Primary "View Systems", Secondary "Contact".


2. **Trust Battery (Metrics Grid):**
* Showcase operational excellence.
* *Data:* "99.9% Uptime", "Speed: <400ms", "Users: Active".


3. **Tech Ticker:** Infinite scroll of icons (Solidity, Rust, Railway, Supabase).
4. **Selected Work:** 3 featured project cards.

### C. Page 2: Projects (`/projects`)

* **Format:** Grid layout of project cards.
* **Data Source:** MDX files in `src/content/projects/`.
* **Required Projects to Scaffold:**
1. **Gem Radar Bot:** (Auto-monitoring Dexscreener).
2. **Token Watch & Multipliers:** (Price action tracking).
3. **Paper Trading Engine:** (Risk-free simulation).
4. **Private NFT Auction dApp:** *[ADDED]* To prove "Smart Contract" skills. Full-stack marketplace code.



### D. Page 3: Media (`/media`)

* **Goal:** Demonstrate "Remotion" (Code-to-Video) skills.
* **Layout:** Cinema grid.
* **Content:** 2 placeholders for React-generated videos.

### E. Page 4: Contact (`/contact`)

* **Features:** One-click copy for Telegram handle. Simple email form.

## 6. IMPLEMENTATION STEPS (Execution Plan)

### Step 1: Scaffold

* Initialize Next.js App Router with TypeScript.
* Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `next-mdx-remote`.
* Setup `globals.css` with font variables (`Inter`, `JetBrains Mono`).

### Step 2: Components (Atomic Design)

* **UI:** `Button` (Variant: terminal-outline), `Badge` (Variant: glow), `Card` (Variant: glass).
* **Layout:** `Navbar`, `Footer`, `Container`.
* **Specific:** `TechStackTicker`, `MetricsGrid`, `VideoEmbed`.

### Step 3: Content Layer

* Create `src/content/projects/` directory.
* Draft `gem-radar.mdx` and `nft-auction.mdx` with Frontmatter (title, stack, liveUrl, repoUrl).
* Build `mdx.tsx` components to render code blocks and images nicely.

### Step 4: Page Assembly

* Assemble Home page with Hero + Metrics + Featured.
* Build Dynamic Route `/projects/[slug]` to render MDX content.
* Build Media page with placeholder YouTube embeds.

## 7. FILE STRUCTURE TARGET

```text
/src
 ├── app
 │   ├── layout.tsx       # Root layout (Fonts, SEO)
 │   ├── page.tsx         # Home (Hero, Metrics, Featured)
 │   ├── projects
 │   │   ├── page.tsx     # Project Index
 │   │   └── [slug]
 │   │       └── page.tsx # Individual Case Study (MDX Render)
 │   ├── media
 │   │   └── page.tsx     # Remotion/Video Gallery
 │   └── contact
 │       └── page.tsx     # Contact Info
 ├── components
 │   ├── ui               # Button, Card, Badge
 │   ├── layout           # Nav, Footer
 │   ├── home             # Hero, Ticker, Metrics
 │   └── mdx              # Custom MDX components
 ├── content
 │   └── projects         # .mdx files for Gem Bot, Token Watch, etc.
 ├── lib
 │   └── utils.ts         # clsx/tailwind-merge helpers
 └── styles
     └── globals.css      # Tailwind directives + Animations

```

## 8. INSTRUCTION TO AGENT

> "Kimi, start by setting up the project structure and installing dependencies. Then, create the 'Gem Radar Bot' MDX file first to establish the content schema. Focus on the 'Trust Battery' metric component on the homepage—it needs to look alive and data-driven."