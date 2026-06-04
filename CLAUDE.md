# React Portfolio Web — Project Reference

## Overview
Sean Anderson's personal portfolio website, deployed at **seanka.github.io**. Built with React 18 + TypeScript + Vite. Version **3.0.0** (Revamp). Deployed via `gh-pages`.

The revamp (Phase 3.0) replaced the old macOS Finder sidebar layout with a **bento grid single-page design**. No routing, no sidebar. All content lives on one scrollable page of cards.

## Tech Stack
- **Framework:** React 18 + TypeScript + Vite
- **UI Library:** Chakra UI v2
- **Styling:** Tailwind CSS v4 (custom config, colors hardcoded as arbitrary Tailwind classes)
- **Animations:** Framer Motion (staggered card entrances, hover effects)
- **Carousel:** Embla Carousel (image carousel + auto-height + autoplay plugins)
- **Backend/Data:** Firebase Firestore (all content is remote, no local static data)
- **Font:** SFPro Display (woff, 9 weights: 100–900, loaded via `@font-face` in `index.css`)
- **HTML Parsing:** `html-react-parser` (for rich text in education descriptions)
- **Routing:** `react-router-dom` is installed but **not used** — app is fully single-page

## Architecture — Clean Layered Pattern

```
src/
├── Common/                        # Shared utilities, hooks, enums, interfaces, images
│   ├── Core/
│   │   ├── Images.ts              # Centralized image imports
│   │   └── Utils/
│   │       ├── AnimationTransform.ts   # Framer Motion animation presets
│   │       ├── ArrayExtension.ts
│   │       ├── NumberExtension.ts
│   │       └── StringExtension.ts
│   ├── Enum/
│   │   ├── Collection.ts          # Firebase collection name constants
│   │   └── About/
│   │       ├── AboutEnum.ts       # TECHNICAL_SKILLS, WORK_EXPERIENCE, EDUCATION
│   │       └── EduEnum.ts         # FORMAL, INFORMAL
│   └── Interface/
│       └── ImageProperty.ts
│
├── Data/                          # Remote layer — Firebase Firestore data sources
│   └── Remotes/
│       ├── Base/
│       │   ├── BaseRemote.ts      # Abstract base with where/orderBy/limit helpers
│       │   └── FirebaseConfig.ts  # Firebase initialization
│       ├── HomeDataSource.ts
│       ├── AboutDataSource.ts
│       └── PortolioDataSource.ts  # ← note: typo in filename (Portol*i*o)
│
├── Domain/                        # Entities + repository interfaces
│   ├── Entities/
│   │   ├── Core/
│   │   │   ├── BaseResponse.ts              # Generic { id, data } wrapper
│   │   │   ├── NavigationProps.ts
│   │   │   └── RemoteCollectionRequest.ts
│   │   ├── Home/
│   │   │   ├── Home.ts
│   │   │   └── HomeIntroduction.ts          # greeting, headline, summary, contacts, demographics, interests
│   │   ├── About/
│   │   │   ├── About.ts
│   │   │   ├── Work.ts                      # company, roles, timeline
│   │   │   ├── Skill.ts                     # categories, icon list
│   │   │   └── Education.ts                 # formal + informal
│   │   └── Portfolio/
│   │       ├── Portfolio.ts                 # detail: description, images, links
│   │       └── PortfolioItem.ts             # brief: title, category, created date
│   └── Repositories/
│       ├── HomeRepository.ts
│       ├── AboutRepository.ts
│       └── PortfolioRepository.ts
│
└── Presentation/                  # React components
    ├── Common/                    # Reusable components
    │   ├── Carousel/
    │   │   ├── CarouselView.tsx       # Embla carousel with parallax
    │   │   ├── CarouselThumb.tsx      # Thumbnail strip navigation
    │   │   └── CarouselCSS.css
    │   ├── FullScreenModal/
    │   │   └── FullScreenModalView.tsx    # Full-screen image viewer
    │   └── SpinnerLoader/
    │       ├── SpinnerLoader.tsx
    │       └── SpinnerLoader.css
    │
    └── Modules/
        ├── Bento/                 # Main layout module (new in revamp)
        │   ├── ViewController/
        │   │   ├── BentoViewController.tsx    # Root grid container (10-col CSS grid)
        │   │   └── Cards/                     # Bento card components
        │   │       ├── HeroCard.tsx
        │   │       ├── IntroTaglineCard.tsx
        │   │       ├── CurrentStatusCard.tsx
        │   │       ├── SocialsCard.tsx
        │   │       ├── TechSkillsCard.tsx
        │   │       └── EducationBentoCard.tsx
        │   └── ViewModel/
        │       └── BentoViewModel.ts          # Centralized state for all data + UI state
        │
        ├── Components/            # Shared multi-card components
        │   ├── Projects/
        │   │   ├── ProjectsBentoCard.tsx          # Project grid + category tabs
        │   │   └── Components/
        │   │       ├── ProjectThumbnailCard.tsx   # Project preview card
        │   │       └── Detail/
        │   │           ├── ProjectDetailModal.tsx     # Slide-up modal (mobile) / centered modal (desktop)
        │   │           ├── PortfolioItemView.tsx      # Carousel + description + links
        │   │           └── PortfolioItemViewModel.ts  # Carousel state
        │   └── Work/
        │       ├── WorkExpBentoCard.tsx           # Timeline with dots and rails
        │       └── Components/
        │           └── WorkRoleRow.tsx             # Individual role row in timeline
        │
        └── About/                 # Old module views (not used as standalone pages)
            └── ViewController/
                └── Component/
                    ├── TechSkillsView.tsx             # Still used inside TechSkillsCard
                    ├── WorkExpView.tsx                # Not in use
                    ├── EducationView.tsx              # Not in use
                    ├── TechSkillComponent/
                    │   └── TechSkillCard.tsx          # Collapsible skill category
                    ├── WorkExpComponent/
                    │   ├── WorkExpCard.tsx            # Not in use
                    │   └── WorkExpDetail.tsx          # Not in use
                    └── EducationComponent/
                        ├── FormalEducationCard.tsx    # Reused in EducationBentoCard
                        └── InformalEducationCard.tsx  # Reused in EducationBentoCard
```

