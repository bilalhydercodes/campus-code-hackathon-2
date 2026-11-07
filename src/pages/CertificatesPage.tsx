import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import CertificatesView from '../components/dashboard/CertificatesView';

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-[#07080e] text-white flex flex-col">
      {/* Top Glass Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#07080e]/80 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/student"
            className="inline-flex items-center gap-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight text-white">CampusCode</span>
            <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
              Zero-G Vault
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/digital-id"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital ID Card</span>
          </Link>
        </div>
      </header>

      {/* Main Certificates View */}
      <main className="flex-1">
        <CertificatesView />
      </main>
    </div>
  );
}
