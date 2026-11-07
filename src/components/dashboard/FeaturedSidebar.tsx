import React from 'react';
import { mockFeaturedItems, FeaturedItem } from '../../data/events';

interface FeaturedSidebarProps {
  onItemClick?: (item: FeaturedItem) => void;
}

export default function FeaturedSidebar({ onItemClick }: FeaturedSidebarProps) {
  const renderFeaturedLogo = (type: FeaturedItem['logo_type']) => {
    switch (type) {
      case 'linkedin':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-2xs select-none">
            <span className="font-sans text-[18px] font-bold leading-none tracking-tighter">in</span>
          </div>
        );
      case 'tekqubit':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200 bg-white p-1 shadow-2xs select-none">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="h-2 w-2 rounded-full border border-cyan-500 bg-cyan-100" />
              <span className="text-[6.5px] font-bold text-gray-700 tracking-tight mt-0.5">Tek-Qubit</span>
            </div>
          </div>
        );
      case 'airtel':
        return (
          <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-xl bg-black border border-neutral-800 p-1 shadow-2xs select-none text-white">
            <div className="flex items-center gap-0.5">
              <div className="h-1.5 w-1.5 rounded-full border border-[#e11d48]" />
              <span className="font-bold text-[8px] text-[#e11d48] tracking-tight">airtel</span>
            </div>
            <span className="font-black text-[7.5px] tracking-[0.14em]">SYNC</span>
          </div>
        );
      case 'iitian':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-300 bg-sky-50 p-0.5 shadow-2xs select-none">
            <div className="flex h-full w-full items-center justify-center rounded-full border border-sky-500 bg-[#f0f9ff]">
              <span className="font-serif font-black text-[9px] text-sky-800 tracking-tighter">IIT</span>
            </div>
          </div>
        );
      case 'seva':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-[#991b1b]/30 p-0.5 shadow-2xs select-none">
            <div className="flex h-full w-full items-center justify-center rounded-full border border-dashed border-[#991b1b] bg-[#fef2f2] text-center">
              <div className="font-serif font-black text-[7.5px] text-[#991b1b] leading-tight tracking-tight">
                SEVA
                <br />
                <span className="text-[6px] font-sans font-bold">FIRST</span>
              </div>
            </div>
          </div>
        );
      case 'pwc':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200/90 p-1 shadow-2xs select-none">
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif font-bold text-[12px] leading-none text-black">pwc</span>
              <div className="mt-0.5 grid grid-cols-2 gap-0.5">
                <div className="h-1 w-1 bg-[#d9381e]" />
                <div className="h-1 w-1 bg-[#e05338]" />
                <div className="h-1 w-1 bg-[#eb8c00]" />
                <div className="h-1 w-1 bg-[#dc143c]" />
              </div>
            </div>
          </div>
        );
      case 'royals':
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fdf2f8] border border-pink-200 p-1 shadow-2xs select-none text-[#db2777]">
            <div className="flex flex-col items-center leading-none">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
              <span className="text-[6px] font-black tracking-tight text-pink-700">RR</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
            ★
          </div>
        );
    }
  };

  return (
    <aside className="rounded-3xl border border-gray-200/60 bg-[#F8F9FA] p-5 shadow-xs">
      <h2 className="font-sans text-[15.5px] font-bold tracking-tight text-[#101828]">
        Featured
      </h2>

      <div className="mt-4 space-y-4">
        {mockFeaturedItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick?.(item)}
            className="group flex cursor-pointer items-center gap-3 transition-colors"
          >
            <div className="shrink-0 transition-transform group-hover:scale-105 duration-150">
              {renderFeaturedLogo(item.logo_type)}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 font-sans text-[12px] font-semibold leading-tight text-[#101828] transition-colors group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="mt-0.5 font-sans text-[11px] text-gray-400 font-normal">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
