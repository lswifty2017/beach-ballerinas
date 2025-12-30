# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This repository contains two versions of the Beach Ballerinas website:
- `gatsby-site/` - Legacy Gatsby 4 site (deprecated)
- `nextjs-site/` - New Next.js 14+ site with TypeScript and Tailwind CSS

## Build & Development Commands (Next.js)

```bash
cd nextjs-site
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # Run ESLint
```

## Architecture Overview (Next.js Site)

**Stack:** Next.js 14+ with App Router, TypeScript, Tailwind CSS v4, Contentful CMS

### Content Flow
1. Content managed in Contentful CMS
2. Pages fetch data via Contentful SDK at build/request time
3. Forms submit to API routes which send emails via Resend

### Key Directories (inside `nextjs-site/src/`)

```
app/                    # Next.js App Router pages
  page.tsx             # Homepage
  about/page.tsx       # About page
  classes/page.tsx     # Classes listing
  ...
  api/                 # API routes
    contact/route.ts   # Contact form handler
    sign-up/route.ts   # Sign-up form handler

components/
  ui/                  # Base components (Banner, Button, Gallery, etc.)
  layout/              # Header, Footer, HeaderNav
  cards/               # ClassCard, UniformCard
  content/             # ImageContent, RichTextRenderer
  forms/               # ContactForm, SignUpForm
  carousels/           # TestimonialCarousel (Embla)

lib/
  contentful/          # CMS client and query functions
  utils/               # Utility functions (cn, kebabCase, timetable)

types/                 # TypeScript interfaces
hooks/                 # React hooks (useMediaQuery)
```

### Configuration Files
- `next.config.ts` - Next.js config with image domains
- `tailwind.config.ts` - Custom colors/breakpoints (configured via CSS in globals.css)
- `.env.example` - Required environment variables

## Important Patterns

### Data Fetching
Server components fetch data directly from Contentful in async functions.

### Forms
Forms submit to API routes (`/api/contact`, `/api/sign-up`) which send emails via Resend.

### Styling
- Tailwind CSS v4 with CSS-based theme configuration in `globals.css`
- Custom colors: `primary-pink`, `primary-blue`, `primary-sand`, `primary-text`
- Breakpoints: `tablet` (767px), `desktop` (1172px)

### Images
- Next.js Image component with Contentful image URLs
- Remote patterns configured for `images.ctfassets.net`

## Environment Variables Required

```
CONTENTFUL_SPACE_ID
CONTENTFUL_ACCESS_TOKEN
CONTENTFUL_PREVIEW_TOKEN
RESEND_API_KEY
SITE_URL
```

## Setup Contentful

Before the site works, you need to:
1. Create a Contentful space
2. Create content types matching the schema in `src/types/contentful.ts`
3. Add content entries
4. Set environment variables
