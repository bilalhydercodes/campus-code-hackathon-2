import { useState } from 'react';
import { ChevronRight, RefreshCw } from 'lucide-react';

interface OfficialCommunicationViewProps {
  userName?: string;
  onNavigateTab?: (tab: string) => void;
}

export default function OfficialCommunicationView({
  userName = 'Mahammad Bilal Hyder',
  onNavigateTab,
}: OfficialCommunicationViewProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 400);
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
          <span className="font-bold text-purple-600">OFFICIAL COMMUNICATION</span>
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
        <div className="border-b border-gray-100 pb-6">
          <p className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest">
            COMMUNICATION / OFFICIAL
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-gray-900 font-inter">
            OFFICIAL COMMUNICATION.
          </h1>
          <p className="mt-2 text-sm text-gray-600 font-medium leading-relaxed max-w-2xl">
            Use the official CampusCode channel for important announcements and communication.
          </p>
        </div>

        {/* Hero Card: CampusCode Official Channel */}
        <div className="mt-6 rounded-xl border border-black/10 bg-white p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold tracking-wider text-gray-500 uppercase">
                  CAMPUSCODE OFFICIAL CHANNEL
                </span>
              </div>

              <h2 className="text-2xl font-black tracking-tight text-gray-900 font-inter">
                Stay connected.
              </h2>

              <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed max-w-xl">
                Follow the official WhatsApp channel for hackathon updates, announcements, deadlines and important communication.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://whatsapp.com/channel/0029Vb8gR7TEVccLc1pW4O2d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black bg-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-zinc-800 active:scale-98 transition-all cursor-pointer"
              >
                <span>OPEN WHATSAPP CHANNEL</span>
                <span className="text-sm font-normal">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2 Supportive Information Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: IMPORTANT */}
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-xs hover:border-black/20 transition-all">
            <p className="font-mono text-[11px] font-bold tracking-wider text-gray-400 uppercase">
              IMPORTANT
            </p>

            <h3 className="mt-1 text-base font-bold text-gray-900 tracking-tight">
              Check official updates first.
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              When a deadline, round instruction or organizer decision changes, rely on the official communication shared by CampusCode and your hackathon organizer.
            </p>
          </div>

          {/* Card 2: QUICK ACCESS */}
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-xs hover:border-black/20 transition-all">
            <p className="font-mono text-[11px] font-bold tracking-wider text-gray-400 uppercase">
              QUICK ACCESS
            </p>

            <h3 className="mt-1 text-base font-bold text-gray-900 tracking-tight">
              Keep this channel easy to find.
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              Save or follow the channel so you can quickly return to official announcements when you are working on a submission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
