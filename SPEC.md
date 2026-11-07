# SPEC.md: CampusCode Faithful Recreation (Round 1)

> **Source of Truth:** Inspected directly from `https://campus-code-ten.vercel.app/`
> **Target Viewports:** Desktop-first (1440px standard, 1920px widescreen)
> **Stack:** React / Next.js with Tailwind CSS or plain CSS. Mock data strictly in `/src/data`.

---

## 1. Brand Tokens & Design System

### 1.1 Color Palette
```css
:root {
  /* Surfaces & Backgrounds */
  --bg: #f7f7f4;                 /* Base page background */
  --surface: #ffffff;            /* White cards */
  --surface-soft: #f0f0ec;       /* Soft grey card background */

  /* Typography Colors */
  --text: #111111;               /* Dark base text */
  --text-soft: #4f4f4b;          /* Secondary body text */
  --muted: #858580;              /* Subdued labels & meta text */

  /* Borders & Dividers */
  --border: #deded8;             /* Standard border */
  --border-dark: #cfcfc8;        /* Hover & active borders */

  /* Accent & Brand Colors */
  --purple: #7665ff;             /* Primary brand purple */
  --blue: #526eff;               /* Secondary accent blue */
  --lime: #a8e62e;               /* Accent lime */
  --lime-dark: #82b91a;          /* Darker lime for text/contrast */
  --black: #111111;              /* Pure dark */
}
```

### 1.2 Typography
- **Headings & Primary UI:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - Hero H1: `font-weight: 900`, `letter-spacing: -6px` to `-8px`, `line-height: 0.85`
  - Section H2: `font-weight: 800`, `letter-spacing: -3px`
  - Card H3: `font-weight: 700`, `letter-spacing: -1px`
- **Labels, Badges, Eyebrows & Code:** `DM Mono, monospace`
  - Section Eyebrows: `font-size: 8px` to `10px`, `letter-spacing: 1px`, `text-transform: uppercase`
  - Badges & Status: `font-size: 8px` to `9px`, `letter-spacing: 0.5px`
  - Input Labels: `font-size: 8px`, `letter-spacing: 1px`, `color: #777777`

### 1.3 Logo Asset
- **Path:** `/public/campuscode-logo.png` (three slashes: black, purple `#7665ff`, lime `#a8e62e`)
- **Usage:** Used unmodified as an image asset.
  - Header / Nav: `width: 178px; height: auto; max-height: 48px; object-fit: contain; object-position: left center`
  - Compact Nav (Sidebar / Mobile): `width: 145px; max-height: 42px`

### 1.4 Global Decorative Patterns
- **Grid Background:** `linear-gradient(#1414140b 1px, transparent 1px), linear-gradient(90deg, #1414140b 1px, transparent 1px)`, `background-size: 65px 65px`
- **Ambient Glows:**
  - Purple orb: `background: #7665ff14; width: 500px; height: 500px; filter: blur(90px); border-radius: 50%`
  - Lime orb: `background: #a8e62e12; width: 350px; height: 350px; filter: blur(90px); border-radius: 50%`

---

## 2. Page Specifications

### 2.1 Landing Page (`/`)

#### Header / Navigation (`.campus-nav`)
- **Dimensions & Spacing:** `height: 90px; padding: 0 5vw; display: flex; align-items: center; justify-content: space-between`
- **Left:** Logo image (`/public/campuscode-logo.png`) linking to `/`
- **Center Nav Links:**
  - `ABOUT` (`#about`)
  - `HOW IT WORKS` (`#how`)
  - `HACKATHONS` (`#hackathons`)
  - `COMMUNITY` (`#community`)
  - Styling: `font-family: DM Mono; font-size: 11px; letter-spacing: 1px; color: #555555; hover: #111111`
- **Right Action Buttons:**
  - `LOGIN`: `font-family: DM Mono; font-size: 11px; padding: 8px 16px; border: 1px solid #deded8; background: transparent; color: #111111; border-radius: 4px`
  - `JOIN CAMPUSCODE ↗`: `font-family: Inter; font-weight: 700; font-size: 11px; padding: 10px 18px; background: #111111; color: #ffffff; border-radius: 4px; hover: #202020`

