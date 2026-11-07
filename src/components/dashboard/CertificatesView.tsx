"use client";

import * as React from "react";
import { useState } from "react";
import {
  Award,
  Zap,
  Shield,
  Rocket,
  Trophy,
  Flame,
  Cloud,
  Sparkles,
  Download,
  Share2,
  ExternalLink,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { AntigravityCertificate } from "@/components/ui/antigravity-certificate";

export interface CertificateItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date: string;
  glowColor: string;
  category: "Certificates" | "Achievements" | "Hackathons";
  badge?: string;
  credentialId?: string;
  skills?: string[];
  description?: string;
}

const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    icon: <Award className="h-6 w-6 text-purple-400" />,
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "NOV 2026",
    glowColor: "rgba(168, 85, 247, 0.45)", // Purple
    category: "Certificates",
    badge: "Verified Credential",
    credentialId: "CC-FM-9942",
    skills: ["React 19", "Server Components", "Custom Hooks"],
    description: "Mastery of advanced component architecture, state machines, and concurrency patterns.",
  },
  {
    id: "cert-2",
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    title: "Next.js Performance Tuning",
    issuer: "Vercel Academy",
    date: "OCT 2026",
    glowColor: "rgba(34, 211, 238, 0.45)", // Cyan
    category: "Certificates",
    badge: "Top 5% Score",
    credentialId: "VA-PERF-8104",
    skills: ["Edge Runtime", "Dynamic Caching", "ISR"],
    description: "Sub-50ms TTFB optimization, bundle splitting, and edge image CDN pipeline mastery.",
  },
  {
    id: "cert-3",
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    title: "Web Security Fundamentals",
    issuer: "Coursera",
    date: "AUG 2026",
    glowColor: "rgba(52, 211, 153, 0.45)", // Emerald
    category: "Certificates",
    badge: "Honors Pass",
    credentialId: "COUR-SEC-3391",
    skills: ["OWASP Top 10", "JWT Auth", "CSRF/XSS Defense"],
    description: "Full-spectrum web application penetration defense and zero-trust authentication protocols.",
  },
  {
    id: "cert-4",
    icon: <Rocket className="h-6 w-6 text-orange-400" />,
    title: "Zero to Orbit: Three.js",
    issuer: "ThreeJS Journey",
    date: "JUL 2026",
    glowColor: "rgba(251, 146, 60, 0.45)", // Orange
    category: "Certificates",
    badge: "Master Project",
    credentialId: "3JS-ORBIT-192",
    skills: ["WebGL", "GLSL Shaders", "Physics Simulation"],
    description: "GPU-accelerated interactive 3D web environments and procedural shader engineering.",
  },
  {
    id: "cert-5",
    icon: <Trophy className="h-6 w-6 text-rose-400" />,
    title: "ReBuild '26 Grand Finalist",
    issuer: "CampusCode Arena",
    date: "NOV 2026",
    glowColor: "rgba(244, 63, 94, 0.5)", // Rose
    category: "Hackathons",
    badge: "National Finalist",
    credentialId: "RB26-NAT-008",
    skills: ["Frontend Recreation", "Framer Motion", "Pixel Precision"],
    description: "Rebuilt the CampusCode platform with micro-interactions, mobile polish, and zero defects.",
  },
  {
    id: "cert-6",
    icon: <Flame className="h-6 w-6 text-amber-400" />,
    title: "Speed Algorithm Sprint Champion",
    issuer: "CampusCode Arena",
    date: "SEP 2026",
    glowColor: "rgba(245, 158, 11, 0.45)", // Amber
    category: "Achievements",
    badge: "1st Place Gold",
    credentialId: "CC-SPRINT-01",
    skills: ["Algorithms", "Data Structures", "Speed Execution"],
    description: "Solved 5 complex graph and dynamic programming challenges in under 42 minutes.",
  },
  {
    id: "cert-7",
    icon: <Cloud className="h-6 w-6 text-sky-400" />,
    title: "Fullstack Cloud Architect",
    issuer: "AWS & Vercel",
    date: "JUN 2026",
    glowColor: "rgba(56, 189, 248, 0.45)", // Sky
    category: "Certificates",
    badge: "Certified Specialist",
    credentialId: "AWS-FCA-5021",
    skills: ["Serverless", "Edge Lambdas", "PostgreSQL"],
    description: "Architected multi-region serverless infrastructure handling 10k requests/second.",
  },
  {
    id: "cert-8",
    icon: <Sparkles className="h-6 w-6 text-indigo-400" />,
    title: "Open Source Contributor 2026",
    issuer: "GitHub Campus",
    date: "MAY 2026",
    glowColor: "rgba(99, 102, 241, 0.45)", // Indigo
    category: "Achievements",
    badge: "50+ PRs Merged",
    credentialId: "GH-CAMPUS-889",
    skills: ["Open Source", "Code Review", "Community Lead"],
    description: "Recognized for impactful contributions to modern TypeScript and UI animation tooling.",
  },
];

