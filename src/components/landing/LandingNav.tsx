import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How it works', href: '#how' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors relative">
      {/* Background with intensified top-right corner gradient of rgb(118 101 255) and white */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle 750px at 100% 0%, rgba(118, 101, 255, 0.32) 0%, rgba(118, 101, 255, 0.14) 35%, rgba(255, 255, 255, 0.8) 65%, transparent 100%),
            rgba(247, 247, 244, 0.72)
          `,
        }}
      />

      <div className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between px-6 lg:px-11">
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center transition-opacity hover:opacity-85">
          <img
            src="/campuscode-logo.png"
            alt="CampusCode"
            className="h-8 md:h-[34px] w-auto object-contain object-left"
          />
        </Link>

        {/* Center: Editorial Navigation Links */}
        <nav className="hidden items-center gap-9 lg:gap-11 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-[14px] font-normal text-[#111111]/85 transition-colors hover:text-[#111111]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/login"
            className="font-inter text-[14px] font-normal text-[#111111] transition-colors hover:text-[#7665FF]"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="inline-flex h-[38px] items-center gap-2 rounded-[5px] bg-[#111111] px-4 font-inter text-[13px] font-medium text-white transition-all hover:bg-[#202020] hover:shadow-sm"
          >
            <span>Join CampusCode</span>
            <span className="text-[14px] leading-none text-[#A8E62E]">→</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded border border-[#DEDED8] bg-white text-[#111111] md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="text-sm font-mono">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#DEDED8] bg-[#F7F7F4] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 font-inter text-[14px] text-[#111111]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-[#DEDED8]">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 font-inter text-[14px] text-[#111111]"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-[40px] items-center justify-center gap-2 rounded-[5px] bg-[#111111] font-inter text-[13px] font-medium text-white"
              >
                <span>Join CampusCode</span>
                <span className="text-[#A8E62E]">→</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
