import { CampusBadge, PrimaryButton } from '../common';

interface PlaceholderViewProps {
  title: string;
  onNavigateTab?: (tab: string) => void;
}

export default function PlaceholderView({ title, onNavigateTab }: PlaceholderViewProps) {
  return (
    <div className="mx-auto max-w-[760px] pt-8">
      <div className="rounded-2xl border border-[#111111]/[0.08] bg-white p-10 md:p-14 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <CampusBadge variant="purple" size="sm">
          Round 2 module
        </CampusBadge>

        <h2 className="mt-4 font-inter text-[28px] font-medium tracking-tight text-[#111111]">
          {title}
        </h2>

        <p className="mx-auto mt-3 max-w-[460px] font-inter text-[14px] leading-relaxed text-[#555550]">
          This module is part of the Round 2 ReBuild showcase. For Round 1, please explore the Overview, Events, and My Events workspaces.
        </p>

        <div className="mt-6 flex justify-center">
          <PrimaryButton
            variant="primary"
            size="md"
            icon="arrow-pill"
            onClick={() => onNavigateTab ? onNavigateTab('Events') : undefined}
          >
            Continue Challenges
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
