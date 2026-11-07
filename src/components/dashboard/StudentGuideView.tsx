"use client";

import React, { useState } from "react";
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
  X,
  BookOpen,
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

export default function StudentGuideView() {
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
    <div className="w-full max-w-5xl mx-auto select-none py-2">
      {/* Title & Subtitle matching the screenshot */}
      <div className="text-center mb-8 space-y-1.5">
        <h1 className="font-inter text-3xl sm:text-[38px] font-bold text-[#111111] tracking-tight">
          Student Guide
        </h1>
        <p className="font-inter text-sm sm:text-[15px] text-[#71716D]">
          Everything you need to navigate CampusCode
        </p>
      </div>

      {!isBookOpen ? (
        /* ============================================================ */
        /* CLOSED STATE: The Realistic 3D Hardcover Book Object          */
        /* Matches screenshot 1-to-1                                    */
        /* ============================================================ */
        <div className="flex flex-col items-center justify-center py-4">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02, rotate: -1.2, y: -12 }}
            onClick={() => setIsBookOpen(true)}
            className="group relative cursor-pointer select-none"
            title="Click to Open Playbook"
          >
            {/* Soft ground drop shadow underneath */}
            <div className="absolute -bottom-8 left-8 right-8 h-12 rounded-[50%] bg-black/35 blur-2xl group-hover:scale-105 group-hover:opacity-75 transition-all duration-300" />

            {/* Exact Hardcover Book Graphic */}
            <div className="relative w-[300px] sm:w-[350px] md:w-[380px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-all duration-300">
              <img
                src="/assets/student-playbook-cover.png"
                alt="CampusCode Student Playbook - Click to Open"
                className="w-full h-auto block select-none rounded-[22px] sm:rounded-[26px]"
                draggable={false}
              />

              {/* Ambient specular highlight across the book surface */}
              <div className="pointer-events-none absolute inset-0 rounded-[22px] sm:rounded-[26px] bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      ) : (
        /* ============================================================ */
        /* OPEN STATE: The 3D Reading Book Interior                      */
        /* ============================================================ */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-2">
            <button
              type="button"
              onClick={() => setIsBookOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-xs hover:bg-gray-50 transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close Playbook</span>
            </button>

            <span className="font-mono text-xs text-[#7665FF] font-semibold bg-[#7665FF]/10 px-3 py-1 rounded-full border border-[#7665FF]/20">
              Interactive 3D Reader
            </span>
          </div>

          {/* Book Spread Container */}
          <div 
            className="relative flex flex-col md:flex-row min-h-[620px] w-full rounded-2xl bg-white shadow-xl ring-1 ring-gray-200 overflow-hidden"
            style={{ perspective: "1500px" }}
          >
            {/* Spine Center Divider */}
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-8 -ml-4 z-20 bg-gradient-to-r from-transparent via-gray-200/80 to-transparent shadow-[inset_0_0_15px_rgba(0,0,0,0.05)] border-x border-gray-200/50" />

            {/* Left Page: Chapters Navigation */}
            <div className="w-full md:w-1/3 bg-[#FAFAF8] p-6 sm:p-8 flex flex-col border-b md:border-b-0 md:border-r border-gray-200 relative z-10">
              <div className="flex items-center gap-2 mb-6 text-gray-900">
                <Bookmark className="h-5 w-5 text-[#7665FF]" />
                <h3 className="font-inter font-bold text-lg tracking-tight">Chapters</h3>
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
                          ? "bg-white shadow-sm ring-1 ring-gray-200 text-[#7665FF] font-semibold" 
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

            {/* Right Page: Content Area with 3D Page Turn Animation */}
            <div className="w-full md:w-2/3 bg-white relative overflow-hidden flex flex-col z-10">
              <div className="flex-1 relative h-full w-full min-h-[520px]">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={currentPageIndex}
                    custom={direction}
                    variants={pageFlipVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ transformOrigin: "left center" }} 
                    className="absolute inset-0 bg-white p-6 sm:p-8 md:p-10 overflow-y-auto"
                  >
                    <div className="inline-block rounded-full bg-[#7665FF]/10 border border-[#7665FF]/20 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#7665FF] mb-6">
                      Chapter {currentPageIndex + 1} · {activePage.title}
                    </div>
                    
                    {activePage.content}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom footer */}
              <div className="border-t border-gray-100 px-8 py-3.5 flex items-center justify-between text-xs text-gray-400 font-mono bg-white z-20">
                <span>CampusCode Official Student Guide</span>
                <span>Page {currentPageIndex + 1} of {guidePages.length}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
