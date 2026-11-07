import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import CertificatesView from '../components/dashboard/CertificatesView';
import { AmbientBackground } from '../components/common/AmbientBackground';

export default function CertificatesPage() {
  return (
    <AmbientBackground variant="standard" showGrid={false} className="min-h-screen flex flex-col bg-[#F7F7F4] text-[#111111]">
      {/* Top Glass Navigation Bar matching CampusCode UI */}
      <header className="sticky top-0 z-40 w-full border-b border-[#E5E5DF] bg-white/80 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/student"
            className="inline-flex items-center gap-2 rounded-full bg-[#111111]/[0.05] hover:bg-[#111111]/[0.09] border border-[#111111]/[0.08] px-3.5 py-1.5 text-xs font-medium text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </Link>
          <div className="h-4 w-px bg-[#E5E5DF]" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-[#111111]">CampusCode</span>
            <span className="text-[11px] font-mono text-[#7665FF] bg-[#7665FF]/10 border border-[#7665FF]/20 px-2 py-0.5 rounded-full">
              Zero-G Vault
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/digital-id"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#71716D] hover:text-[#111111] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7665FF]" />
            <span>Digital ID Card</span>
          </Link>
        </div>
      </header>

      {/* Main Certificates View */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <CertificatesView />
      </main>
    </AmbientBackground>
  );
}
