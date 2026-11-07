import React, { useState, useMemo } from 'react';
import { mockEvents, EventItem } from '../../data/events';
import EventCard from './EventCard';
import {
  Trophy,
  Briefcase,
  Code,
  Timer,
  Confetti,
  GraduationCap,
  Funnel,
  CaretDown,
  ArrowRight,
  X,
  Check,
} from 'phosphor-react';

type ChallengeTypeFilter = 'all' | 'hackathon' | 'quiz';
type CategoryTab =
  | 'competitions'
  | 'case_competitions'
  | 'hackathons'
  | 'quizzes'
  | 'festivals'
  | 'scholarships';
type TeamSizeFilter = 'all' | 'solo' | 'team';
type PaymentFilter = 'all' | 'free' | 'paid';
type SortOption = 'newest' | 'ending_soon' | 'popular';

const FEATURED_ITEMS = [
  { id: 'f1', title: 'Get CampusCode on LinkedIn' },
  { id: 'f2', title: 'Tek-Qubit: Women of Impact 2026' },
  { id: 'f3', title: 'Airtel Sync 2026' },
  { id: 'f4', title: 'Dream to be an IITian?' },
  {
    id: 'f5',
    title: 'SEVA FIRST- Rashtriya Youth Innovation Challenge 2026',
  },
  {
    id: 'f6',
    title: 'Tuition fee support for the selected 2026-27 cohort.',
  },
];

