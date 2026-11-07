import { EventItem } from '../../data/events';
import { CampusBadge, PrimaryButton } from '../common';

interface RegistrationCardProps {
  registration: EventItem;
}

export default function RegistrationCard({ registration }: RegistrationCardProps) {
  const isCompleted = registration.status === 'COMPLETED';

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-[#111111]/[0.08] bg-white p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-colors hover:border-[#111111]/15">
      <div>
        <div className="flex items-center justify-between border-b border-[#111111]/[0.08] pb-3">
          <span className="font-mono text-[11px] text-[#7665FF] tracking-[0.04em]">
            {registration.registration_id || 'CONFIRMED'}
          </span>
          <CampusBadge
            variant={isCompleted ? 'neutral' : 'purple'}
            size="sm"
          >
            {isCompleted ? 'Completed' : 'Active track'}
          </CampusBadge>
        </div>

        <div className="my-5 flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#111111]/[0.08] bg-[#F7F7F4] font-mono text-[12px] font-medium text-[#111111]">
            CC
          </div>
          <h2 className="font-inter text-[18px] font-medium leading-snug text-[#111111]">
            {registration.title}
          </h2>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-[12.5px]">
            <span className="font-mono text-[11px] text-[#858580] tracking-[0.03em]">TEAM</span>
            <span className="font-inter font-medium text-[#111111]">
              {registration.team_name || 'Individual builder'}
            </span>
          </div>
          <div className="flex items-center justify-between text-[12.5px]">
            <span className="font-mono text-[11px] text-[#858580] tracking-[0.03em]">TIMELINE</span>
            <span className="font-mono text-[11px] text-[#555550]">{registration.start_date}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#111111]/[0.08]">
        <PrimaryButton
          variant={isCompleted ? 'secondary' : 'primary'}
          size="sm"
          icon="arrow-pill"
          className="w-full justify-center"
        >
          {isCompleted ? 'View results' : 'Open challenge journey'}
        </PrimaryButton>
      </div>
    </article>
  );
}
