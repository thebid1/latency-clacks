# latency-clacks
My Portfolio
=======
# thebid | Web3 Portfolio

Live link: https://thebidfr.vercel.app

A high-performance personal portfolio website for a Web3 Automation Engineer & Smart Contract Developer.

![Tech Stack](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## 🎯 Purpose

This portfolio demonstrates technical competence in Web3 development—proving the ability to build infrastructure (bots, contracts, tooling) rather than just investing in crypto.

## ✨ Features

- **"Terminal High-End" Design System**: Dark mode, glassmorphism, mono-spaced headers
- **Trust Battery Metrics**: Live-simulated operational stats
- **MDX-Powered Case Studies**: Code snippets in project write-ups
- **Framer Motion Animations**: Micro-interactions and page transitions
- **Tech Stack Ticker**: Auto-scrolling technology showcase
- **Production-Ready Security**: Security headers, CSP, input validation

## 🏗️ Architecture

```
/src
 │─── app                    # Next.js App Router
 │   │─── layout.tsx         # Root layout with fonts
 │   │─── page.tsx           # Home page
 │   │─── projects           # Project routes
 │   │   │─── page.tsx       # Project index
 │   │   │─── [slug]         # Dynamic case studies
 │   │─── media              # Video gallery
 │   │─── contact            # Contact form
 │   │─── sitemap.ts         # SEO sitemap
 │   │─── robots.ts          # SEO robots.txt
 │─── components
 │   │─── ui                 # Reusable UI components
 │   │─── layout             # Navbar, Footer
 │   │─── home               # Hero, Metrics, Ticker
 │   │─── mdx                # MDX rendering components
 │─── content/projects       # MDX case study files
 │─── lib                    # Utilities & data
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree form endpoint for contact form | Yes |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email (optional, hides if empty) | No |
| `NEXT_PUBLIC_SITE_URL` | Production site URL for SEO | No |

Get your Formspree endpoint at https://formspree.io

## 🚀 Deployment Guide (Vercel)

### Step 1: Prepare Your Code

```bash
# Ensure your code is committed
git add .
git commit -m "Production ready"
git push origin main
```

### Step 2: Deploy to Vercel

**Option A: Vercel CLI (Recommended for developers)**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**Option B: GitHub Integration (Easiest)**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure environment variables (see below)
6. Click "Deploy"

### Step 3: Configure Environment Variables on Vercel

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/YOUR_FORM_ID` | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` | Production |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `your-email@example.com` (optional) | Production |

3. Click **Save** and redeploy

### Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

### Step 5: Configure Formspree

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Add your domain to **Allowed Domains** (prevents spam)
4. Test the contact form

## 📋 Production Checklist

Before deploying:

- [ ] All environment variables configured in Vercel
- [ ] Formspree endpoint secured with domain restrictions
- [ ] Custom domain configured (if using)
- [ ] Google Analytics/Search Console verification (optional)
- [ ] Test contact form submission
- [ ] Verify all project links work
- [ ] Check responsive design on mobile

## 🔒 Security Features

This portfolio includes production-ready security measures:

- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **CSP Ready**: Content Security Policy prepared
- **Input Validation**: Contact form with length limits and sanitization
- **No Secrets Exposed**: All sensitive data via environment variables
- **Email Protection**: Optional email display (disabled if env var not set)
- **Robots.txt**: SEO-friendly crawler configuration

## 🎨 Design System

- **Background**: `bg-zinc-950` (Deep matte black)
- **Surface**: `bg-zinc-900/50` (Glass panels)
- **Primary Accent**: `text-emerald-500` (DeFi/Money signal)
- **Typography**: Inter (UI) + JetBrains Mono (Code/Headers)

## 📝 License

MIT License - Built with passion for Web3.

>>>>>>> 8074716 (my-portfolio)