#### Hero Section
- **Top Meta Row:**
  - Left: `THE DIGITAL HOME FOR STUDENT INNOVATION` (`DM Mono, 9px, #777`)
  - Right: `CHENNAI · INDIA` (`DM Mono, 9px, #777`)
- **Section Tag:** `CAMPUSCODE / 001`
- **Main Heading:**
  - `BUILD <span class="outline-compete">COMPETE</span> SHIP.`
  - `font-size: clamp(80px, 9vw, 150px); font-weight: 900; letter-spacing: -7px; line-height: 0.85; margin: 30px 0 24px`
  - Outline styling on "COMPETE": `-webkit-text-stroke: 1px #777; color: transparent; font-style: normal; transition: color .4s, -webkit-text-stroke .4s;`
  - Hover on "COMPETE": `-webkit-text-stroke: 1px var(--purple); color: var(--purple);`
- **Lead Paragraph:**
  - "A digital arena for students who don't just have ideas. They build them."
  - `font-size: 18px; line-height: 1.6; color: #4f4f4b; max-width: 600px`
- **Hero CTA:**
  - Button: `EXPLORE HACKATHONS ↗` (`background: #111111; color: #ffffff; height: 54px; padding: 0 28px; font-weight: 800; font-size: 13px`)
  - Sub-indicators: `SCROLL TO EXPLORE` | `01 / 05`

#### Marquee Ticker
- **Style:** Full-width strip with thin top and bottom border (`#deded8`), `height: 48px`, overflow hidden
- **Content:** Repeated loop of `IDEAS ✦ PEOPLE ✦ PRODUCTS ✦ INNOVATION ✦ COMMUNITY ✦`
- **Font:** `DM Mono, 11px, font-weight: 600, letter-spacing: 2px, color: #111111`

#### Section 01: `WHERE STUDENTS BUILD.`
- **Eyebrow:** `01 WHAT IS CAMPUSCODE?`
- **Title:** `WHERE STUDENTS BUILD.`
- **Body Copy:** "CampusCode brings students, teams, organizers and hackathons into one connected ecosystem."
- **Three Pillar Cards:**
  - `01 DISCOVER`: Discover events, hackathons, and challenges across campuses.
  - `02 TEAM UP`: Form interdisciplinary teams with HackMate matchmaking.
  - `03 COMPETE`: Build under real constraints, receive AI feedback, and earn verifiable credentials.

#### Section 02: `THE CAMPUSCODE EXPERIENCE / BUILD TOGETHER.`
- **Eyebrow:** `02 — EXPERIENCE`
- **Title:** `BUILD TOGETHER.`
- **Video/Experience Card:**
  - Badge: `00:30` | `WATCH THE STORY`
  - Caption: `PLAYS AS YOU SCROLL ↗`

#### Section 03: `HOW IT WORKS / FROM IDEA TO IMPACT.`
- **Eyebrow:** `03 HOW IT WORKS`
- **Title:** `FROM IDEA TO IMPACT.`
- **4-Step Grid:**
  - `01 DISCOVER`: Find a challenge that makes you want to build. ↗
  - `02 TEAM UP`: Find people who share your ambition. ↗
  - `03 BUILD`: Turn your idea into something people can use. ↗
  - `04 SHIP`: Submit your work and take it to the arena. ↗
- **Card Styling:** White card (`#ffffff`), 1px border (`#deded8`), padding `32px`, hover lift `-4px` with subtle shadow.

#### Section 04: `ENTER THE ARENA`
- **Header:** Eyebrow `04 ENTER THE ARENA`, Title `ACTIVE CHALLENGES`, Action `VIEW ALL ↗`
- **3 Hackathon Cards:**
  1. `01 / ARTIFICIAL INTELLIGENCE`: **AI INNOVATION** (`LIVE ↗`) — "Build intelligent solutions for problems that matter."
  2. `02 / WEB DEVELOPMENT`: **FUTURE WEB** (`OPEN ↗`) — "Design and ship the next generation of digital experiences."
  3. `03 / SMART TECHNOLOGY`: **CAMPUS TECH** (`UPCOMING ↗`) — "Create technology that makes student life better."

