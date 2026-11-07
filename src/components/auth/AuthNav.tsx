import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

export interface AuthNavProps {
  mode?: "login" | "register";
}

export default function AuthNav({ mode = "login" }: AuthNavProps) {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("/login") || mode === "login";

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 bg-[#FBFBF9]/80 backdrop-blur-md border-b border-[#111111]/[0.05]">
      <div className="relative mx-auto flex max-w-[1320px] items-center justify-between">
        {/* Left: Official Brand Logo */}
        <Link
          to="/"
          className="flex items-center z-10 shrink-0 transition-transform hover:-translate-y-0.5"
          title="CampusCode Home"
        >
          <img
            src="/campuscode-logo.png"
            alt="CampusCode"
            className="h-8 md:h-9 w-auto object-contain object-left"
          />
        </Link>

        {/* Center: Mathematically Centered Navigation Pill (Matches Landing Page AppHeader) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-full border border-[#E5E5E0] bg-[#F2F2EE]/70 px-2 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-sm z-0">
          <Link
            to="/"
            className="rounded-full px-4 py-1.5 font-inter text-[13.5px] font-medium text-[#555550] hover:text-[#111111] transition-colors"
          >
            Home
          </Link>
          <a
            href="/#how"
            className="rounded-full px-4 py-1.5 font-inter text-[13.5px] font-medium text-[#555550] hover:text-[#111111] transition-colors"
          >
            How it works
          </a>
          <a
            href="/#hackathons"
            className="rounded-full px-4 py-1.5 font-inter text-[13.5px] font-medium text-[#555550] hover:text-[#111111] transition-colors"
          >
            Hackathons
          </a>
          <Link
            to="/student"
            className="rounded-full px-4 py-1.5 font-inter text-[13.5px] font-medium text-[#555550] hover:text-[#111111] transition-colors"
          >
            Community
          </Link>
        </nav>

        {/* Right: Quick Switcher Pill & Back Link */}
        <div className="flex items-center gap-3 z-10">
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.05em] text-[#71716D] hover:text-[#111111] transition-colors px-3 py-1.5 rounded-full hover:bg-[#111111]/[0.04]"
          >
            <ArrowLeft size={25} className="w-[25px] h-[25px]" />
            <span>Back to Home</span>
          </Link>

          {isLoginPage ? (
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full bg-[#111111] px-4 py-1.5 font-inter text-[12.5px] font-medium text-white transition-all hover:bg-[#252525] active:scale-[0.98] shadow-xs"
            >
              <span>Join Arena</span>
              <span className="ml-1 text-[#A8E62E] font-mono text-[13px]">→</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full border border-[#DEDED8] bg-white px-4 py-1.5 font-inter text-[12.5px] font-medium text-[#111111] transition-all hover:bg-[#F2F2EE] active:scale-[0.98] shadow-xs"
            >
              <span>Sign In</span>
              <span className="ml-1 text-[#7665FF] font-mono text-[13px]">→</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
