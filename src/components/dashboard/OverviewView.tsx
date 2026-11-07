import { mockStats } from '../../data/stats';
import { mockNotifications } from '../../data/notifications';
import { PrimaryButton, CampusBadge } from '../common';
import StatsGrid from './StatsGrid';
import { ArrowUpRight } from 'phosphor-react';

interface OverviewViewProps {
  userName: string;
  onNavigateTab: (tab: string) => void;
}

export default function OverviewView({ userName, onNavigateTab }: OverviewViewProps) {
  return (
    <div className="mx-auto max-w-[1240px] space-y-8">
      {/* Hero Active Event Card */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-[#7665FF] p-5 sm:p-8 md:p-10 text-white shadow-[0_8px_30px_rgba(118,101,255,0.2)]">
        {/* Left balance spacer for perfect optical centering on desktop */}
        <div className="hidden md:block w-[180px] shrink-0" aria-hidden="true" />

        {/* Centered Main Text Block */}
        <div className="flex-1 text-center space-y-3">
          <h2 className="font-inter text-[32px] sm:text-[38px] md:text-[44px] font-medium tracking-tight text-white leading-tight">
            ReBuild '26
          </h2>
          <p className="mx-auto max-w-[680px] font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-white/90">
            Recreate it faithfully on Friday. Rebuild it beautifully on Saturday. Individual hackathon. Frontend only. Mock data ready.
          </p>
        </div>

        {/* Right Action Button */}
        <div className="w-full md:w-[180px] shrink-0 flex justify-center md:justify-end">
          <PrimaryButton
            variant="white"
            size="md"
            icon="arrow-pill"
            className="!bg-white !text-[#111111] hover:!bg-[#F2F2EE] border-none shadow-sm px-6 py-2.5 font-medium text-[13.5px]"
            onClick={() => onNavigateTab('My Events')}
          >
            Open challenge
          </PrimaryButton>
        </div>
      </div>

      {/* Stats Grid */}
      <StatsGrid stats={mockStats} />

      {/* Two Column Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Panel 1: Current Activity */}
        <div
          className="relative overflow-hidden flex flex-col justify-between rounded-2xl border border-[#111111]/[0.08] p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          style={{ backgroundColor: '#F0E9FF' }}
        >
          {/* Subtle curved shapes in bottom-right area */}
          <svg
            className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 select-none"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M40 160 C 60 90, 90 60, 160 40 L 160 80 C 110 95, 95 110, 80 160 Z"
              fill="#E4D9FF"
            />
            <path
              d="M100 160 C 115 130, 130 115, 160 100 L 160 160 Z"
              fill="#E4D9FF"
            />
          </svg>

          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between border-b border-[#111111]/[0.08] pb-3">
              <h3 className="font-inter text-[16px] font-medium text-[#111111]">
                Active challenge
              </h3>
              <button
                onClick={() => onNavigateTab('Events')}
                className="inline-flex items-center gap-1 font-inter text-[12.5px] font-medium text-[#7665FF] hover:underline cursor-pointer"
              >
                <span>Browse all</span>
                <ArrowUpRight size={25} className="w-[25px] h-[25px]" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#7665FF] tracking-[0.04em]">CC-RB26</span>
                <CampusBadge variant="purple" size="sm">
                  Active
                </CampusBadge>
              </div>
              <h4 className="font-inter text-[18px] font-medium text-[#111111]">
                ReBuild '26
              </h4>
              <p className="font-inter text-[13px] leading-relaxed text-[#555550]">
                Individual web engineering arena track. Submission review starts at the end of Round 1.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10.5px] text-[#858580]">
                <span className="rounded-md bg-[#F7F7F4] px-2.5 py-1">ONLINE MODE</span>
                <span className="rounded-md bg-[#F7F7F4] px-2.5 py-1">06 NOV 2026</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-6 pt-4 border-t border-[#111111]/[0.08] flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#858580] tracking-[0.03em]">SUBMISSION STATUS</span>
            <span className="font-mono text-[11.5px] font-medium text-[#7665FF]">Draft ready</span>
          </div>
        </div>

        {/* Panel 2: Notifications */}
        <div
          className="relative overflow-hidden rounded-2xl border border-[#111111]/[0.08] p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          style={{ backgroundColor: '#F1FBD9' }}
        >
          {/* Subtle curved shapes in bottom-right area */}
          <svg
            className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 select-none"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M40 160 C 60 90, 90 60, 160 40 L 160 80 C 110 95, 95 110, 80 160 Z"
              fill="#E3F6B7"
            />
            <path
              d="M100 160 C 115 130, 130 115, 160 100 L 160 160 Z"
              fill="#E3F6B7"
            />
          </svg>

          <div className="relative z-10 mb-4 flex items-center justify-between border-b border-[#111111]/[0.08] pb-3">
            <h3 className="font-inter text-[16px] font-medium text-[#111111]">
              Recent notices
            </h3>
            <button
              onClick={() => onNavigateTab('Notifications')}
              className="inline-flex items-center gap-1 font-inter text-[12.5px] font-medium text-[#7665FF] hover:underline cursor-pointer"
            >
              <span>View all</span>
              <ArrowUpRight size={25} className="w-[25px] h-[25px]" />
            </button>
          </div>

          <div className="relative z-10 space-y-4">
            {mockNotifications.map((n) => (
              <div key={n.id} className="flex items-start justify-between gap-4 border-b border-[#111111]/[0.04] pb-3 last:border-b-0 last:pb-0">
                <div className="flex-1 min-w-0">
                  <div className="font-inter text-[13.5px] font-medium text-[#111111]">
                    {n.title}
                  </div>
                  <div className="mt-0.5 font-inter text-[12.5px] text-[#555550]">
                    {n.body}
                  </div>
                </div>
                <time className="shrink-0 font-mono text-[10.5px] text-[#858580]">
                  {n.created_at}
                </time>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