#### Section 05 & Final CTA: `YOUR NEXT PROJECT STARTS HERE.`
- **Mission Section:** `GREAT IDEAS NEED BUILDERS.` / `FIND YOUR PEOPLE.`
  - "Build with developers. Think with designers. Compete with builders."
- **Banner CTA:** `READY?` -> `YOUR NEXT PROJECT STARTS HERE.` -> Button: `JOIN CAMPUSCODE ↗`

#### Footer (`contentinfo`)
- **Top Row:** Brand logo, tagline "The student hackathon arena. You build the idea, we run the competition."
- **Links Columns:**
  - `PRODUCT`: About, Hackathons, How it works, Community
  - `BUILDERS`: Students, Teams, Organizers, Developers
  - `GUIDES`: Hackathon Rules, FAQ, Support, Contact
- **Bottom Bar:**
  - Status Indicator: `● ALL SYSTEMS OPERATIONAL` (`#82b91a`)
  - Links: `TERMS`, `PRIVACY`, `CONTACT`
  - Copyright: `CampusCode © 2026 | LEARN · BUILD · COMPETE · SHIP | CHENNAI · INDIA`

---

### 2.2 Login Page (`/login`)

#### Page Layout
- **Container:** Two-column split grid (`minmax(450px, 1fr) minmax(450px, 530px); gap: 9vw; min-height: calc(100vh - 140px); padding: 35px 8vw 105px; align-items: center`)
- **Nav Header (`.login-nav`):** `height: 90px; padding: 0 5vw; display: flex; justify-content: space-between; align-items: center`
  - Left: Logo (`/public/campuscode-logo.png`)
  - Right: `← BACK TO HOME` (`font-family: DM Mono; font-size: 9px; letter-spacing: 1px; color: #777`)

#### Left Column (Hero & Identity)
- **Status Dot:** `● AUTHENTICATION READY` (lime green pulsing dot `7px`, `#82b91a`)
- **Index:** `CAMPUSCODE / AUTHENTICATION` | `01 / 02`
- **Heading:** `ENTER THE ARENA.` (`font-size: clamp(75px, 9vw, 145px); font-weight: 900; letter-spacing: -8px; line-height: 0.78`)
- **Subtext:** "Sign in to continue building, collaborating and competing with the CampusCode community." (`font-size: 14px; line-height: 1.8; color: #666`)
- **Feature Trio Grid (`.login-features`):**
  - Card 1: `01 BUILD` (gradient background `#7665ff12` to white)
  - Card 2: `02 COMPETE`
  - Card 3: `03 SHIP`
  - Styling: `border: 1px solid #deded8; min-height: 92px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between`
- **Bottom System Info:** `● SECURE ACCESS` | `2026`

#### Right Column (Auth Card)
- **Container (`.login-card`):**
  - `background: #ffffffed; backdrop-filter: blur(15px); border: 1px solid #d8d8d2; padding: 34px 38px; box-shadow: 0 30px 80px #00000012; position: relative`
  - Top border line: `background: linear-gradient(90deg, #7665ff, #a8e62e); height: 2px; position: absolute; top: -1px; left: 25px; right: 25px`
- **Card Header:**
  - Eyebrow: `EXISTING ACCOUNT` (`DM Mono, 8px, #999`)
  - Title: `LOGIN` (`font-size: 39px; font-weight: 800; letter-spacing: -3px`)
  - Description: `Access your CampusCode account.` (`font-size: 10px; color: #999`)
  - Badge (Right): `CC / 01` (`DM Mono, 9px, #bbb`)
- **Divider:** `1px solid #e2e2dc; margin: 27px 0`
- **Form Fields:**
  1. **EMAIL ADDRESS:**
     - Label: `EMAIL ADDRESS` (`DM Mono, 8px, #777`)
     - Wrap: `height: 54px; background: #fafaf8; border: 1px solid #d8d8d2; display: flex; align-items: center`
     - Icon: `@` (`DM Mono, 13px, #aaa, width: 50px, text-align: center`)
     - Input: `font-size: 13px; color: #111; background: transparent; outline: none; flex: 1`
     - Focus: `border-color: #7665ff; box-shadow: 0 0 0 3px #7665ff14; background: #fff`
  2. **PASSWORD:**
     - Label: `PASSWORD`
     - Wrap: Same style with icon `•`
     - Right button: `Show password` toggle (`DM Mono, 7px, color: #888`)
  3. **CAPTCHA:**
     - Label: `CAPTCHA`
     - Captcha Row: code canvas / generated string + refresh button `↻ NEW` + input box
