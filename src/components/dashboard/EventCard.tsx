import React, { useState } from 'react';
import { EventItem } from '../../data/events';
import { Users, MapPin, ShareNetwork, Heart } from 'phosphor-react';

interface EventCardProps {
  event: EventItem;
  onSelect?: (event: EventItem) => void;
}

export default function EventCard({ event, onSelect }: EventCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  const renderBadgeLogo = () => {
    switch (event.logo_type) {
      case 'droidecks':
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#84cc16] text-black font-extrabold text-[15px] select-none shadow-2xs">
            VY
          </div>
        );
      case 'technova':
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e11d48] text-white font-extrabold text-[15px] select-none shadow-2xs">
            TN
          </div>
        );
      case 'campuscode':
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white font-extrabold text-[15px] select-none shadow-2xs">
            CC
          </div>
        );
      case 'quiz':
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ea580c] text-white font-black text-[11px] tracking-tight select-none shadow-2xs">
            QUIZ
          </div>
        );
      case 'ai':
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] text-white font-extrabold text-[15px] select-none shadow-2xs">
            AI
          </div>
        );
      case 'web':
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0284c7] text-white font-black text-[12px] tracking-tight select-none shadow-2xs">
            WEB
          </div>
        );
      default:
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white font-bold text-[13px] select-none shadow-2xs">
            CC
          </div>
        );
    }
  };

  const isCompleted =
    event.deadline_left?.toLowerCase().includes('completed') ||
    event.status === 'COMPLETED';

  return (
    <article
      onClick={() => onSelect?.(event)}
      className="group relative flex w-full cursor-pointer flex-col justify-between rounded-[14px] border border-gray-200/80 bg-white p-4 transition-all duration-150 hover:border-gray-300 shadow-none select-text"
    >
      <div>
        {/* Top Header Row: Title & Organizer on Left, Challenge Badge on Right */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-inter text-[15px] font-bold leading-snug tracking-tight text-[#111111] transition-colors group-hover:text-blue-600">
              {event.title}
            </h3>
            <p className="mt-0.5 font-inter text-[11px] font-normal text-[#666660]">
              {event.organizer}
            </p>
          </div>
          {renderBadgeLogo()}
        </div>

        {/* Metadata Row: Team size & Mode */}
        <div className="mt-2.5 flex items-center gap-3 font-inter text-[10px] text-[#666660]">
          <div className="flex items-center gap-1.5">
            <Users size={14} className="w-3.5 h-3.5 text-[#666660]" />
            <span>{event.team_size}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="w-3.5 h-3.5 text-[#666660]" />
            <span>Online</span>
          </div>
        </div>

        {/* Tags Row */}
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f3f4f6] px-2.5 py-0.5 font-inter text-[9.5px] font-normal text-[#4b5563]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Row / Divider */}
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2.5 font-inter text-[10px]">
        <div className="flex items-center text-[#858580]">
          <span>Posted {event.posted_date}</span>
          <span className="mx-2 text-[#858580]/40">|</span>
          <span
            className={`font-semibold ${
              isCompleted ? 'text-[#111111]' : 'text-[#111111]'
            }`}
          >
            {isCompleted ? 'Completed' : event.deadline_left}
          </span>
        </div>

        {/* Actions: Share & Heart */}
        <div className="flex items-center gap-3 text-[#858580]">
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share challenge"
            className="transition-colors hover:text-[#111111]"
          >
            <ShareNetwork size={25} className="w-[25px] h-[25px]" />
          </button>
          <button
            type="button"
            onClick={handleLike}
            aria-label="Bookmark challenge"
            className={`transition-colors ${
              isLiked ? 'text-red-500' : 'hover:text-[#111111]'
            }`}
          >
            <Heart size={25} className={`w-[25px] h-[25px] ${isLiked ? 'text-red-500' : ''}`} weight={isLiked ? 'fill' : 'regular'} />
          </button>
        </div>
      </div>
    </article>
  );
}