Each module follows **ViewController / ViewModel** pattern:
- `ViewController.tsx` — React UI component
- `ViewModel.ts` — state + data fetching logic
- `Component/` / `Cards/` — sub-components for that module

## Entry Point

`main.tsx` renders `BentoViewController` directly — no Router wrapping, no shell:

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <BentoViewController />
  </ChakraProvider>,
);
```

## Routing

**None.** There are no routes, no URL segments, no navigation between pages. `react-router-dom` remains as a dependency but is unused. The entire portfolio is a single scrollable page. Project detail opens in a modal overlay.

## Bento Grid Layout

`BentoViewController` uses a **10-column CSS grid** with Tailwind responsive classes.

| Card | Desktop column span | Desktop row span | Notes |
|------|---------------------|------------------|-------|
| `HeroCard` | col 1–5 (5 cols) | 2 rows | Cover photo, name, demographics, interests |
| `IntroTaglineCard` | col 6–11 (6 cols) | 1 row | Headline + summary, conversational tone |
| `CurrentStatusCard` | col 6–9 (4 cols) | 1 row | Current role with pulsing gold live badge |
| `SocialsCard` | col 10–11 (2 cols) | 1 row | LinkedIn, Email, Instagram, WhatsApp |
| `TechSkillsCard` | col 1–12 (full width) | 1 row | Three skill categories: Data Analysis, ML, Software Dev |
| `WorkExpBentoCard` | col 1–7 (7 cols) | 1 row | Horizontal-scroll company timeline |
| `EducationBentoCard` | col 8–12 (5 cols) | 1 row | Formal + collapsible certifications |
| `ProjectsBentoCard` | col 1–12 (full width) | 1 row | Project grid with category tab filter |

**Mobile:** All cards stack to single column (`col-span-12`).

Cards animate in with staggered Framer Motion entrance animations.

## Screens & Components

### HeroCard
- Cover photo, full name, job title
- Demographics: location (Jakarta, ID), nationality (Indonesian)
- Interests: running, fried rice

### IntroTaglineCard
- Short headline and summary bio
- Conversational tone, not a CV objective

### CurrentStatusCard
- Displays current/latest job role and company
- Pulsing gold dot indicates live/active status

### SocialsCard
- Links: LinkedIn, Email, Instagram, WhatsApp
- Icon + label rows

### TechSkillsCard
- Wraps `TechSkillsView` inside a bento card shell
- Three collapsible groups: Data Analysis, Machine Learning, Software Dev
- Skills shown as icon + label grid

### WorkExpBentoCard
- Timeline with vertical rail + role dots per company
- `WorkRoleRow` renders each individual role (title, dates, type)
- Horizontal scrollable across companies via navigation

### EducationBentoCard
- `FormalEducationCard` for each formal degree (Purwadhika, Binus University)
- `InformalEducationCard` for certifications/courses
- Certifications collapsed by default, expandable

### ProjectsBentoCard + ProjectDetailModal
- Category tab filter: All, Data Science, Mobile, IoT, Front-End, Back-End
- `ProjectThumbnailCard` renders thumbnail image + title + category tag
- Clicking opens `ProjectDetailModal`:
  - Mobile: slides up from bottom
  - Desktop: centered modal overlay
- Modal contains `PortfolioItemView`: Embla carousel, thumbnails, description (HTML parsed), links, features, responsibilities
- Items filtered by `published` flag from Firestore

## State Management

No global store. Centralized in `BentoViewModel`:
- Fetches all data in parallel: home intro, tech skills, work experience, education, portfolio items
- Manages: `isLoading`, `activeCategory` (for project tab filter), `selectedItem` (for project detail modal)
- Provides derived state: `currentWork`, `currentRole`, `filteredPortfolioItems`
- `PortfolioItemViewModel` handles carousel state independently within the modal

## Data Layer

All content stored in **Firebase Firestore**. Data sources extend `BaseRemote` which provides `where` / `orderBy` / `limit` filtering. No hardcoded content arrays — everything fetched remotely.

| Data Source | Collection | Used by |
|---|---|---|
| `HomeDataSource` | home | `HeroCard`, `IntroTaglineCard`, `SocialsCard` |
| `AboutDataSource` | about | `TechSkillsCard`, `WorkExpBentoCard`, `EducationBentoCard`, `CurrentStatusCard` |
| `PortolioDataSource` | portfolio | `ProjectsBentoCard`, `ProjectDetailModal` |

## Theme & Design Language

**Color palette (hardcoded as Tailwind arbitrary classes — no CSS variables):**

| Role | Hex | Usage |
|---|---|---|
| Primary background | `#1E1E1E` | Main page, cards base |
| Card background | `#2A2A2A` | All bento card surfaces |
| Elevated surface | `#363636` | Hover states, nested panels |
| Accent / Gold | `#AF8E25` | Active tabs, live badge, borders, highlights |
| Text primary | `#FFFFFF` | Headings |
| Text secondary | `#939393` | Labels, metadata |
| Text tertiary | `#C0C0C0` | Body text, descriptions |
| Text muted | `#666666` | Dividers, inactive states |