- **Submit Button (`.login-submit`):**
  - `height: 58px; background: #111111; color: #ffffff; padding: 0 18px; font-size: 11px; font-weight: 800; display: flex; justify-content: space-between; align-items: center; width: 100%`
  - Right arrow: `<b style="color: #a8e62e; font-size: 18px">↗</b>`
  - Hover: `background: #202020; transform: translateY(-3px); box-shadow: 0 15px 35px #00000024`
- **Secondary Links:**
  - `FORGOT PASSWORD?` button
  - Register switch: `DON'T HAVE AN ACCOUNT?` -> `CREATE ACCOUNT →` (links to `/register`)
- **Footer of Card:** `AUTH / 2026` | `● SECURE LOGIN`

---

### 2.3 Register Page (`/register`)

#### Page Layout
- Matches Login page 2-column structure and header navigation.

#### Left Column (Hero & Identity)
- **Status Dot:** `● REGISTRATION OPEN` (pulsing lime dot)
- **Index:** `CAMPUSCODE / REGISTRATION` | `02 / 02`
- **Heading:** `JOIN THE ARENA.`
- **Subtext:** "Create your CampusCode identity and become part of a student ecosystem designed around ideas, teams, technology and competition."
- **Three Feature Blocks:**
  - `01 IDENTITY / CREATE`: Build your student profile and enter the CampusCode ecosystem.
  - `02 TEAM / COLLABORATE`: Find teammates and build projects together.
  - `03 ARENA / COMPETE`: Join hackathons and turn ideas into submissions.
- **System Info:** `● STUDENT INNOVATION NETWORK` | `2026`

#### Right Column (Auth Card)
- **Card Header:** Eyebrow `NEW ACCOUNT`, Title `REGISTER`, Description `Create your CampusCode account.`, Badge `CC / 02`
- **Form Fields:**
  1. `FULL NAME` (icon `◇`, placeholder: `Your full name`)
  2. `EMAIL ADDRESS` (icon `@`, placeholder: `you@example.com`)
  3. `ACCOUNT TYPE`: Disabled field with text `STUDENT`, icon `🎓`, and note below: "Organizer? Accounts are created by our team — contact campuscode@gmail.com"
  4. `PASSWORD` (icon `•`, toggle show password)
  5. `CONFIRM PASSWORD` (icon `•`, toggle show password)
  6. `CAPTCHA` (code block + refresh button `↻ NEW` + input)
  7. `Age Confirmation`: Checkbox `[ ] I confirm that I am 18 years of age or older.`
- **Submit Button:** `SEND VERIFICATION CODE ↗`
- **Secondary Link:** `ALREADY HAVE AN ACCOUNT?` -> `LOGIN →` (links to `/login`)
- **Card Footer:** `AUTH / 2026` | `● SECURE REGISTRATION`

---

### 2.4 Student Dashboard (`/student`)

#### Layout Architecture
- **Flex Container:** Sidebar (fixed 260px) + Main Scrollable Area (`flex: 1; overflow: auto; min-height: 100vh`)

#### Light Sidebar (`.student-sidebar`)
- **Dimensions & Style:** `width: 260px; min-width: 260px; background: #f7f7f4f5; border-right: 1px solid #deded8; padding: 28px 18px; display: flex; flex-direction: column; position: sticky; top: 0; height: 100vh; box-shadow: 8px 0 30px rgba(0,0,0,0.02);`
- **Top Brand:**
  - CampusCode logo (`/campuscode-logo.png`) + text `HACKATHON ARENA`
