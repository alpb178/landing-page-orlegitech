# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OrlegiTech landing page — a Next.js 16 app (React 19, TypeScript) for a golf course technology company. Uses Tailwind CSS v4, next-intl for i18n (Spanish/English/French), and lucide-react for icons.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run type-check   # TypeScript type checking (tsc --noEmit)
npm test             # Run all Jest tests
npm run test:watch   # Jest in watch mode
npx jest path/to/file.test.tsx  # Run a single test file
```

## Architecture

### Routing

Next.js App Router with locale-based routing via next-intl. All routes are prefixed with `/{locale}/`.

- `app/page.tsx` — redirects to default locale
- `app/[locale]/page.tsx` — landing page (home)
- `app/[locale]/(services)/[service]/page.tsx` — dynamic service detail pages
- `proxy.ts` — next-intl middleware for locale detection
- `i18n/routing.ts` — locale config and navigation exports (`Link`, `useRouter`, `usePathname`, `redirect`)
- `i18n/request.ts` — request-time i18n config (used by next-intl plugin in `next.config.ts`)

Supported locales: `es` (default), `en`, `fr`.

### Component Organization

Three-tier structure:

1. **Page components** (`app/[locale]/...`) — server components that compose container components
2. **Container components** (`container/`) — large page sections (header, hero, services, features, about, contact, price, footer, demo). Use `"use client"` when needing hooks/state
3. **Reusable components** (`components/`) — small UI elements (AnimatedCard, SectionAnimation, LanguageSelector, ScrollToTop, ScrollToSection) and icon components

Feature detail pages live in `container/features/containers/{feature-slug}/`.

### Internationalization

- Translation files: `messages/{es,en,fr}.json` (flat JSON, namespaced keys)
- Usage: `const t = useTranslations("namespace")` then `t("key")`
- Navigation imports come from `i18n/routing.ts` (not `next/navigation`) to preserve locale context
- When adding new text, add translations to all three locale files

### Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- Global styles and custom animations in `app/globals.css`
- Three fonts: Inter (body), Montserrat Alternates (headings), Dancing Script (decorative)
- Color palette: dark teals/greens (#013322, #024a32, #036546)
- Animation patterns use IntersectionObserver via AnimatedCard and SectionAnimation components

### Testing

- Jest 30 + React Testing Library + jsdom
- Tests co-located with components as `*.test.tsx`
- `jest.setup.js` mocks: `next/image`, `next-intl`, `i18n/routing`, `next/navigation`, `IntersectionObserver`
- Path alias `@/*` mapped to project root in `jest.config.cjs`

## Key Conventions

- Default to server components; only add `"use client"` when hooks/state/browser APIs are needed
- Import `Link`, `useRouter`, `usePathname`, `redirect` from `@/i18n/routing` (not from `next/navigation` or `next/link`)
- Route slugs use kebab-case (e.g., `aerial-reports`, `user-check-in`)
- Git branches: `feature/*`, `fix/*`, `chore/*` off `develop`; PRs target `main`
- Commit messages: `feat:`, `fix:`, `chore:`, `refactor:`, `test:` prefixes
