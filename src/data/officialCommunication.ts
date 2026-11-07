export interface DispatchAttachment {
  name: string;
  size: string;
  type: 'pdf' | 'env' | 'doc';
}

export interface OfficialDispatch {
  id: string;
  refId: string;
  title: string;
  sender: string;
  senderTitle: string;
  council: string;
  date: string;
  timestamp: string;
  category: 'DIRECTIVE' | 'JURY & RUBRIC' | 'SPONSOR PERKS' | 'CIRCULAR';
  priority: 'URGENT' | 'HIGH' | 'NORMAL';
  requiresSign: boolean;
  signed: boolean;
  signedAt?: string;
  sha256: string;
  summary: string;
  body: string[];
  keyDirectives: string[];
  attachments: DispatchAttachment[];
}

export const mockDispatches: OfficialDispatch[] = [
  {
    id: 'disp_01',
    refId: 'DOC-CC-2026-DISPATCH-09',
    title: 'Round 1 Final Submission Protocol & Checkpoint',
    sender: 'Dr. Ananya Roy',
    senderTitle: 'Director of Hackathon Operations',
    council: "ReBuild '26 Steering Council & Technical Directorate",
    date: 'Nov 06, 2026',
    timestamp: '18:00 IST',
    category: 'DIRECTIVE',
    priority: 'URGENT',
    requiresSign: true,
    signed: false,
    sha256: 'e4b3c99a8019df77b21a7cd8430fbc9820571ab3d029194ecaf821948ba023fe',
    summary: 'Mandatory submission protocol for Round 1. All participant teams must submit public repository URLs and live Vercel deployment links before the strict 10:00 PM IST deadline.',
    body: [
      "To all registered builders and team leads of the ReBuild '26 National Arena Hackathon:",
      "By order of the Technical Steering Council, the submission portal for Round 1 is now formally synchronized and entering its final evaluation window. Teams are required to push all committed revisions to their primary repository branch before the checkpoint closes.",
      "The evaluation jury will begin automated crawl tests and asset verification strictly at the cutoff. Late submissions or repositories missing public view permissions will be subject to automatic penalty under Section 3.1 of the Academic Integrity Code."
    ],
    keyDirectives: [
      "Ensure all 4 recreated screens (Login, Student Dashboard, Digital Pass, and Playbook) are accessible from the root routing tree.",
      "Provide public GitHub repository URL with verifiable commit log under your designated builder identity.",
      "Include deployed production link on Vercel or Cloudflare with zero console errors.",
      "Digital participant agreement must be acknowledged and signed by the team lead prior to score publication."
    ],
    attachments: [
      { name: "ReBuild_26_Evaluation_Rubric_v8.pdf", size: "2.4 MB", type: "pdf" },
      { name: "Participant_Submission_Agreement.pdf", size: "840 KB", type: "pdf" }
    ]
  },
  {
    id: 'disp_02',
    refId: 'DOC-CC-2026-DIRECTIVE-07',
    title: 'Evaluation Criteria & Anti-Plagiarism AI Policy',
    sender: 'Prof. K. R. Sharma',
    senderTitle: 'Chief Judge & Chair of Evaluation Jury',
    council: 'CampusCode Collegiate Academic Board',
    date: 'Nov 06, 2026',
    timestamp: '12:15 IST',
    category: 'JURY & RUBRIC',
    priority: 'HIGH',
    requiresSign: true,
    signed: true,
    signedAt: 'Nov 06, 2026 · 13:40 IST',
    sha256: '98d1a4e5f039128ca819e072fbc03948128ea902f829104081cba9081e289031',
    summary: 'Clarification regarding grading weights and permissible usage of generative AI accelerators during coding sprints.',
    body: [
      "This circular establishes the authoritative grading criteria for Round 1 and Round 2 advancements. The Academic Jury evaluates projects on four distinct pillars with strict weightings.",
      "Generative coding tools are permitted for boilerplate scaffolding and utility generation, provided that architectural decisions, business state logic, and styling fidelity are authored and demonstrated by the student team."
    ],
    keyDirectives: [
      "Pixel Fidelity & Visual Polish (35%): Exact match with benchmark Figma tokens, responsive breakpoints, and layout balance.",
      "Responsive Engineering (25%): Seamless adaptation across mobile viewports, tablet drawers, and 4K displays.",
      "Architecture & Clean Code (25%): Modular component hierarchy, proper TypeScript typings, zero build warnings.",
      "Innovation & Micro-Interactions (15%): Tactile feedback, 3D physics, ambient motion, and loading performance."
    ],
    attachments: [
      { name: "Jury_Scoring_Matrix_2026.pdf", size: "1.1 MB", type: "pdf" }
    ]
  },
  {
    id: 'disp_03',
    refId: 'DOC-CC-2026-SPONSOR-04',
    title: '$1,000 Cloud Compute Credits & Production Keys Unlocked',
    sender: 'Elena Vance',
    senderTitle: 'Google Cloud Ecosystem & DevRel Lead',
    council: 'CampusCode Industry Partner Network',
    date: 'Nov 05, 2026',
    timestamp: '20:00 IST',
    category: 'SPONSOR PERKS',
    priority: 'NORMAL',
    requiresSign: false,
    signed: false,
    sha256: 'a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0',
    summary: 'Exclusive enterprise sandbox credentials and Google Cloud vouchers issued to all verified participant accounts.',
    body: [
      "As an official platform sponsor of ReBuild '26, Google Cloud is proud to equip every registered builder team with dedicated cloud infrastructure, Gemini API quota, and serverless compute capacity.",
      "Teams can redeem their voucher code in the Google Cloud Console. Quotas are pre-configured for high-concurrency demo environments with zero upfront billing requirements."
    ],
    keyDirectives: [
      "Redeem voucher code within 48 hours to activate cluster provisioning.",
      "Use pre-authenticated endpoint tokens for Gemini 2.0 Flash and Vertex AI endpoints.",
      "Compute cluster automatically persists through the final championship demo rounds."
    ],
    attachments: [
      { name: "Cloud_Sandbox_Access_Key.env", size: "12 KB", type: "env" },
      { name: "Google_Cloud_Hackathon_Quickstart.pdf", size: "1.8 MB", type: "pdf" }
    ]
  },
  {
    id: 'disp_04',
    refId: 'DOC-CC-2026-CIRCULAR-02',
    title: '24/7 Technical Operations Desk & Mentor Hotline',
    sender: 'Siddharth Menon',
    senderTitle: 'Head of Student Experience & Support',
    council: 'CampusCode Operations Hub',
    date: 'Nov 05, 2026',
    timestamp: '10:00 IST',
    category: 'CIRCULAR',
    priority: 'NORMAL',
    requiresSign: false,
    signed: false,
    sha256: 'f8e7d6c5b4a39281716253443526172839405162738495061728394051627384',
    summary: 'Guidelines for accessing the 24/7 technical helpdesk, code debugging breakout rooms, and mentor schedule.',
    body: [
      "The Technical Operations Command is active 24/7 throughout the hackathon. Teams experiencing git sync issues, build failures, or portal credential hiccups may request immediate on-call mentor support.",
      "Official inquiries submitted via the Organizer Desk are triaged within 15 minutes by on-duty engineering leads."
    ],
    keyDirectives: [
      "Use the 'Official Inquiry Desk' tab to submit structured escalation tickets.",
      "Join the designated Discord voice lounges during scheduled mentor office hours (02:00 - 05:00 IST).",
      "Emergency hotfix requests are routed directly to the infrastructure on-call engineer."
    ],
    attachments: [
      { name: "Mentor_Office_Hours_Schedule.pdf", size: "640 KB", type: "pdf" }
    ]
  }
];