- **Section Label:** `WORKSPACE` (`font-family: DM Mono; font-size: 9px; letter-spacing: 1px; color: #858580; margin: 20px 0 8px`)
- **Navigation Buttons:**
  - `Overview` (Icon, label, active indicator `→` on right)
  - `Events` (Icon, label)
  - `My Events` (Icon, label)
  - `HackMate AI` (Icon, label, `AI` tag)
  - `IdeaCheck AI` (Icon, label)
  - `Certificates` (Icon, label)
  - `Digital Card` (Icon, label)
  - `RuleBot AI` (Icon, label, `AI` tag)
  - `Student Guide` (Icon, label)
  - `Official Communication` (Icon, label)
  - `Notifications` (Icon, label)
  - `Help & Support` (Icon, label)
  - `Profile` (Icon, label)
  - **Button Styling:** `width: 100%; min-height: 42px; padding: 11px 12px; border-radius: 8px; font: 700 12px Inter; color: #6f6f69; background: transparent; border: 0; text-align: left; display: flex; align-items: center; gap: 11px; transition: all .2s;`
  - **Button Hover:** `color: #111111; background: #eeeeea; transform: translateX(2px);`
  - **Button Active:** `color: #111111; background: #a7d94b; box-shadow: 0 7px 22px rgba(115, 145, 45, 0.13); font-weight: 700;`
- **Sidebar Footer (`.student-sidebar-bottom`):**
  - Section label: `ACCOUNT`
  - User Row: Avatar circle (initials `S`), User Name `Sai`, Role pill `STUDENT`
  - Logout Button: `↪ LOG OUT` (`color: #ff5252; background: transparent; font-family: DM Mono; font-size: 10px; cursor: pointer;`)

#### Top Navigation Bar (inside main area)
- **Breadcrumb:** `CAMPUSCODE / STUDENT / [ACTIVE VIEW NAME]`
- **Right Controls:**
  - Notification Bell with unread badge
  - Refresh button (`↻`)
  - User Name Pill (`Sai`)

---

### 2.5 Student Dashboard Views

#### View 1: Overview (`activeTab === "Overview"`)
1. **Header Block (`aa`):**
   - Eyebrow: `STUDENT WORKSPACE / LIVE`
   - Title: `WELCOME BACK, <span style="color: #7665ff">SAI</span>.`
   - Subtext: "Your CampusCode activity is loaded directly from the backend."
   - Counter Badge: `03` | `LIVE DATA`
2. **Hero Banner Card (`.student-hero`):**
   - Tag: `BUILD · LEARN · COLLABORATE`
   - Heading: `ReBuild '26`
   - Description: "Recreate it faithfully on Friday. Rebuild it beautifully on Saturday. Individual hackathon. Frontend only. Mock data fine."
   - Action Button: `OPEN EVENT ↗` (switches tab to `Events` / `My Events`)
   - Visual: Student avatar initials + Event logo badge
3. **Stats Grid (`.student-stats-grid`):** 4 Cards
   - `REGISTERED: 03` (`FROM BACKEND`)
   - `ONGOING: 01` (`FROM BACKEND`)
   - `COMPLETED: 02` (`FROM BACKEND`)
   - `CERTIFICATES: 01` (`FROM BACKEND`)
   - Card Style: White surface, border `#deded8`, padding `20px`, large bold number `32px Inter`, label `DM Mono 9px #858580`
4. **Two-Column Panel Section:**
   - **Left Panel (`01 / CURRENT ACTIVITY`):**
     - Header: `01 / CURRENT ACTIVITY` | `VIEW EVENTS ↗`
     - Active Event: Code `CC-RB26`, Title `ReBuild '26`, Status `LIVE`, Mode `ONLINE`, Start Date `06 NOV 2026`
   - **Right Panel (`02 / NOTIFICATIONS`):**
     - Header: `02 / NOTIFICATIONS` | `OPEN ALL ↗`
     - Notification Items: Pulse dot + Title + Message snippet + Timestamp (e.g. `2 hours ago`)
5. **Upcoming Deadlines Card:**
   - Header: `UPCOMING DEADLINES` | `VIEW ALL ↗`
   - List item: Date box (`06 NOV`), Event Title (`ReBuild '26 Round 1 Deadline - 10:00 PM`), Badge `STARTS SOON`

