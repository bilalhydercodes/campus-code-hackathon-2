export interface EventItem {
  id: string;
  title: string;
  code: string;
  event_type: 'hackathon' | 'quiz' | 'competition' | 'case_competition' | 'festival' | 'scholarship';
  category: string;
  status: 'LIVE' | 'OPEN' | 'UPCOMING' | 'COMPLETED';
  mode: 'ONLINE' | 'HYBRID' | 'OFFLINE';
  start_date: string;
  end_date: string;
  registration_deadline?: string;
  description: string;
  invite_only: boolean;
  registration_id?: string;
  team_name?: string;
  is_registered?: boolean;
  organizer: string;
  team_size: string;
  location: string;
  tags: string[];
  posted_date: string;
  deadline_left: string;
  payment_type: 'Free' | 'Paid';
  logo_type: 'droidecks' | 'technova' | 'campuscode' | 'ai' | 'web' | 'quiz';
}

export interface FeaturedItem {
  id: string;
  title: string;
  subtitle: string;
  logo_type: 'linkedin' | 'tekqubit' | 'airtel' | 'iitian' | 'seva' | 'pwc' | 'royals';
  link_url?: string;
}

export const mockFeaturedItems: FeaturedItem[] = [
  {
    id: 'feat_1',
    title: 'Get CampusCode on LinkedIn',
    subtitle: 'Register Now',
    logo_type: 'linkedin',
  },
  {
    id: 'feat_2',
    title: 'Tek-Qubit: Women of Impact 2026',
    subtitle: 'Quizzes',
    logo_type: 'tekqubit',
  },
  {
    id: 'feat_3',
    title: 'Airtel Sync 2026',
    subtitle: 'Register Now!',
    logo_type: 'airtel',
  },
  {
    id: 'feat_4',
    title: 'Dream to be an IITian?',
    subtitle: 'Register Now!',
    logo_type: 'iitian',
  },
  {
    id: 'feat_5',
    title: 'SEVA FIRST- Rashtriya Youth Innovation Challenge 2026',
    subtitle: 'Register Now',
    logo_type: 'seva',
  },
  {
    id: 'feat_6',
    title: 'Tuition fee support for the selected 2026-27 cohort.',
    subtitle: 'Register Now',
    logo_type: 'pwc',
  },
  {
    id: 'feat_7',
    title: "SupeRR Selector Season 2: Help Shape Rajasthan Royals'...",
    subtitle: 'Hackathon',
    logo_type: 'royals',
  },
];

export const mockEvents: EventItem[] = [
  {
    id: 'evt_vytron26',
    title: "VYTRON'26",
    code: 'VY-2026',
    event_type: 'hackathon',
    category: 'Software Development',
    status: 'OPEN',
    mode: 'ONLINE',
    start_date: '24 Nov 2026',
    end_date: '26 Nov 2026',
    registration_deadline: '23 Nov 2026',
    description: 'National innovation hackathon focused on autonomous robotics, IoT, and high-impact software systems.',
    invite_only: false,
    organizer: 'Droidecks',
    team_size: '2 - 4 Members',
    location: 'Online',
    tags: ['Everyone can apply', 'Others', 'Software Development'],
    posted_date: 'Nov 5, 2026',
    deadline_left: '18 days left',
    payment_type: 'Free',
    logo_type: 'droidecks',
    is_registered: false,
  },
  {
    id: 'evt_technova27',
    title: 'Technova 2027',
    code: 'TN-2027',
    event_type: 'hackathon',
    category: 'Software Development',
    status: 'OPEN',
    mode: 'OFFLINE',
    start_date: '06 Dec 2026',
    end_date: '08 Dec 2026',
    registration_deadline: '01 Dec 2026',
    description: 'Inter-collegiate flagship hackathon bringing together students to architect fullstack solutions.',
    invite_only: false,
    organizer: 'Burhani College, Mumbai',
    team_size: '2 - 4 Members',
    location: 'Burhani College 10, Nesbit Rd, Mazgaon, Mumbai, Maharashtra 400010, Mumbai, Maharashtra, India',
    tags: ['Everyone can apply', 'Software Development'],
    posted_date: 'Oct 31, 2026',
    deadline_left: '1 month left',
    payment_type: 'Free',
    logo_type: 'technova',
    is_registered: false,
  },
  {
    id: 'evt_rebuild26',
    title: "ReBuild '26 Arena Hackathon",
    code: 'CC-RB26',
    event_type: 'hackathon',
    category: 'RECREATE & REBUILD',
    status: 'LIVE',
    mode: 'ONLINE',
    start_date: '06 Nov 2026',
    end_date: '07 Nov 2026',
    registration_deadline: '05 Nov 2026, 6:00 PM',
    description: 'Recreate it faithfully on Friday. Rebuild it beautifully on Saturday. Individual hackathon. Frontend only. Mock data fine.',
    invite_only: true,
    organizer: 'CampusCode Engineering',
    team_size: 'Individual (Solo)',
    location: 'Online',
    tags: ['Everyone can apply', 'Frontend Only', 'Engineering'],
    posted_date: 'Nov 1, 2026',
    deadline_left: '1 day left',
    payment_type: 'Free',
    logo_type: 'campuscode',
    registration_id: 'CC-REG-2026-001',
    team_name: 'Solo Builder (Tracking)',
    is_registered: true,
  },
  {
    id: 'evt_quiz_2',
    title: "FirstCommit '26 Speed Quiz 2.0",
    code: 'CC-FCQ2',
    event_type: 'quiz',
    category: 'SPEED QUIZ',
    status: 'COMPLETED',
    mode: 'ONLINE',
    start_date: '28 Oct 2026',
    end_date: '28 Oct 2026',
    description: 'Speed competition testing frontend engineering, modern web standards, and UI precision.',
    invite_only: false,
    organizer: 'CampusCode Labs',
    team_size: '1 Member',
    location: 'Online',
    tags: ['Everyone can apply', 'Speed Quiz', 'Algorithms'],
    posted_date: 'Oct 25, 2026',
    deadline_left: 'Completed',
    payment_type: 'Free',
    logo_type: 'quiz',
    registration_id: 'CC-REG-2026-002',
    team_name: 'Individual',
    is_registered: true,
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
    organizer: 'NextGen AI Collective',
    team_size: '2 - 4 Members',
    location: 'Online',
    tags: ['Everyone can apply', 'Machine Learning', 'AI Models'],
    posted_date: 'Nov 3, 2026',
    deadline_left: '9 days left',
    payment_type: 'Free',
    logo_type: 'ai',
    is_registered: false,
  },
  {
    id: 'evt_future_web',
    title: 'Future Web Hackathon',
    code: 'CC-FW26',
    event_type: 'hackathon',
    category: 'WEB DEVELOPMENT',
    status: 'OPEN',
    mode: 'ONLINE',
    start_date: '22 Nov 2026',
    end_date: '24 Nov 2026',
    description: 'Design and ship the next generation of digital experiences.',
    invite_only: false,
    organizer: 'Web Standards Guild',
    team_size: '1 - 3 Members',
    location: 'Online',
    tags: ['Everyone can apply', 'Software Development', 'UI / UX'],
    posted_date: 'Nov 4, 2026',
    deadline_left: '16 days left',
    payment_type: 'Free',
    logo_type: 'web',
    is_registered: false,
  },
];
