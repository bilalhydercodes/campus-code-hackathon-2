# BUILD_ORDER.md: Implementation Roadmap

> **Principle:** Complete all 4 pages first (structure, layout, and client-side flow) before adding polish or micro-interactions.

---

## Phase 1: Environment & Foundational Setup
- [x] **Step 1.1:** Confirm project dependencies (`npm install`).
- [x] **Step 1.2:** Verify tokens in `src/styles/tokens.css` and `tailwind.config.js`.
- [x] **Step 1.3:** Verify Google Fonts (`Inter`, `DM Mono`) and logo asset (`public/campuscode-logo.png`).
- [x] **Step 1.4:** Verify mock data in `src/data/` (`events.ts`, `stats.ts`, `user.ts`, `notifications.ts`).

---

## Phase 2: Page 1 — Landing Page (`/`)
Implement the full structure and sections of the landing page:
- [ ] **Step 2.1 — Header (`LandingNav.tsx`):**
  - Logo on left (`/campuscode-logo.png`).
  - Anchor links: ABOUT (`#about`), HOW IT WORKS (`#how`), HACKATHONS (`#hackathons`), COMMUNITY (`#community`).
  - Action buttons: `LOGIN` (links to `/login`), `JOIN CAMPUSCODE ↗` (links to `/register`).
- [ ] **Step 2.2 — Hero Section (`LandingHero.tsx`):**
  - Eyebrows: `THE DIGITAL HOME FOR STUDENT INNOVATION` | `CHENNAI · INDIA`.
  - Tag: `CAMPUSCODE / 001`.
  - Headline: `BUILD COMPETE SHIP.` (Inter 900, -7px letter-spacing).
  - Lead description and `EXPLORE HACKATHONS ↗` CTA.
- [ ] **Step 2.3 — Marquee Ticker (`MarqueeTicker.tsx`):**
  - Infinite strip with `IDEAS ✦ PEOPLE ✦ PRODUCTS ✦ INNOVATION ✦ COMMUNITY ✦`.
- [ ] **Step 2.4 — Content Sections (`SectionWhereStudentsBuild.tsx`, `SectionExperience.tsx`, `SectionHowItWorks.tsx`):**
  - Section 01: 3 value proposition pillars.
  - Section 02: Experience card with video badge and caption.
  - Section 03: 4 step sequence cards (`01 DISCOVER`, `02 TEAM UP`, `03 BUILD`, `04 SHIP`).
- [ ] **Step 2.5 — Arena Challenges & Final CTA (`SectionArenaChallenges.tsx`, `SectionMission.tsx`, `SectionFinalCta.tsx`):**
  - 3 challenge cards (`AI INNOVATION`, `FUTURE WEB`, `CAMPUS TECH`) with status badges.
  - Final CTA block: `READY? / YOUR NEXT PROJECT STARTS HERE.` -> `JOIN CAMPUSCODE ↗`.
- [ ] **Step 2.6 — Footer (`LandingFooter.tsx`):**
  - Brand tagline, 3 links columns, operational status dot (`● ALL SYSTEMS OPERATIONAL`), and copyright.

---

## Phase 3: Page 2 — Login Page (`/login`)
Implement the 2-column authentication layout:
- [ ] **Step 3.1 — Auth Nav & Shell (`AuthNav.tsx`, `AuthFooter.tsx`):**
  - Logo + `← BACK TO HOME` button linking to `/`.
  - Background grid (`.login-grid`) and footer status line.
- [ ] **Step 3.2 — Left Intro Column (`LoginIntro.tsx`):**
  - Status dot: `● AUTHENTICATION READY`.
  - Heading: `ENTER THE ARENA.`.
  - 3 feature boxes (`01 BUILD`, `02 COMPETE`, `03 SHIP`).
- [ ] **Step 3.3 — Right Auth Card (`LoginForm.tsx`):**
  - Top gradient bar (linear-gradient `#7665ff`, `#a8e62e`).
  - Inputs: EMAIL ADDRESS (icon `@`), PASSWORD (icon `•`, show/hide toggle), CAPTCHA (code + refresh `↻`).
  - Submit button: `LOGIN ↗` (dark bar with `#a8e62e` arrow).
  - Auth Flow: On submit, write mock token and student user to `localStorage`, then navigate to `/student`.
  - Secondary Links: `FORGOT PASSWORD?` and `CREATE ACCOUNT →` (links to `/register`).

---