#### View 2: My Events (`activeTab === "My Events"`)
1. **Header Block:**
   - Eyebrow: `MY ACTIVITY / BACKEND DATA`
   - Title: `MY EVENTS.`
   - Subtext: "Every event you joined, in one place. Open one to see its rounds, team, results and certificates."
   - Counter: `03 LIVE DATA`
2. **Registration Cards Grid (`.registration-grid`):**
   - Card 1: **ReBuild '26**
     - Banner image preview
     - Registration badge: `REGISTRATION: CC-REG-2026-001` (`CONFIRMED`)
     - Title: `ReBuild '26`
     - Status: `STATUS: REGISTERED`
     - Team: `TEAM: Solo Builder`
     - Action: `OPEN JOURNEY ↗`
   - Card 2: **FirstCommit '26 Quiz Competition 2.0**
     - Banner image preview
     - Registration badge: `REGISTRATION: CC-REG-2026-002` (`COMPLETED`)
     - Title: `FirstCommit '26 Quiz Competition 2.0`
     - Status: `STATUS: COMPLETED`
     - Team: `TEAM: Individual`
     - Action: `VIEW RESULTS ↗`
   - Card 3: **FirstCommit '26 Quiz Competition**
     - Registration badge: `REGISTRATION: CC-REG-2026-003` (`COMPLETED`)
     - Title: `FirstCommit '26 Quiz Competition`
     - Status: `STATUS: COMPLETED`
     - Action: `VIEW CERTIFICATE ↗`

#### View 3: Events Discovery (`activeTab === "Events"`)
1. **Header Block:**
   - Eyebrow: `DISCOVER / BACKEND DATA`
   - Title: `EVENTS.`
   - Subtext: "Explore CampusCode events — hackathons, quizzes, workshops — and join the ones you want."
   - Counter: `03 LIVE DATA`
2. **Filter Tabs (`.event-hub-tabs`):**
   - `[All events]` (active)
   - `[Hackathons]`
   - `[Quizzes]`
3. **Hackathon Cards Grid (`.hackathon-grid`):**
   - Card 1: **ReBuild '26**
     - Type: `HACKATHON` | Status: `LIVE`
     - Title: `ReBuild '26`
     - Description: "Recreate it faithfully on Friday. Rebuild it beautifully on Saturday. Individual hackathon. Frontend only."
     - Dates: `06 NOV - 07 NOV 2026` | Mode: `ONLINE`
     - Button: `JOINED ✓` (or `OPEN EVENT ↗`)
   - Card 2: **AI Innovation Challenge**
     - Type: `HACKATHON` | Status: `OPEN`
     - Title: `AI Innovation Arena`
     - Description: "Build real-world LLM and Agentic AI applications for universities and students."
     - Dates: `15 NOV - 17 NOV 2026` | Mode: `HYBRID`
     - Button: `JOIN EVENT ↗` (prompt for invite code or instant mock join)
   - Card 3: **CampusCode Quiz League 2.0**
     - Type: `QUIZ` | Status: `UPCOMING`
     - Title: `Web & Systems Speed Quiz`
     - Description: "40 speed questions on JavaScript, React, CSS, and Systems Architecture."
     - Dates: `20 NOV 2026` | Mode: `ONLINE`
     - Button: `REGISTER ↗`

---

## 3. Mock Data Contract (`/src/data`)

### 3.1 User (`/src/data/user.ts`)
```typescript
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'STUDENT';
  campus_code_id: string;
  avatar_initials: string;
}

export const mockUser: UserProfile = {
  id: 'usr_2026_01',
  name: 'Sai',
  email: 'sai@campuscode.co.in',
  role: 'STUDENT',
  campus_code_id: 'CC-2026-8492',
  avatar_initials: 'S',
};
```

### 3.2 Stats (`/src/data/stats.ts`)
```typescript
export interface StudentStats {
  registered: number;
  ongoing: number;
  completed: number;
  certificates: number;
}

export const mockStats: StudentStats = {
  registered: 3,
  ongoing: 1,
  completed: 2,
  certificates: 1,
};
```

