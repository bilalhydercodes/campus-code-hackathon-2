import { useState, useMemo } from 'react';
import {
  ChevronRight,
  RefreshCw,
  Search,
  BookOpen,
  HelpCircle,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Users,
  Clock,
  Send,
  Cpu,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface HelpSupportViewProps {
  userName?: string;
  onNavigateTab?: (tab: string) => void;
}

interface FAQItem {
  id: string;
  category: 'Teams' | 'Rounds' | 'Submissions' | 'AI Assistance' | 'Communication';
  question: string;
  answer: string;
  popular?: boolean;
}

const FAQ_DATA: FAQItem[] = [
  // Teams
  {
    id: 'team-1',
    category: 'Teams',
    popular: true,
    question: 'How do I create or join a team for the hackathon?',
    answer:
      'When you enter the hackathon using your invite code, navigate to HackMate AI from your dashboard. Select "ReBuild \'26 Hackathon" and choose either "Create New Team" to generate an invite code for your teammates, or "Join Team" and enter the 6-character team invite code provided by your team lead.',
  },
  {
    id: 'team-2',
    category: 'Teams',
    question: 'Can I change my team members or team name after Round 1 starts?',
    answer:
      'Team rosters are officially locked once Round 1 begins. If you have an exceptional emergency (e.g. teammate medical absence), submit an urgent inquiry through the Official Communication Inquiry Desk before Round 1 closes.',
  },
  {
    id: 'team-3',
    category: 'Teams',
    question: 'What is the team size limit for ReBuild \'26?',
    answer:
      'Teams can consist of 1 to 4 members. Solo builders are fully welcome and compete under the same evaluation rubric.',
  },

  // Rounds
  {
    id: 'round-1',
    category: 'Rounds',
    popular: true,
    question: 'How many rounds are there, and what is the schedule?',
    answer:
      'ReBuild \'26 has two core rounds: Round 1 is the Prototype & MVP Demo (public GitHub repo + deployed live link) ending at 10:00 PM today. Shortlisted teams qualify for Round 2: Live Jury Pitch & Code Defense tomorrow morning.',
  },
  {
    id: 'round-2',
    category: 'Rounds',
    question: 'What happens if we miss the round submission deadline?',
    answer:
      'Platform countdown timers are synchronized via atomic time servers. Submissions submitted after the deadline cannot be processed automatically. We advise submitting your live demo and repository link at least 15 minutes before the cutoff.',
  },

  // Submissions
  {
    id: 'sub-1',
    category: 'Submissions',
    popular: true,
    question: 'What deliverables are required for Round 1 submission?',
    answer:
      'You must submit: 1) A public GitHub repository containing a clean commit history and a complete README.md, and 2) A functional deployed live URL (e.g. Vercel, Netlify, Cloudflare Pages, Railway, or AWS). Video walkthrough links are optional but highly recommended.',
  },
  {
    id: 'sub-2',
    category: 'Submissions',
    question: 'Can we push additional commits to GitHub after submitting the link?',
    answer:
      'Yes, until the official round countdown timer reaches 00:00:00. Commits made after the deadline will be flagged by automated git-diff analysis and excluded from evaluation.',
  },

  // AI Assistance
  {
    id: 'ai-1',
    category: 'AI Assistance',
    popular: true,
    question: 'Are AI tools (ChatGPT, Claude, Cursor, Antigravity, Copilot) permitted?',
    answer:
      'Yes! CampusCode strongly encourages modern AI-assisted engineering and AI-native development. However, all team members must thoroughly understand their codebase and be prepared to defend architecture choices and write code live during the Round 2 Jury Code Defense.',
  },
  {
    id: 'ai-2',
    category: 'AI Assistance',
    question: 'Do we need to disclose which AI tools we used?',
    answer:
      'Yes, transparency is valued. Please add a brief "AI Disclosure" or "Built With" section in your README.md listing the AI developer tooling, LLMs, and prompt engineering frameworks employed in your project.',
  },

  // Communication
  {
    id: 'comms-1',
    category: 'Communication',
    popular: true,
    question: 'How do I contact the hackathon organizers or mentors for help?',
    answer:
      'For formal rulings, dispute resolutions, or technical issue tickets, use the "Official Communication" tab to submit an Inquiry Desk ticket. For real-time general announcements and mentor updates, follow the Official WhatsApp Channel.',
  },
  {
    id: 'comms-2',
    category: 'Communication',
    question: 'Where are official circulars, problem statement clarifications, and results posted?',
    answer:
      'All legally binding directives and evaluation rubrics are published in the "Official Communication" center with cryptographic SHA-256 validation signatures and live broadcast tickers.',
  },
];

export default function HelpSupportView({
  userName = 'Mahammad Bilal Hyder',
  onNavigateTab,
}: HelpSupportViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('team-1');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const categories = ['ALL', 'Teams', 'Rounds', 'Submissions', 'AI Assistance', 'Communication'];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 400);
  };

  const toggleFaq = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  const scrollToFaqs = () => {
    const faqElement = document.getElementById('faq-section');
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-12 select-none">
      {/* Top Breadcrumb & User Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-gray-500">
          <span>CAMPUSCODE</span>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="font-bold text-gray-900">STUDENT</span>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="font-bold text-purple-600">HELP / SUPPORT</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleRefresh}
            className="flex items-center gap-1.5 font-mono text-xs font-bold text-gray-600 hover:text-gray-900 cursor-pointer uppercase transition-colors"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin text-purple-600' : ''}`} />
            <span>REFRESH</span>
          </button>
          <span className="text-gray-300">|</span>
          <button
            type="button"
            onClick={() => onNavigateTab?.('Profile')}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold text-gray-800 shadow-2xs hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
              {userName.charAt(0)}
            </span>
            <span>{userName}</span>
          </button>
        </div>
      </div>

      {/* Main Header Card */}
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest">
                HELP / SUPPORT
              </span>
            </div>
            <div className="mt-1 flex items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight text-gray-900 font-inter">
                HELP & SUPPORT.
              </h1>
            </div>
            <p className="mt-2 text-sm text-gray-500 font-medium leading-relaxed max-w-3xl">
              Start with the guide and FAQs. If you still need help, use the official communication channel or contact your organizer.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigateTab?.('Official Communication')}
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-gray-50 px-4 py-2.5 text-xs font-bold text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Send className="h-3.5 w-3.5 text-purple-600" />
              <span>Organizer Desk</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* THE 3 CORE SUPPORT PATHWAYS (01, 02, 03)                  */}
        {/* ======================================================== */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 01 Student Guide */}
          <div className="group relative flex flex-col justify-between rounded-xl border border-black/10 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-xs hover:border-black/30 hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-black tracking-tight text-purple-600">
                  01
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <BookOpen className="h-4.5 w-4.5" />
                </span>
              </div>
              <h2 className="mt-4 text-lg font-black text-gray-900 tracking-tight">
                Student Guide
              </h2>
              <p className="mt-2 text-xs font-medium text-gray-600 leading-relaxed">
                Learn how the CampusCode workflow works from joining a hackathon through results.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => onNavigateTab?.('Student Guide')}
                className="inline-flex w-full items-center justify-between rounded-lg border-[2px] border-black bg-white px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000] hover:bg-black hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                <span>OPEN GUIDE</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* 02 FAQs */}
          <div className="group relative flex flex-col justify-between rounded-xl border border-black/10 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-xs hover:border-black/30 hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-black tracking-tight text-purple-600">
                  02
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <HelpCircle className="h-4.5 w-4.5" />
                </span>
              </div>
              <h2 className="mt-4 text-lg font-black text-gray-900 tracking-tight">
                FAQs
              </h2>
              <p className="mt-2 text-xs font-medium text-gray-600 leading-relaxed">
                Find answers about teams, rounds, submissions, AI assistance and communication.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={scrollToFaqs}
                className="inline-flex w-full items-center justify-between rounded-lg border-[2px] border-black bg-white px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000] hover:bg-black hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                <span>VIEW FAQ</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* 03 Official WhatsApp */}
          <div className="group relative flex flex-col justify-between rounded-xl border border-black/10 bg-gradient-to-b from-white to-emerald-50/30 p-6 shadow-xs hover:border-emerald-600/40 hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-black tracking-tight text-emerald-600">
                  03
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="h-4.5 w-4.5" />
                </span>
              </div>
              <h2 className="mt-4 text-lg font-black text-gray-900 tracking-tight flex items-center gap-2">
                Official WhatsApp
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  Live
                </span>
              </h2>
              <p className="mt-2 text-xs font-medium text-gray-600 leading-relaxed">
                Follow the official CampusCode channel for announcements and important updates.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://whatsapp.com/channel/0029Vb8gR7TEVccLc1pW4O2d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-between rounded-lg border-[2px] border-emerald-700 bg-emerald-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_0px_#065f46] hover:bg-emerald-700 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                <span>OPEN CHANNEL</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 2: INTERACTIVE FAQ KNOWLEDGE BASE                */}
      {/* ======================================================== */}
      <div id="faq-section" className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-purple-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600">
                KNOWLEDGE BASE
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-black text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Quick answers covering teams, round timelines, evaluation criteria, and technical tools.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs or keywords..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50/70 pl-9 pr-3 py-2 text-xs font-medium text-gray-900 placeholder-gray-400 focus:bg-white focus:border-purple-500 focus:outline-hidden transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-6 divide-y divide-gray-100">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center">
              <HelpCircle className="mx-auto h-8 w-8 text-gray-300" />
              <p className="mt-2 text-sm font-bold text-gray-700">No matching questions found</p>
              <p className="text-xs text-gray-400">Try searching for different keywords or select "ALL"</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div key={faq.id} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-start justify-between text-left gap-4 cursor-pointer group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex rounded-md bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-700 uppercase">
                          {faq.category}
                        </span>
                        {faq.popular && (
                          <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                            <Sparkles className="h-2.5 w-2.5" /> Popular
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1.5 text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 bg-purple-50 text-purple-600 border-purple-200' : ''
                      }`}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="mt-3 pl-0 pr-4 text-xs font-medium leading-relaxed text-gray-600 animate-in fade-in slide-in-from-top-1 duration-150">
                      <p className="rounded-lg bg-gray-50/70 p-4 border border-gray-100">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 3: ORGANIZER CONTACT & ESCALATION CARD           */}
      {/* ======================================================== */}
      <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-gray-900 to-black p-6 sm:p-8 text-white shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-purple-300">
              <ShieldCheck className="h-3 w-3" /> OFFICIAL ESCALATION DESK
            </span>
            <h2 className="mt-3 text-xl font-black tracking-tight">
              Still have questions or facing a platform issue?
            </h2>
            <p className="mt-1 text-xs text-gray-300 leading-relaxed max-w-xl">
              Connect directly with the steering committee and mentor leads. Inquiry tickets are routed to active council mentors with a verified 15-minute response SLA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigateTab?.('Official Communication')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-purple-500 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Submit Inquiry</span>
            </button>
            <a
              href="https://whatsapp.com/channel/0029Vb8gR7TEVccLc1pW4O2d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span>WhatsApp Channel</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
