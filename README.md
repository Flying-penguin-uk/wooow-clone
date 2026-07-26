# Wooow Invites, structural rebuild

A working front end rebuild of the wooowinvites.com product, built for testing and improvement
work. Vite + React 19 + TypeScript + Tailwind + Framer Motion + React Router.

## Running it

```bash
npm install
npm run dev
```

Dev server comes up on `http://localhost:5173`. `npm run build` produces `dist/`.

## What is faithful to the reference

- **Design tokens** lifted exactly: the full HSL variable set (`--primary 350 40% 35%`,
  `--gold 42 70% 55%`, `--sage 140 20% 45%`, the cream/blush/burgundy ramp, `--radius .5rem`).
- **Type system**: Cormorant Garamond for h1/h2, Playfair Display for h3/h4, Raleway for UI,
  Inter for body, Great Vibes for script accents, Cinzel for date lines.
- **Navigation**: the same eight primary items plus the More dropdown with its New badge, the
  ten language selector, Log In and Get Started, and a full screen mobile drawer.
- **Homepage section order**, top to bottom, matching the reference: hero with rotating word and
  sale countdown, wax seal envelope, three step How It Works, feature swipe rail, also included
  grid, fifteen information blocks, all in one banner, theme carousel, pricing, Save the Date,
  Memories, wedding/birthday drag comparison, planners band, paper vs digital table, planning
  tools, dashboard studio, testimonials, final CTA.
- **Commercial model**: VIP £99 (was £200) with Save the Date bundled, Basic £89, Deluxe £599,
  standalone Save the Date £49, planner tiers, Memories free and paid.
- **Interactions**: hero word rotator, rolling sale countdown, live wax seal colour and initials
  editor, horizontal snap rails, theme filter with layout animation, theme preview modal,
  draggable before/after comparison, accordion, scroll reveals, sticky condensing header,
  delayed newsletter modal.

## What is deliberately not a copy

The reference site's marketing prose, its theme films and its photography are its own
copyrighted work, so none of it is reproduced here. Instead:

- **Copy** is original throughout, written to the same purpose and roughly the same length as
  each section it replaces, so the layout behaves identically under real text.
- **Theme artwork**: the reference plays a short MP4 per theme. This build uses a slow Ken Burns
  Unsplash still under an animated gradient wash, at the same aspect ratio and card size. Swap
  `photo` and `grad` in `src/data/themes.ts` for real footage when you have it.
- **Brand marks** are a generic monogram, not the reference logo.

## Routes

| Route | What it is |
|---|---|
| `/` | Homepage, 16 sections |
| `/themes` | 64 themes, 7 category filters, preview modal |
| `/how-it-works` | The dashboard explained in 7 steps |
| `/faq` | 14 questions, accordion |
| `/contact` | Contact form with success state |
| `/wedding-planners` | Planner pitch, 2 tiers, sample dashboard |
| `/quinceanera-invitation` | Quinceanera landing |
| `/memories` | Shared photo album product |
| `/testimonials` | Masonry review wall |
| `/affiliates` | 30% programme with a live commission calculator |
| `/blog`, `/blog/:slug` | Index and article template |
| `/digital-wedding-invite` | SEO landing page |
| `/privacy`, `/terms` | Legal placeholders |
| `/order?plan=vip\|basic\|deluxe` | Three step checkout |
| `/order-save-the-date` | Save the Date checkout |
| `/auth` | Sign in and password reset |
| `/dashboard` | Mock app, 7 panels |
| anything else | 404 |

## The dashboard

Seven working panels driven by local mock data in `src/data/mockDashboard.ts`:

- **Overview**: RSVP counters, reply rate bar, activity feed, live invitation preview
- **Design**: theme picker, wax seal colour picker
- **Blocks**: add and remove any of the 15 information blocks
- **Guests and RSVP**: category filter, per guest RSVP state, per guest plus one toggle
- **Seating**: tables with capacity, seated guests, unassigned pool
- **Budget**: target vs estimated vs actual, per category over/under bars
- **Checklist**: grouped tasks with a completion percentage

State is React only. Nothing persists across a refresh.

## Known gaps

- No back end. Checkout simulates payment, forms do not submit, auth accepts anything.
- Single bundle is ~1.17 MB (316 kB gzipped). Route level code splitting is the obvious first
  optimisation if this goes further.
- The reference site's ten locales are represented by a working language switcher in the
  header, but only English copy exists.

## Verification

Both passes were run against a live dev server:

- Typecheck and production build clean
- All 20 routes render, zero console errors, zero broken images
- Checkout walked end to end (details, payment, confirmation) on all four plan variants
- All 7 dashboard panels switch and their controls mutate state
- Theme filters return the correct counts across all 7 categories
- Accordion opens, closes and is exclusive

Three defects were found and fixed during verification: a duplicated envelope section in the
hero, panel swaps that could stall because they waited on an exit animation, and a missing `h1`
on the dashboard.
