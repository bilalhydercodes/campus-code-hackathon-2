import { StudentStats } from '../../data/stats';

interface StatsGridProps {
  stats: StudentStats;
}

const SUNBURST_RAYS = [
  "M 100 20 L 100 85 L 88.2 84.2 L 97.2 19.8 Z",
  "M 95.8 19.6 L 82.3 83.1 L 70.9 79.9 L 93.2 18.8 Z",
  "M 91.9 18.3 L 65.4 77.7 L 55.0 72.1 L 89.4 17.0 Z",
  "M 88.2 16.2 L 50.0 68.8 L 41.0 61.1 L 86.1 14.4 Z",
  "M 85.1 13.4 L 36.8 56.9 L 29.5 47.5 L 83.4 11.2 Z",
  "M 82.7 10.0 L 26.4 42.5 L 21.2 31.8 L 81.5 7.5 Z",
  "M 81.0 6.2 L 19.2 26.3 L 16.3 14.8 L 80.3 3.5 Z",
  "M 80.1 2.1 L 15.5 8.9 L 15.1 -3.0 L 80.0 -0.7 Z",
];

export default function StatsGrid({ stats }: StatsGridProps) {
  const items = [
    {
      label: 'Registered events',
      value: stats.registered,
      note: 'CONFIRMED TRACKS',
      bg: '#F0E9FF',
      accent: '#E4D9FF',
    },
    {
      label: 'Active tracks',
      value: stats.ongoing,
      note: 'CURRENTLY COMPETING',
      bg: '#F1FBD9',
      accent: '#E3F6B7',
    },
    {
      label: 'Completed challenges',
      value: stats.completed,
      note: 'FINAL SUBMISSIONS',
      bg: '#F0E9FF',
      accent: '#E4D9FF',
    },
    {
      label: 'Certificates earned',
      value: stats.certificates,
      note: 'VERIFIED CREDENTIALS',
      bg: '#F1FBD9',
      accent: '#E3F6B7',
    },
  ];

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative overflow-hidden flex flex-col justify-between rounded-2xl border border-[#111111]/[0.08] p-4.5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-colors hover:border-[#111111]/15"
          style={{ backgroundColor: item.bg }}
        >
          {/* Soft Sunburst Pattern */}
          <svg
            className="pointer-events-none absolute -right-2 -top-2 h-28 w-28 select-none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="100" cy="0" r="16" fill={item.accent} />
            {SUNBURST_RAYS.map((d, i) => (
              <path key={i} d={d} fill={item.accent} />
            ))}
          </svg>

          <div className="relative z-10 font-inter text-[13px] font-medium text-[#555550]">
            {item.label}
          </div>
          <div className="relative z-10 my-2.5 font-inter text-[34px] font-normal tracking-tight tabular-nums text-[#111111]">
            {item.value}
          </div>
          <div className="relative z-10 font-mono text-[10.5px] text-[#858580] tracking-[0.04em]">
            {item.note}
          </div>
        </div>
      ))}
    </div>
  );
}
