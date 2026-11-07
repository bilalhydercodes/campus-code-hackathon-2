import * as React from "react";
import { CampusBadge } from "../common/CampusBadge";
import { Code, Trophy, Rocket, ShieldCheck, Users, Medal } from "phosphor-react";

export interface AuthIntroProps {
  mode?: "login" | "register";
  title?: string;
  italicWord?: string;
  description?: string;
}

export default function AuthIntro({
  mode = "login",
  title = mode === "login" ? "Enter the" : "Join the",
  italicWord = "arena.",
  description = mode === "login"
    ? "Sign in to access your hackathon workspaces, submit production code, coordinate with your squad, and track real-time arena leaderboards."
    : "Create your verified student builder identity. Enter national hackathons, form multidisciplinary squads, and ship to industry partners.",
}: AuthIntroProps) {
  const isLogin = mode === "login";

  const featureTracks = isLogin
    ? [
        {
          num: "01",
          tag: "WORKSPACE",
          title: "Build & Iterate",
          desc: "Cloud dev environments, starter kits & automated CI/CD checks.",
          icon: Code,
          highlight: true,
        },
        {
          num: "02",
          tag: "CHALLENGES",
          title: "Timed Sprints",
          desc: "National challenges with real-time judging and milestones.",
          icon: Trophy,
          highlight: false,
        },
        {
          num: "03",
          tag: "IMPACT",
          title: "Ship to World",
          desc: "₹2 Crore prize pool, investor grants & enterprise deployment.",
          icon: Rocket,
          highlight: false,
        },
      ]
    : [
        {
          num: "01",
          tag: "IDENTITY",
          title: "Student Profile",
          desc: "Verified university builder ID, skills badge & portfolio showcase.",
          icon: Users,
          highlight: true,
        },
        {
          num: "02",
          tag: "MATCHMAKING",
          title: "Form Squads",
          desc: "Connect with frontend, AI, and design builders across campuses.",
          icon: Medal,
          highlight: false,
        },
        {
          num: "03",
          tag: "ARENA ACCESS",
          title: "Enter Tracks",
          desc: "Direct eligibility for Rajasthan Royals, Asian Paints & Delhi Gov tracks.",
          icon: ShieldCheck,
          highlight: false,
        },
      ];

  return (
    <div className="flex flex-col justify-center py-4 lg:py-8 select-none">
      {/* Top Meta & Status Pill */}
      <div className="flex flex-wrap items-center gap-3">
        <CampusBadge variant="lime" dot>
          {isLogin ? "AUTHENTICATION READY" : "REGISTRATION OPEN"}
        </CampusBadge>
        <span className="font-mono text-[11px] tracking-[0.05em] text-[#71716D] uppercase">
          CAMPUSCODE / {isLogin ? "01 SIGN-IN" : "02 ONBOARDING"}
        </span>
      </div>

      {/* Main Editorial Headline */}
      <h1 className="mt-5 font-inter text-[42px] sm:text-[54px] lg:text-[64px] font-normal leading-[1.06] tracking-[-0.03em] text-[#111111]">
        {title}{" "}
        <span className="font-serif italic font-normal tracking-normal text-[#111111]">
          {italicWord}
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-[540px] font-inter text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#555550]">
        {description}
      </p>

      {/* 3 Feature Trio Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[620px]">
        {featureTracks.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.num}
              className={`group relative flex flex-col justify-between rounded-xl border p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] ${
                item.highlight
                  ? "border-[#7665FF]/30 bg-white/95 shadow-[0_4px_20px_rgba(118,101,255,0.08)]"
                  : "border-[#DEDED8] bg-white/80 hover:border-[#111111]/30 hover:bg-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.08em] font-semibold text-[#7665FF]">
                    {item.num} / {item.tag}
                  </span>
                  <Icon size={25} className="w-[25px] h-[25px] text-[#71716D] group-hover:text-[#111111] transition-colors" />
                </div>
                <h3 className="mt-2.5 font-inter text-[14px] font-bold text-[#111111] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11.5px] leading-[1.5] text-[#71716D]">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#EAEAE5] flex items-center justify-between font-mono text-[9px] text-[#888880]">
                <span>STATUS: VERIFIED</span>
                <span className="text-[#5F8B08] font-bold">● ACTIVE</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Proof Strip */}
      <div className="mt-8 max-w-[620px] rounded-xl border border-[#DEDED8]/80 bg-[#FFFFFF]/60 p-4 backdrop-blur-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
          <div>
            <span className="block font-mono text-[10px] tracking-wider uppercase text-[#71716D]">
              OFFICIAL ARENA BACKING
            </span>
            <span className="font-inter text-[13px] font-semibold text-[#111111]">
              Rajasthan Royals · Asian Paints · Delhi Gov
            </span>
          </div>
          <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-[#DEDED8] pt-2 sm:pt-0 sm:pl-4">
            <div>
              <span className="block font-mono text-[10px] tracking-wider uppercase text-[#71716D]">
                PRIZE POOL
              </span>
              <span className="font-inter text-[13px] font-bold text-[#7665FF]">
                ₹2,00,00,000+
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* System Footnote */}
      <div className="mt-6 flex max-w-[620px] items-center justify-between border-t border-[#DEDED8] pt-4 font-mono text-[10px] text-[#71716D]">
        <span className="flex items-center gap-1.5 text-[#5F8B08]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#82B91A]" />
          ARENA GATEWAY OPERATIONAL
        </span>
        <span className="tracking-wider">NODE-ID: CC-ARENA-2026</span>
      </div>
    </div>
  );
}