### 3.3 Events (`/src/data/events.ts`)
```typescript
export interface EventItem {
  id: string;
  title: string;
  code: string;
  event_type: 'hackathon' | 'quiz';
  category: string;
  status: 'LIVE' | 'OPEN' | 'UPCOMING' | 'COMPLETED';
  mode: 'ONLINE' | 'HYBRID' | 'OFFLINE';
  start_date: string;
  end_date: string;
  description: string;
  invite_only: boolean;
  banner_url?: string;
  is_joined?: boolean;
}

export const mockEvents: EventItem[] = [
  {
    id: 'evt_rebuild26',
    title: "ReBuild '26",
    code: 'CC-RB26',
    event_type: 'hackathon',
    category: 'RECREATE & REBUILD',
    status: 'LIVE',
    mode: 'ONLINE',
    start_date: '06 Nov 2026',
    end_date: '07 Nov 2026',
    description: 'Recreate it faithfully on Friday. Rebuild it beautifully on Saturday. Individual hackathon. Frontend only.',
    invite_only: true,
    is_joined: true,
  },
  {
    id: 'evt_ai_innovate',
    title: 'AI Innovation Challenge',
    code: 'CC-AI26',
    event_type: 'hackathon',
    category: 'ARTIFICIAL INTELLIGENCE',
    status: 'OPEN',
    mode: 'ONLINE',
    start_date: '15 Nov 2026',
    end_date: '17 Nov 2026',
    description: 'Build intelligent solutions for problems that matter in student and campus life.',
    invite_only: false,
    is_joined: false,
  },
  {
    id: 'evt_quiz_2',
    title: "FirstCommit '26 Quiz Competition 2.0",
    code: 'CC-FCQ2',
    event_type: 'quiz',
    category: 'SPEED QUIZ',
    status: 'COMPLETED',
    mode: 'ONLINE',
    start_date: '28 Oct 2026',
    end_date: '28 Oct 2026',
    description: 'Speed competition testing frontend engineering, modern web standards, and UI precision.',
    invite_only: false,
    is_joined: true,
  },
  {
    id: 'evt_quiz_1',
    title: "FirstCommit '26 Quiz Competition",
    code: 'CC-FCQ1',
    event_type: 'quiz',
    category: 'SPEED QUIZ',
    status: 'COMPLETED',
    mode: 'ONLINE',
    start_date: '20 Oct 2026',
    end_date: '20 Oct 2026',
    description: 'Inaugural CampusCode engineering trivia and algorithm contest.',
    invite_only: false,
    is_joined: true,
  },
];
```

### 3.4 Notifications (`/src/data/notifications.ts`)
```typescript
export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  created_at: string;
  is_read: boolean;
}

export const mockNotifications: NotificationItem[] = [
  {
    id: 'notif_1',
    title: "ReBuild '26 Round 1 Underway",
    body: 'Recreate the 4 pages faithfully. Deadline is tonight at 10:00 PM IST.',
    created_at: '2 hours ago',
    is_read: false,
  },
  {
    id: 'notif_2',
    title: 'Rules Document v8 Released',
    body: 'Check the updated schedule and brand guidelines in your student portal.',
    created_at: '5 hours ago',
    is_read: false,
  },
  {
    id: 'notif_3',
    title: 'Verification Form Required',
    body: 'Submit your CampusCode verification details before the submission window closes.',
    created_at: '1 day ago',
    is_read: true,
  },
];
```

---

## 4. Client-Side State & Navigation Contract

1. **State Persistence:**
   - Store mock auth status in `localStorage`:
     - `token`: `'mock-token-2026'`
     - `role`: `'STUDENT'`
     - `user`: JSON string of `mockUser`
2. **Page Navigation:**
   - Landing (`/`): Click `LOGIN` -> navigates to `/login`; Click `JOIN CAMPUSCODE ↗` -> navigates to `/register`
   - Login (`/login`): Submitting form -> writes mock auth to `localStorage` -> navigates to `/student`
   - Register (`/register`): Submitting form -> writes mock auth to `localStorage` -> navigates to `/student`
   - Student Dashboard (`/student`):
     - Sidebar tab selection toggles between `Overview`, `My Events`, and `Events` views.
     - Logout button clears `localStorage` and navigates back to `/login`.
