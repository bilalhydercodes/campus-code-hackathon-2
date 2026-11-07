import React from 'react';

export default function SectionMission() {
  return (
    <section id="community" className="relative w-full border-t border-b border-[#EAEAE5] bg-[#FBFBF9] overflow-hidden select-none">
      
      {/* Ambient Cosmic Brand Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse 45% 55% at 50% 45%,
              rgba(118, 101, 255, 0.055) 0%,
              rgba(118, 101, 255, 0.015) 45%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 35% 35% at 85% 50%,
              rgba(168, 230, 46, 0.045) 0%,
              transparent 65%
            )
          `,
        }}
        aria-hidden="true"
      />

      <style>{`
        @keyframes orbitClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounterClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-orbit-cw {
          animation: orbitClockwise 50s linear infinite;
        }
        .animate-orbit-ccw {
          animation: orbitCounterClockwise 40s linear infinite;
        }
        .outlined-text {
          color: transparent;
          -webkit-text-stroke: 2px #111111;
        }
        @media (max-width: 640px) {
          .outlined-text {
            -webkit-text-stroke: 1.5px #111111;
          }
        }
      `}</style>

      {/* Main Grid: Split Layout with Center Divider */}
      <div className="relative z-10 mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT COLUMN: FIND YOUR PEOPLE */}
        <div className="flex flex-col justify-center px-4 xs:px-6 sm:px-12 lg:px-20 py-12 sm:py-24 lg:py-32 border-b lg:border-b-0 lg:border-r border-[#EAEAE5]">
          {/* Subheading Tag */}
          <div className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.28em] text-[#888880] uppercase mb-4 sm:mb-8">
            THE NETWORK
          </div>

          {/* Massive Typography */}
          <h2 className="font-inter font-black text-[clamp(42px,7.5vw,112px)] leading-[0.88] tracking-[-0.04em] text-[#111111] break-words">
            FIND
            <br />
            YOUR
            <br />
            <span className="outlined-text inline-block">
              PEOPLE.
            </span>
          </h2>
        </div>

        {/* RIGHT COLUMN: RADAR ORBITAL SYSTEM & COMMUNITY STATEMENTS */}
        <div className="flex flex-col items-center justify-center px-4 xs:px-6 sm:px-12 py-12 sm:py-20 lg:py-28 relative">
          
          {/* Orbital Radar System */}
          <div className="relative w-[270px] h-[270px] xs:w-[310px] xs:h-[310px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
            
            {/* Outer Orbital Ring */}
            <div className="absolute inset-0 rounded-full border border-[#E5E5E0] animate-orbit-cw">
              {/* Outer Node 1: Left */}
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#7665FF] shadow-[0_0_10px_rgba(118,101,255,0.8)]"></div>
                  <div className="absolute w-5 h-5 rounded-full border border-[#7665FF]/40 animate-ping"></div>
                </div>
              </div>
              
              {/* Outer Node 2: Top Right */}
              <div className="absolute top-[18%] right-[12%] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7665FF] shadow-[0_0_8px_rgba(118,101,255,0.7)]"></div>
              </div>
            </div>

            {/* Middle Orbital Ring */}
            <div className="absolute inset-7 sm:inset-9 rounded-full border border-[#EBEBE6] animate-orbit-ccw">
              {/* Middle Node 1: Right */}
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7665FF] shadow-[0_0_8px_rgba(118,101,255,0.7)]"></div>
                  <div className="absolute w-4 h-4 rounded-full border border-[#7665FF]/30"></div>
                </div>
              </div>

              {/* Middle Node 2: Bottom Accent Node */}
              <div className="absolute bottom-[8%] left-[28%] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#82B91A] shadow-[0_0_8px_rgba(130,185,26,0.6)]"></div>
              </div>
            </div>

            {/* Inner Orbital Ring */}
            <div className="absolute inset-16 sm:inset-20 rounded-full border border-[#EAEAE5] animate-orbit-cw">
              {/* Inner Node: Top */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7665FF] shadow-[0_0_8px_rgba(118,101,255,0.7)]"></div>
              </div>

              {/* Inner Node: Bottom */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7665FF] shadow-[0_0_8px_rgba(118,101,255,0.7)]"></div>
              </div>
            </div>

            {/* Center CC Hub Badge */}
            <div className="relative z-20 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-lg border border-[#7665FF]/50 bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(118,101,255,0.14)] flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              <span className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-[#7665FF]">
                CC
              </span>
              <div className="absolute -inset-1 rounded-xl border border-[#7665FF]/20 pointer-events-none"></div>
            </div>

          </div>

          {/* Three Statements Underneath Radar */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center space-y-1.5 text-center font-inter text-[14px] sm:text-[15px] font-normal leading-relaxed text-[#666660]">
            <p className="hover:text-[#7665FF] transition-colors cursor-default">
              Build with developers.
            </p>
            <p className="hover:text-[#82B91A] transition-colors cursor-default">
              Think with designers.
            </p>
            <p className="hover:text-[#111111] transition-colors cursor-default">
              Compete with builders.
            </p>
          </div>

        </div>

      </div>

      {/* Architectural Grid Ruler at the Bottom */}
      <div className="relative w-full border-t border-[#EAEAE5] h-7 bg-[#F7F7F4]/60 overflow-hidden flex items-center">
        <div className="w-full flex justify-between px-4 sm:px-8">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="h-2 w-[1px] bg-[#DEDED8]/80"></div>
          ))}
        </div>
      </div>

    </section>
  );
}

export { SectionMission as SectionCommunity };
