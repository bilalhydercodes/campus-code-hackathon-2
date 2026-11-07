import React from 'react';

interface DigitalIdViewProps {
  className?: string;
  fullscreen?: boolean;
}

export default function DigitalIdView({
  className = '',
  fullscreen = false,
}: DigitalIdViewProps) {
  return (
    <div
      className={`digital-id-screen relative flex w-full items-center justify-center overflow-hidden select-none ${
        fullscreen
          ? 'min-h-[calc(100vh-87px)] flex-1 p-6 sm:p-8 md:p-12'
          : 'min-h-[calc(100vh-160px)] rounded-2xl border border-[#111111]/[0.08] shadow-xs p-4 sm:p-6 md:p-8'
      } ${className}`}
      style={{
        backgroundImage: 'url("/assets/Minimal Beige Doodle Pattern Background for digital card screen.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <img
        src="/assets/digital-id-transparent.png"
        alt="CampusCode Digital ID Card"
        className="digital-id-artwork block max-h-[76vh] w-auto max-w-[min(92%,680px)] object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.01]"
        draggable={false}
      />
    </div>
  );
}