## Phase 4: Page 3 — Register Page (`/register`)
Implement the registration layout mirroring login structure:
- [ ] **Step 4.1 — Left Intro Column (`RegisterIntro.tsx`):**
  - Status dot: `● REGISTRATION OPEN`.
  - Heading: `JOIN THE ARENA.`.
  - 3 feature boxes (`01 IDENTITY`, `02 TEAM`, `03 ARENA`).
- [ ] **Step 4.2 — Right Register Card (`RegisterForm.tsx`):**
  - Inputs: FULL NAME (`◇`), EMAIL ADDRESS (`@`), ACCOUNT TYPE (`🎓`, disabled 'STUDENT'), PASSWORD, CONFIRM PASSWORD, CAPTCHA (`↻ NEW`), 18+ Checkbox.
  - Submit button: `SEND VERIFICATION CODE ↗`.
  - Flow: On submit, write mock token to `localStorage`, then navigate to `/student`.
  - Secondary Link: `ALREADY HAVE AN ACCOUNT? LOGIN →` (links to `/login`).

---

## Phase 5: Page 4 — Student Dashboard (`/student`)
Implement the dashboard shell, sidebar, and 3 tab views:
- [ ] **Step 5.1 — Dashboard Shell & Sidebar (`DashboardSidebar.tsx`):**
  - Fixed 260px dark glassmorphic sidebar (`#070707e0`).
  - Brand logo + `HACKATHON ARENA`.
  - Navigation buttons with icons: `Overview`, `Events`, `My Events`, etc.
  - User profile row: Initial 'S', 'Sai', role 'STUDENT', and `LOG OUT` button (clears `localStorage` and routes to `/login`).
- [ ] **Step 5.2 — Dashboard Top Bar (`DashboardTopNav.tsx`):**
  - Breadcrumbs (`CAMPUSCODE / STUDENT / [VIEW]`), notifications bell, refresh button, user pill.
- [ ] **Step 5.3 — View 1: Overview (`OverviewView.tsx`):**
  - Header: `STUDENT WORKSPACE / LIVE` / `WELCOME BACK, SAI.` / `03 LIVE DATA`.
  - Hero Card: Current hackathon banner (`ReBuild '26`, `OPEN EVENT ↗`).
  - 4 Stats Cards (`StatsGrid.tsx`): REGISTERED (3), ONGOING (1), COMPLETED (2), CERTIFICATES (1).
  - Two columns: Current activity (`ReBuild '26`) + Notifications list (3 items).
  - Upcoming deadlines card.
- [ ] **Step 5.4 — View 2: My Events (`MyEventsView.tsx`, `RegistrationCard.tsx`):**
  - Header: `MY ACTIVITY / BACKEND DATA` / `MY EVENTS.`.
  - 3 Registration cards:
    1. `ReBuild '26` (`CC-REG-2026-001`, `REGISTERED`, `Solo Builder`).
    2. `FirstCommit '26 Quiz Competition 2.0` (`CC-REG-2026-002`, `COMPLETED`).
    3. `FirstCommit '26 Quiz Competition` (`CC-REG-2026-003`, `COMPLETED`).
- [ ] **Step 5.5 — View 3: Events Discovery (`EventsView.tsx`, `EventCard.tsx`):**
  - Header: `DISCOVER / BACKEND DATA` / `EVENTS.`.
  - Filter tabs: `All events`, `Hackathons`, `Quizzes`.
  - Hackathon cards grid with category tags, dates, and `JOIN EVENT ↗` / `JOINED ✓` buttons.

---

## Phase 6: End-to-End Route Verification
Verify all client-side navigation without refresh:
- [ ] Landing (`/`) -> Click `LOGIN` -> `/login`.
- [ ] Landing (`/`) -> Click `JOIN CAMPUSCODE ↗` -> `/register`.
- [ ] Login (`/login`) -> Submit -> navigates to `/student`.
- [ ] Register (`/register`) -> Submit -> navigates to `/student`.
- [ ] Student Dashboard (`/student`):
  - Click `Overview` -> shows Overview view.
  - Click `My Events` -> shows registered event cards.
  - Click `Events` -> shows all hackathons & filter tabs.
  - Click `LOG OUT` -> clears `localStorage` and redirects to `/login`.

---

## Phase 7: Polish & Micro-interactions (Allowed Additions)
Add subtle enhancements that blend seamlessly into the UI:
- [ ] Fade-up entrance motion on page mount.
- [ ] Marquee continuous linear loop.
- [ ] Slow ambient radial glow drift in background.
- [ ] Button hover transforms (`translateY(-2px)` to `-3px`) and subtle drop-shadows.
- [ ] Captcha refresh animation.
- [ ] Student dashboard card hover states.