export default function EventsView() {
  const [challengeFilter, setChallengeFilter] = useState<ChallengeTypeFilter>('all');
  const [activeCategoryTab, setActiveCategoryTab] = useState<CategoryTab>('hackathons');
  const [teamSizeFilter, setTeamSizeFilter] = useState<TeamSizeFilter>('all');
  const [paymentFilter, setPaymentFilter] = useState<PaymentFilter>('all');
  const [categoryTagFilter, setCategoryTagFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  // Selected event for modal view / registration
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [eventsList, setEventsList] = useState<EventItem[]>(mockEvents);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // Filtered and sorted events
  const filteredEvents = useMemo(() => {
    return eventsList.filter((event) => {
      if (challengeFilter === 'hackathon' && event.event_type !== 'hackathon') return false;
      if (challengeFilter === 'quiz' && event.event_type !== 'quiz') return false;

      if (
        teamSizeFilter === 'solo' &&
        !event.team_size.toLowerCase().includes('individual') &&
        !event.team_size.includes('1 Member')
      ) {
        return false;
      }
      if (
        teamSizeFilter === 'team' &&
        (event.team_size.toLowerCase().includes('individual') ||
          event.team_size.includes('1 Member'))
      ) {
        return false;
      }

      if (paymentFilter === 'free' && event.payment_type !== 'Free') return false;
      if (paymentFilter === 'paid' && event.payment_type !== 'Paid') return false;

      if (categoryTagFilter !== 'all' && !event.tags.includes(categoryTagFilter)) {
        return false;
      }

      return true;
    });
  }, [eventsList, challengeFilter, teamSizeFilter, paymentFilter, categoryTagFilter]);

  const handleToggleRegistration = (eventId: string) => {
    setEventsList((prev) =>
      prev.map((e) =>
        e.id === eventId
          ? {
              ...e,
              is_registered: !e.is_registered,
              registration_id: !e.is_registered
                ? `CC-REG-${Date.now().toString().slice(-4)}`
                : undefined,
            }
          : e
      )
    );
    if (selectedEvent && selectedEvent.id === eventId) {
      setSelectedEvent((prev) =>
        prev
          ? {
              ...prev,
              is_registered: !prev.is_registered,
              registration_id: !prev.is_registered
                ? `CC-REG-${Date.now().toString().slice(-4)}`
                : undefined,
            }
          : null
      );
    }
  };

  const categories = [
    { id: 'competitions', label: 'Competitions', icon: Trophy },
    { id: 'case_competitions', label: 'Case Competitions', icon: Briefcase },
    { id: 'hackathons', label: 'Hackathons', icon: Code },
    { id: 'quizzes', label: 'Quizzes', icon: Timer },
    { id: 'festivals', label: 'College Festivals', icon: Confetti },
    { id: 'scholarships', label: 'Scholarships', icon: GraduationCap },
  ];

  return (
    <div className="mx-auto w-full max-w-[1180px] font-sans text-[#111111] select-text space-y-5 pb-12">
      {/* ==================================================================
          01. MAIN PAGE TITLE & SUBTITLE
          ================================================================== */}
      <div>
        <h1 className="font-inter text-[32px] md:text-[35px] font-bold tracking-tight leading-none text-[#111111]">
          <span className="text-[#7665ff]">2540+</span> Hackathons in India
        </h1>
        <p className="mt-2 font-inter text-[13.5px] font-normal text-[#666660]">
          Build, code, and innovate in online and student hackathons.
        </p>
      </div>

      {/* ==================================================================
          02. CATEGORY SELECTOR ROW
          ================================================================== */}
      <div className="flex items-center gap-2 pt-1 overflow-x-auto pb-1.5 no-scrollbar sm:flex-wrap">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isActive = activeCategoryTab === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategoryTab(cat.id as CategoryTab)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 font-inter text-[12px] font-medium transition-all ${
                isActive
                  ? 'bg-[#7665ff] text-white shadow-2xs'
                  : 'border border-gray-200/90 bg-white text-[#374151] hover:bg-gray-50'
              }`}
            >
              <IconComp size={16} className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#666660]'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* ==================================================================
          03. FILTER AND SORT ROW
          ================================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        {/* Left Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Filters Toggle */}
          <button
            type="button"
            onClick={() => toggleDropdown('filters')}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/90 bg-white px-3.5 py-1.5 font-inter text-[11.5px] font-medium text-[#374151] hover:bg-gray-50 shadow-2xs"
          >
            <Funnel size={13} className="w-3.5 h-3.5 text-[#666660]" />
            <span>Filters</span>
            <CaretDown size={11} className="w-2.5 h-2.5 text-[#666660]" />
          </button>

          {/* Team Size */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('team')}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-inter text-[11.5px] font-medium transition-all shadow-2xs ${
                teamSizeFilter !== 'all'
                  ? 'border-[#7665ff] bg-purple-50 text-[#7665ff]'
                  : 'border-gray-200/90 bg-white text-[#374151] hover:bg-gray-50'
              }`}
            >
              <span>Team Size</span>
              <CaretDown size={11} className="w-2.5 h-2.5 text-[#666660]" />
            </button>
            {openDropdown === 'team' && (
              <div className="absolute left-0 top-full z-40 mt-1 w-36 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg animate-in fade-in zoom-in-95">
                {(['all', 'solo', 'team'] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setTeamSizeFilter(opt);
                      setOpenDropdown(null);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1 text-left text-[11px] ${
                      teamSizeFilter === opt
                        ? 'bg-purple-50 font-medium text-[#7665ff]'
                        : 'text-[#111111] hover:bg-gray-50'
                    }`}
                  >
                    <span className="capitalize">{opt === 'all' ? 'All sizes' : opt}</span>
                    {teamSizeFilter === opt && <Check size={13} className="w-3.5 h-3.5 text-[#7665ff]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Payment */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('payment')}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-inter text-[11.5px] font-medium transition-all shadow-2xs ${
                paymentFilter !== 'all'
                  ? 'border-[#7665ff] bg-purple-50 text-[#7665ff]'
                  : 'border-gray-200/90 bg-white text-[#374151] hover:bg-gray-50'
              }`}
            >
              <span>Payment</span>
              <CaretDown size={11} className="w-2.5 h-2.5 text-[#666660]" />
            </button>
            {openDropdown === 'payment' && (
              <div className="absolute left-0 top-full z-40 mt-1 w-32 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg animate-in fade-in zoom-in-95">
                {(['all', 'free', 'paid'] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setPaymentFilter(opt);
                      setOpenDropdown(null);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1 text-left text-[11px] ${
                      paymentFilter === opt
                        ? 'bg-purple-50 font-medium text-[#7665ff]'
                        : 'text-[#111111] hover:bg-gray-50'
                    }`}
                  >
                    <span className="capitalize">{opt === 'all' ? 'All tiers' : opt}</span>
                    {paymentFilter === opt && <Check size={13} className="w-3.5 h-3.5 text-[#7665ff]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Categories */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('categories')}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-inter text-[11.5px] font-medium transition-all shadow-2xs ${
                categoryTagFilter !== 'all'
                  ? 'border-[#7665ff] bg-purple-50 text-[#7665ff]'
                  : 'border-gray-200/90 bg-white text-[#374151] hover:bg-gray-50'
              }`}
            >
              <span>Categories</span>
              <CaretDown size={11} className="w-2.5 h-2.5 text-[#666660]" />
            </button>
            {openDropdown === 'categories' && (
              <div className="absolute left-0 top-full z-40 mt-1 w-44 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg animate-in fade-in zoom-in-95">
                {[
                  { id: 'all', label: 'All tags' },
                  { id: 'Software Development', label: 'Software Development' },
                  { id: 'Frontend Only', label: 'Frontend Only' },
                  { id: 'Machine Learning', label: 'Machine Learning' },
                  { id: 'Speed Quiz', label: 'Speed Quiz' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setCategoryTagFilter(opt.id);
                      setOpenDropdown(null);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1 text-left text-[11px] ${
                      categoryTagFilter === opt.id
                        ? 'bg-purple-50 font-medium text-[#7665ff]'
                        : 'text-[#111111] hover:bg-gray-50'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {categoryTagFilter === opt.id && <Check size={13} className="w-3.5 h-3.5 text-[#7665ff]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Sort By & Results Count */}
        <div className="flex items-center gap-3">
          <span className="font-inter text-[12px] text-[#858580]">
            Showing {filteredEvents.length} challenges
          </span>
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('sort')}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/90 bg-white px-3.5 py-1.5 font-inter text-[11.5px] font-medium text-[#374151] hover:bg-gray-50 shadow-2xs"
            >
              <span>Sort By</span>
              <CaretDown size={11} className="w-2.5 h-2.5 text-[#666660]" />
            </button>
            {openDropdown === 'sort' && (
              <div className="absolute right-0 top-full z-40 mt-1 w-36 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg animate-in fade-in zoom-in-95">
                {[
                  { id: 'newest', label: 'Newest First' },
                  { id: 'ending_soon', label: 'Ending Soon' },
                  { id: 'popular', label: 'Most Popular' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSortBy(opt.id as SortOption);
                      setOpenDropdown(null);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1 text-left text-[11px] ${
                      sortBy === opt.id
                        ? 'bg-purple-50 font-medium text-[#7665ff]'
                        : 'text-[#111111] hover:bg-gray-50'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {sortBy === opt.id && <Check size={13} className="w-3.5 h-3.5 text-[#7665ff]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ==================================================================
          05. MAIN EVENTS & FEATURED PANEL
          Proportional two-column layout that elegantly fills the desktop space
          ================================================================== */}
      <div className="pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Event Cards Stack */}
        <div className="lg:col-span-8 space-y-3.5">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={(evt) => setSelectedEvent(evt)}
            />
          ))}

          {filteredEvents.length === 0 && (
            <div className="rounded-[16px] border border-gray-200 bg-white p-8 text-center">
              <p className="font-inter text-[13px] text-[#666660]">
                No challenges match the active filter combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  setChallengeFilter('all');
                  setTeamSizeFilter('all');
                  setPaymentFilter('all');
                  setCategoryTagFilter('all');
                }}
                className="mt-3 rounded-full bg-[#7665ff] px-4 py-1.5 font-inter text-[11px] font-medium text-white shadow-2xs"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Featured Panel */}
        <aside className="lg:col-span-4 rounded-2xl border border-gray-200/80 bg-white p-5 shadow-none">
          <h2 className="font-inter text-[16px] font-bold tracking-tight text-[#111111]">
            Featured
          </h2>

          <div className="mt-3.5 space-y-0">
            {FEATURED_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => alert(`Featured opportunity: ${item.title}`)}
                className="group flex cursor-pointer items-center justify-between py-3 border-b border-gray-100 last:border-b-0 transition-colors"
              >
                <span className="font-inter text-[11.5px] font-semibold leading-tight text-[#111111] group-hover:text-[#7665ff] transition-colors pr-2">
                  {item.title}
                </span>
                <ArrowRight size={25} className="w-[25px] h-[25px] shrink-0 text-[#111111] group-hover:translate-x-0.5 transition-transform" />
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* ==================================================================
          EVENT DETAIL & REGISTRATION MODAL
          ================================================================== */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-[480px] rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-gray-100 pb-3.5">
              <div>
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#7665ff]">
                  {selectedEvent.code}
                </span>
                <h3 className="font-inter text-[18px] font-bold text-[#111111] mt-0.5">
                  {selectedEvent.title}
                </h3>
                <p className="font-inter text-[12px] text-[#666660]">
                  {selectedEvent.organizer}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={20} className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-4 font-inter text-[12.5px] leading-relaxed text-[#4b5563]">
              {selectedEvent.description}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-xl bg-gray-50 p-3 font-inter text-[11px]">
              <div>
                <span className="block text-[9.5px] uppercase text-[#858580]">Team Size</span>
                <span className="font-medium text-[#111111]">{selectedEvent.team_size}</span>
              </div>
              <div>
                <span className="block text-[9.5px] uppercase text-[#858580]">Mode</span>
                <span className="font-medium text-[#111111]">{selectedEvent.location}</span>
              </div>
              <div>
                <span className="block text-[9.5px] uppercase text-[#858580]">Timeline</span>
                <span className="font-medium text-[#111111]">{selectedEvent.start_date}</span>
              </div>
              <div>
                <span className="block text-[9.5px] uppercase text-[#858580]">Registration</span>
                <span className="font-medium text-[#111111]">
                  {selectedEvent.is_registered ? 'Confirmed' : 'Open'}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-2.5 border-t border-gray-100 pt-3.5">
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="rounded-full border border-gray-300 px-4 py-1.5 font-inter text-[11.5px] font-medium text-[#374151] hover:bg-gray-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleToggleRegistration(selectedEvent.id)}
                className={`rounded-full px-4 py-1.5 font-inter text-[11.5px] font-semibold text-white shadow-2xs ${
                  selectedEvent.is_registered
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-[#7665ff] hover:bg-[#6352f0]'
                }`}
              >
                {selectedEvent.is_registered ? 'Cancel Entry' : 'Register Now'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