**Font:** SFPro Display — 9 weights (100–900) registered via `@font-face` in `index.css`, mapped to Tailwind `font-thin` through `font-black`.

**Design metaphor:** Card-based dashboard. Removed the macOS Finder / iCloud Drive folder metaphor from the previous version.

## What Was Removed in Revamp 3.0

- `RootViewController` — old app shell
- `SideBar` / `FolderNavigation` / `TopBar` — entire sidebar navigation
- `HomeViewController` — standalone home page
- `AboutViewController` — standalone about page (subviews reused as cards)
- `PortfolioViewController` — standalone portfolio page
- `RunningView` — running stats section (user requested removal)
- React Router / URL-based navigation
- `NavigationPath.ts` — route constants (no longer needed)
- `useScrollSnap.ts` — scroll-snap hook (no longer needed)

Old `About/ViewController/Component/` views (`WorkExpView`, `WorkExpCard`, `WorkExpDetail`) still exist in the tree but are **not imported or used**.

## Key Utilities

- `AnimationTransform.ts` — Framer Motion animation presets
- `Images.ts` — Centralized image imports
- `ArrayExtension.ts`, `NumberExtension.ts`, `StringExtension.ts` — utility helpers

## Development

```bash
npm run dev        # local dev server
npm run build      # TypeScript compile + Vite build
npm run predeploy  # runs build before deploy
npm run deploy     # deploys to gh-pages
```

Deploy: `gh-pages` to `https://seanka.github.io/React-Portfolio-Web`