type CategoryFilter = "All" | "Certificates" | "Achievements" | "Hackathons";

export default function CertificatesView() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredItems = CERTIFICATES_DATA.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#07080e] p-4 sm:p-6 lg:p-10 text-white selection:bg-purple-500/30">
      {/* Background Microgravity Grid & Ambient Nebula Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-cyan-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-600/10 blur-[130px]" />

      {/* Floating Space Dust Particles (Subtle Zero-G simulation) */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/6 h-1 w-1 rounded-full bg-white animate-pulse" />
        <div className="absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-cyan-400 blur-[0.5px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-purple-400 animate-pulse" />
        <div className="absolute top-2/3 right-1/6 h-2 w-2 rounded-full bg-emerald-400/80 blur-[1px] animate-ping duration-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 mb-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span>ZERO-GRAVITY CREDENTIAL VAULT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Certificates &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Achievements
              </span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Suspended in digital zero-gravity. Verified credentials, hackathon accolades, and technical milestones earned across the CampusCode arena.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-3 sm:px-5">
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">8</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Accreditations</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">100%</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Verified</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-purple-400 font-mono">TOP 1%</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Rank</div>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {(["All", "Certificates", "Achievements", "Hackathons"] as CategoryFilter[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === tab
                    ? "bg-white/15 text-white shadow-sm border border-white/15"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span>Showing {filteredItems.length} of {CERTIFICATES_DATA.length} records</span>
          </div>
        </div>

        {/* The Antigravity Suspended Floating Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 pt-4 pb-16">
          {filteredItems.map((cert, index) => (
            <AntigravityCertificate
              key={cert.id}
              index={index}
              icon={cert.icon}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              glowColor={cert.glowColor}
              badge={cert.badge}
              credentialId={cert.credentialId}
              skills={cert.skills}
              actionLabel="View Credential"
              onAction={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Credential Modal Details */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-[#0e101b] p-6 sm:p-8 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: `0 0 50px -10px ${selectedCert.glowColor}`,
            }}
          >
            <div className="flex items-start justify-between">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/15 shadow-inner"
                style={{
                  boxShadow: `0 0 25px -4px ${selectedCert.glowColor}`,
                }}
              >
                {selectedCert.icon}
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="mt-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified by {selectedCert.issuer}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{selectedCert.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            <div className="mt-6 space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-4 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Issuer</span>
                <span className="font-semibold text-white">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Issue Date</span>
                <span className="text-white">{selectedCert.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Credential ID</span>
                <span className="text-purple-400 font-bold">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Verification</span>
                <span className="text-emerald-400">Cryptographically Signed</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => alert(`Certificate ${selectedCert.credentialId} PDF downloading...`)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#111111] font-semibold text-xs py-3 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Shareable link copied to clipboard!");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white font-medium text-xs px-4 py-3 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
