import * as React from "react";

export default function AuthFooter() {
  return (
    <footer className="relative z-10 w-full border-t border-[#111111]/[0.06] bg-[#F7F7F4]/90 backdrop-blur-sm py-6">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8 font-mono text-[11px] tracking-[0.03em] text-[#71716D]">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#111111]">CAMPUSCODE © 2026</span>
          <span className="hidden sm:inline text-[#DEDED8]">|</span>
          <span className="hidden sm:inline">NATIONAL STUDENT HACKATHON ARENA</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#82B91A] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#82B91A]" />
          </span>
          <span className="text-[#5F8B08] font-medium">ALL SYSTEMS OPERATIONAL</span>
          <span className="text-[#DEDED8]">·</span>
          <span>SOC2 & SHA-256 SECURED</span>
        </div>
      </div>
    </footer>
  );
}
