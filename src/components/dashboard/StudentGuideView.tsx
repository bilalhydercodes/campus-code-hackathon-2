"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Bookmark, 
  ChevronRight, 
  FileText, 
  Map, 
  CheckCircle2, 
  XCircle, 
  HelpCircle,
  Code2,
  X,
  BookOpen,
  Sparkles
} from "lucide-react";

// Content mapped from the ELP / CAMPUSCODE GUIDE
export const guidePages = [
  {
    id: "playbook",
    title: "Your Playbook",
    icon: <Map className="h-5 w-5" />,
    content: (
      <div className="space-y-6">
        <div>
          <h2 className="font-inter text-2xl font-bold text-gray-900 tracking-tight">Your Playbook</h2>
          <p className="mt-1 font-mono font-medium text-[#7665FF] uppercase tracking-wider text-xs">
            Join. Build. Submit. Advance.
          </p>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Follow the journey in order. Your dashboard and round pages will tell you what is currently available.
          </p>
        </div>

        <div className="space-y-4 pt-1">
          {[
            { step: "01", title: "GET STARTED", desc: "Use your Dashboard to see your current activity, notifications and available hackathons." },
            { step: "02", title: "JOIN A HACKATHON", desc: "Open Hackathons, review the event information and use JOIN HACKATHON when you are eligible." },
            { step: "03", title: "BUILD YOUR TEAM", desc: "After joining, open My Team to create a team or use HackMate AI to discover compatible participants." },
            { step: "04", title: "SUBMIT YOUR IDEA", desc: "When Round 1 is live, your team submits its problem statement. A Participant Agreement appears before the official submission." },
            { step: "05", title: "ROUND 1 → ROUND 3", desc: "Watch the round status in each workspace. A later round can remain locked until the organizer workflow opens it for your team." },
            { step: "06", title: "CHECK RESULTS", desc: "Use Results and Leaderboard to view published outcomes, scores and available organizer feedback." },
            { step: "07", title: "USE AI RESPONSIBLY", desc: "IdeaCheck helps you review an idea. RuleBot helps with hackathon rules. Always treat the organizer's official instructions as authoritative." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start group">
              <span className="flex-shrink-0 font-mono text-xl font-black text-gray-300 mt-0.5 group-hover:text-[#7665FF] transition-colors">{item.step}</span>
              <div>
                <h4 className="font-inter font-bold text-gray-900 text-sm tracking-tight">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "dos-donts",
    title: "Do's & Don'ts",
    icon: <CheckCircle2 className="h-5 w-5" />,
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="font-inter text-2xl font-bold text-gray-900 tracking-tight">What to Do</h2>
          <p className="mt-1 text-sm text-gray-500 mb-4">DO THIS to ensure a smooth hackathon experience.</p>
          <ul className="space-y-3">
            {[
              "Read the hackathon details before joining.",
              "Create or join the correct team for the hackathon.",
              "Check your round status before preparing a submission.",
              "Keep your project information accurate and consistent.",
              "Read official announcements and deadlines.",
              "Use IdeaCheck and RuleBot as supporting tools."
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700 items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <h2 className="font-inter text-2xl font-bold text-gray-900 tracking-tight">What Not to Do</h2>
          <p className="mt-1 text-sm text-gray-500 mb-4">AVOID THIS to prevent disqualification or issues.</p>
          <ul className="space-y-3">
            {[
              "Do not submit copied or unauthorized work.",
              "Do not share account credentials with other people.",
              "Do not wait until the last moment to check a round.",
              "Do not treat AI output as an official organizer decision.",
              "Do not ignore organizer announcements.",
              "Do not submit to the wrong hackathon or team."
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700 items-start">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Common Questions",
    icon: <HelpCircle className="h-5 w-5" />,
    content: (
      <div className="space-y-6">
        <div>
          <h2 className="font-inter text-2xl font-bold text-gray-900 tracking-tight">FAQ</h2>
          <p className="mt-1 text-sm text-gray-500">Frequently asked questions and student answers.</p>
        </div>
        
        <div className="space-y-4 text-sm">
          {[
            {
              q: "Can I submit Round 1 without a team?",
              a: "No. The current StudentPanel requires you to be part of a team before Round 1 submission.",
            },
            {
              q: "Why is my round locked?",
              a: "A later round can remain locked until the organizer workflow opens it for your team. Watch the round status in each workspace.",
            },
            {
              q: "Where should I look for official communication?",
              a: "Use your Dashboard to see your current activity and notifications, and always read official announcements provided by the organizer.",
            },
            {
              q: "Can RuleBot replace organizer instructions?",
              a: "No. IdeaCheck and RuleBot are supporting tools. Always treat the organizer's official instructions as authoritative.",
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-gray-100 bg-gray-50/60 p-4 space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-start gap-2 text-[14.5px]">
                <span className="text-[#7665FF] font-bold font-mono">Q:</span>
                <span>{item.q}</span>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

// Inner page turn animation
const pageFlipVariants = {
  initial: (direction: number) => ({
    rotateY: direction > 0 ? 80 : -80,
    opacity: 0,
    boxShadow: "inset 20px 0 50px rgba(0,0,0,0.08)",
  }),
  animate: {
    rotateY: 0,
    opacity: 1,
    boxShadow: "inset 0px 0 0px rgba(0,0,0,0)",
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -80 : 80,
    opacity: 0,
    boxShadow: "inset 20px 0 50px rgba(0,0,0,0.08)",
    transition: {
      duration: 0.35,
      ease: "easeIn" as const,
    },
  }),
};

// Book cover swing animation
const bookCoverVariants = {
  closed: { 
    rotateY: 0, 
    opacity: 1,
    pointerEvents: "auto" as const,
  },
  open: { 
    rotateY: -110, 
    opacity: 0,
    pointerEvents: "none" as const,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function StudentGuideBook() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const activePage = guidePages[currentPageIndex];

  const handlePageChange = (index: number) => {
    if (index === currentPageIndex) return;
    setDirection(index > currentPageIndex ? 1 : -1);
    setCurrentPageIndex(index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto select-none">
      {/* Header outside the book */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7665FF]/10 text-[#7665FF] border border-[#7665FF]/20 shadow-xs">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-inter text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Student Guide</h1>
            <p className="text-sm text-gray-500">Everything you need to navigate CampusCode</p>
          </div>
        </div>
        
        {/* Quick controls outside the book */}
        <div className="flex items-center gap-2">
          {isBookOpen ? (
            <button 
              type="button"
              onClick={() => setIsBookOpen(false)}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-xs transition-all hover:bg-gray-50 cursor-pointer"
            >
              <X className="h-4 w-4" /> Close Book
            </button>
          ) : (
            <button 
              type="button"
              onClick={() => setIsBookOpen(true)}
              className="flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-neutral-800 cursor-pointer"
            >
              <BookOpen className="h-4 w-4" /> Open Guide
            </button>
          )}
        </div>
      </div>

      {/* The 3D Book Container */}
      <div 
        className="relative flex min-h-[620px] w-full rounded-2xl shadow-xl ring-1 ring-gray-200 bg-[#F7F7F4]"
        style={{ perspective: "1500px" }}
      >
        
        {/* ========================================= */}
        {/* THE COVER: Sits on top, swings left to open */}
        {/* ========================================= */}
        <motion.div
          variants={bookCoverVariants}
          initial="closed"
          animate={isBookOpen ? "open" : "closed"}
          style={{ transformOrigin: "left center" }}
          onClick={() => setIsBookOpen(true)}
          className="absolute inset-0 z-50 flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c0d19] via-[#1a1538] to-[#0c0d19] border border-purple-500/30 shadow-2xl transition-transform"
        >
          {/* Decorative Cover Binding (Left Edge) */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-black/40 border-r border-white/5" />
          
          {/* Gold / Purple Trim Accents */}
          <div className="absolute top-6 left-16 right-6 h-px bg-gradient-to-r from-transparent via-[#7665FF]/40 to-transparent" />
          <div className="absolute bottom-6 left-16 right-6 h-px bg-gradient-to-r from-transparent via-[#7665FF]/40 to-transparent" />

          <div className="flex flex-col items-center justify-center relative z-10 text-center px-6">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(118,101,255,0.2)] backdrop-blur-md">
              <Code2 className="h-12 w-12 text-[#A8E62E]" />
            </div>
            <h2 className="font-inter text-4xl sm:text-5xl font-black tracking-tight text-white mb-2">CampusCode</h2>
            <p className="font-mono text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-[#7665FF]">
              Student Official Playbook
            </p>
            
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-[#7665FF]/20 px-6 py-2.5 text-xs font-semibold text-purple-200 backdrop-blur-md transition-all hover:bg-[#7665FF]/30 hover:scale-105 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#A8E62E]" />
              <span>Click to Open Guide</span>
            </div>
          </div>
          
          {/* Soft interior cover shadow gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50 pointer-events-none" />
        </motion.div>


        {/* ========================================= */}
        {/* THE INTERIOR: Visible when cover opens */}
        {/* ========================================= */}
        <div className="relative flex w-full flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-inner">
          
          {/* Book Spine (Divider) */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-8 -ml-4 z-10 bg-gradient-to-r from-transparent via-gray-200/80 to-transparent shadow-[inset_0_0_15px_rgba(0,0,0,0.05)] border-x border-gray-200/50" />

          {/* LEFT PAGE: Table of Contents */}
          <div className="w-full md:w-1/3 bg-[#FAFAF8] p-6 md:p-8 flex flex-col border-b md:border-b-0 md:border-r border-gray-200 relative z-20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-gray-900">
                <Bookmark className="h-5 w-5 text-[#7665FF]" />
                <h3 className="font-inter font-bold text-lg tracking-tight">Chapters</h3>
              </div>
            </div>
            
            <nav className="flex flex-col gap-2 flex-1">
              {guidePages.map((page, index) => {
                const isActive = index === currentPageIndex;
                return (
                  <button
                    key={page.id}
                    type="button"
                    onClick={() => handlePageChange(index)}
                    className={cn(
                      "group flex items-center justify-between w-full p-3.5 rounded-xl transition-all duration-200 text-left cursor-pointer",
                      isActive 
                        ? "bg-white shadow-sm ring-1 ring-gray-200/80 text-[#7665FF] font-semibold" 
                        : "hover:bg-gray-100/80 text-gray-600 hover:text-gray-900"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "transition-colors",
                        isActive ? "text-[#7665FF]" : "text-gray-400 group-hover:text-gray-600"
                      )}>
                        {page.icon}
                      </span>
                      <span className="font-medium text-sm">{page.title}</span>
                    </div>
                    {isActive && (
                      <ChevronRight className="h-4 w-4 text-[#7665FF]" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 text-center text-xs text-gray-400 font-mono">
              Chapter {currentPageIndex + 1} of {guidePages.length}
            </div>
          </div>

          {/* RIGHT PAGE: Content Area with 3D Page Turn */}
          <div className="w-full md:w-2/3 bg-white relative overflow-hidden flex flex-col z-10">
            <div className="flex-1 relative h-full w-full min-h-[500px]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={currentPageIndex}
                  custom={direction}
                  variants={pageFlipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ transformOrigin: "left center" }} 
                  className="absolute inset-0 bg-white p-6 sm:p-8 md:p-10 overflow-y-auto border-l border-gray-100"
                >
                  <div className="inline-block rounded-full bg-[#7665FF]/10 border border-[#7665FF]/20 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#7665FF] mb-6">
                    Chapter {currentPageIndex + 1} · {activePage.title}
                  </div>
                  
                  {activePage.content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom page number footer */}
            <div className="border-t border-gray-100 px-8 py-3 flex items-center justify-between text-xs text-gray-400 font-mono bg-white z-20">
              <span>CampusCode Official Student Guide</span>
              <span>Page {currentPageIndex + 1} of {guidePages.length}</span>
            </div>
          </div>
        </div>
        {/* End of Interior */}

      </div>
    </div>
  );
}

export default StudentGuideBook;
