# React Portfolio Web — Project Reference

## Overview
Sean Anderson's personal portfolio website, deployed at **seanka.github.io**. Built with React 18 + TypeScript + Vite. Version **2.2.0**. Deployed via `gh-pages`.

## Tech Stack
- **Framework:** React 18 + TypeScript + Vite
- **Routing:** React Router DOM v6
- **UI Library:** Chakra UI v2
- **Styling:** Tailwind CSS v4 (custom config)
- **Animations:** Framer Motion
- **Carousel:** Embla Carousel
- **Backend/Data:** Firebase Firestore (remote data, no local static data)
- **Font:** SFPro Display (woff, 9 weights, loaded via CSS)

## Architecture — Clean Layered Pattern

```
src/
├── Common/           # Shared utilities, hooks, enums, interfaces, images registry
├── Data/             # Remotes — Firebase Firestore data sources
│   └── Remotes/
│       ├── Base/BaseRemote.ts
│       ├── AboutDataSource.ts
│       ├── HomeDataSource.ts
│       └── PortolioDataSource.ts   ← note: typo in filename
├── Domain/           # Entities + Repository interfaces
│   ├── Entities/     # TypeScript interfaces (About, Home, Portfolio)
│   └── Repositories/ # Repository protocol definitions
└── Presentation/     # React components organized by module
    ├── Common/       # Reusable: Carousel, FullScreenModal, SpinnerLoader
    └── Modules/
        ├── Core/Root/            # App shell (sidebar, topbar, window buttons)
        ├── Home/                 # Home module
        ├── About/                # About module
        └── Portfolio/            # Portfolio/Projects module
```

Each module follows **ViewController / ViewModel** pattern:
- `ViewController.tsx` — React UI component
- `ViewModel.ts` — state + data fetching logic
- `Component/` — sub-components for that module

## Routes

| Path | Module |
|------|--------|
| `/` | Redirect (root shell) |
| `/home` | Home — Introduction + Running sections |
| `/about/:category?` | About Me — Technical Skills / Work Experiences / Education |
| `/portfolio/:category?/:item?` | Projects — categorized portfolio items |

## Screens & Components

### Home (`/home`)
- `IntroductionView` — Hero with name, title, location, nationality, hobby, food, cover photo, social links
- `RunningView` — Running stats (total km, steps, yearly mileage, race history) — **user wants to remove this section**
- Scroll-snap between the two sections

### About (`/about/:category`)
- Three categories defined in `AboutEnum`: `TECHNICAL_SKILLS`, `WORK_EXPERIENCE`, `EDUCATION`
- `TechSkillsView` — Skills grouped by category (Data Analysis, ML, Software Dev), displayed as icon grids
- `WorkExpView` — Horizontal scrollable cards per company, with role timeline per card
- `EducationView` — Formal education cards + Informal/certifications list; uses `html-react-parser` for rich text

### Portfolio (`/portfolio/:category?/:item?`)
- `PortfolioCategoryView` — Collapsible category tree in sidebar (Data Science, Mobile, IoT, Front-End, Back-End)
- `PortfolioItemView` — Full detail: Embla image carousel with thumbnails, external links, description (HTML parsed), features, responsibilities
- `FullScreenModal` — Full-screen image viewer
- Items filtered by `published` flag from Firestore

## Core Shell
- `RootViewController` — App shell with responsive sidebar
- `SideBar` — iCloud Finder-style folder navigation; active item highlighted gold (`#AF8E25`)
- `FolderNavigation` — Renders nav items with orange/white folder icons
- `TopBar` — Extend sidebar toggle button
- Sidebar: 100% width mobile → 20% md → 15% lg; animated slide/reshape

## Theme & Design Language
- **Background:** `#1E1E1E` (main), `#2E2E2E` (panels), `#222222` (sidebar)
- **Accent:** Gold `#AF8E25` (active states, highlights)
- **Text:** White primary
- **Font:** SFPro Display, weights 100–900 mapped to Tailwind `font-thin` through `font-black`
- **Metaphor:** macOS Finder / iCloud Drive — folder icons, sidebar navigation, window buttons

## State Management
No global store. Each module has its own ViewModel (custom class with React state via hooks):
- `RootViewModel` — sidebar open/close
- `HomeViewModel` — home sections data + loading
- `AboutViewModel` — active category, content per category
- `PortfolioViewModel` — categories, expanded tree nodes, selected item
- `PortfolioItemViewModel` — single item detail

## Data Layer
All content stored in **Firebase Firestore**. Data sources extend `BaseRemote` which provides `where`/`orderBy`/`limit` filtering. No hardcoded content arrays — everything fetched remotely.

## Key Utilities
- `AnimationTransform.ts` — Framer Motion animation presets (currently modified, uncommitted)
- `NavigationPath.ts` — Route constants
- `Images.ts` — Centralized image imports
- `useScrollSnap.ts` — Custom hook for scroll-snap behavior
- `ArrayExtension.ts`, `NumberExtension.ts`, `StringExtension.ts` — utility helpers

## Planned Changes (UI Revamp)
- **Remove** the Running section from Home entirely
- Full UI redesign — no reference yet, to be determined
- Current look: dark Finder-style macOS theme; goal is a more polished/modern aesthetic

## Development
```bash
npm run dev        # local dev server
npm run build      # TypeScript compile + Vite build
npm run predeploy  # runs build before deploy
```

Deploy: `gh-pages` to `https://seanka.github.io/React-Portfolio-Web`
