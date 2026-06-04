# UI Revamp — Design Spec & Progress

## Direction
Full redesign from macOS Finder sidebar layout → **iCloud-style bento grid single-page**.
Reference: [nevflynn.com](https://nevflynn.com/) — bento cards, tabbed filter, personality-driven.

No sidebar. No route switches. One scrollable page of cards.
Projects detail opens as a full-screen overlay (keep existing `PortfolioItemView` as modal).

---

## Hard Layout Sketch

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║   SEAN ANDERSON PORTFOLIO  ·  Dark #1E1E1E bg  ·  Cards #2A2A2A  ·  Gold accent ║
╚══════════════════════════════════════════════════════════════════════════════════╝

┌─────────────────────┬──────────────────────────────────────┬────────────────────┐
│                     │                                      │                    │
│   HERO              │   INTRO / TAGLINE                    │   SOCIALS          │
│   3 cols · 2 rows   │   6 cols · 1 row                     │   3 cols · 1 row   │
│                     │                                      │                    │
│   [Cover Photo]     │   "iOS Developer & Data Enthusiast   │   [in] LinkedIn    │
│                     │    building things from Jakarta."    │   [✉]  Email       │
│   Sean Anderson     │                                      │   [ig] Instagram   │
│   ─────────────     │   Short 1–2 line bio. Conversational │   [wa] WhatsApp    │
│   📍 Jakarta, ID    │   tone, not a job objective.         │                    │
│   🌏 Indonesian     │                                      │                    │
│   👟 Running        ├──────────────────────────────────────┤                    │
│   🍚 Fried Rice     │   CURRENT STATUS                     │                    │
│                     │   6 cols · 1 row                     │                    │
│                     │   ⚡ iOS Developer @ Indomaret Group  │                    │
│                     │      Jakarta · Full Time · Since 2024│                    │
│                     │                                      │                    │
├─────────────────────┴──────────────────────────────────────┴────────────────────┤
│                                                                                  │
│   TECHNICAL SKILLS  ·  12 cols full width                                        │
│                                                                                  │
│   ┌──────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐│
│   │  Data Analysis       │   │  Machine Learning    │   │  Software Dev        ││
│   │  [MySQL] [Python]    │   │  [Python]            │   │  [Flutter][Firebase] ││
│   │  [Tableau][Power BI] │   │  [TensorFlow] etc.   │   │  [React][Swift] etc. ││
│   └──────────────────────┘   └──────────────────────┘   └──────────────────────┘│
│                                                                                  │
├────────────────────────────────────────┬─────────────────────────────────────────┤
│                                        │                                         │
│   WORK EXPERIENCE  ·  7 cols           │   EDUCATION  ·  5 cols                  │
│                                        │                                         │
│   ┌──────────────────────────────┐     │   🟦 Purwadhika Digital Tech School     │
│   │ Indomaret Group              │ ◀ ▶ │      Data Science & ML                  │
│   │ Jakarta, Indonesia           │     │      Sept 2024 – April 2025             │
│   │                              │     │                                         │
│   │ Jul 2024–Now   iOS Dev       │     │   ─────────────────────────────         │
│   │ Jul–Jul 2024   MDPS iOS Dev  │     │                                         │
│   │ Jun–Jul 2023   MDPS Mobile   │     │   🟧 Bina Nusantara University          │
│   │ Sept–Jun 2023  Mobile Intern │     │      Computer Science · GPA 3.77        │
│   └──────────────────────────────┘     │      2019 – 2023                        │
│                                        │                                         │
│   Hunting →    Dinas Kominfo →         │   [+ Certifications ▾] collapsible      │
│                                        │                                         │
├────────────────────────────────────────┴─────────────────────────────────────────┤
│                                                                                  │
│   PROJECTS  ·  12 cols full width                                                │
│                                                                                  │
│   [All]  [Data Science]  [Mobile]  [IoT]  [Front-End]  [Back-End]  ← tab filter │
│                                                                                  │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│   │  [thumbnail]  │  │  [thumbnail]  │  │  [thumbnail]  │  │  [thumbnail]  │   │
│   │               │  │               │  │               │  │               │   │
│   │ Transjakarta  │  │ Hunting App   │  │ Auto Sealing  │  │ Auxano Web    │   │
│   │ Data Analysis │  │ Mobile App    │  │ Smart Bin     │  │ Front-End     │   │
│   │ ─ Data Science│  │ ─ Mobile      │  │ ─ IoT         │  │ ─ Front-End   │   │
│   └───────────────┘  └───────────────┘  └───────────────┘  └───────────────┘   │
│                                                           → click to open detail │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## Card → Source Mapping

| Card | Current source file | Notes |
|---|---|---|
| Hero | `IntroductionView.tsx` | Keep photo + personal facts. Drop running refs. |
| Intro / Tagline | New component | Short 1–2 line copy, conversational tone. |
| Current Status | `WorkExpView.tsx` (first entry) | Lift latest role to top as a live badge. |
| Socials | `IntroductionView.tsx` bottom bar | Move to dedicated card. |
| Technical Skills | `TechSkillsView.tsx` | Same icon grids, new card shell. |
| Work Experience | `WorkExpView.tsx` | Same data, horizontal scroll contained within card. |
| Education | `EducationView.tsx` | Certifications collapsed by default. |
| Projects | `PortfolioViewController.tsx` | Tab filter replaces sidebar tree. Detail → modal/drawer. |

---

## Implementation Order

- [ ] 1. Scaffold new single-page layout (remove Router/sidebar shell, build bento grid container)
- [ ] 2. Hero card
- [ ] 3. Intro/Tagline + Current Status cards
- [ ] 4. Socials card
- [ ] 5. Technical Skills card
- [ ] 6. Work Experience card
- [ ] 7. Education card
- [ ] 8. Projects grid + tab filter
- [ ] 9. Project detail modal/drawer (reuse `PortfolioItemView`)
- [ ] 10. Mobile responsive pass
- [ ] 11. Animations / polish (Framer Motion)

---

## Design Decisions Log

| Date | Decision | Reason |
|---|---|---|
| 2026-06-02 | Bento grid single-page | Avoids CV feel; iCloud-style familiarity; maps cleanly to existing content |
| 2026-06-02 | Remove Running section | User request; content no longer relevant |
| 2026-06-02 | Keep `PortfolioItemView` as modal | Avoids rewriting complex carousel + image viewer logic |
| 2026-06-02 | Tab filter for Projects | Replaces sidebar category tree; simpler on single page |
