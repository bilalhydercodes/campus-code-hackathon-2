import React, { useState } from "react";
import {
  Award,
  Zap,
  Shield,
  Rocket,
  Trophy,
  Flame,
  Layers,
  Sparkles,
  Download,
  Share2,
  CheckCircle2,
  X,
  FileBadge,
} from "lucide-react";
import { AntigravityCertificate } from "../ui/antigravity-certificate";
import { CampusBadge, PrimaryButton } from "../common";

export interface CertificateItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date: string;
  glowColor: string;
  category: "Certificates" | "Achievements" | "Hackathons";
  badge?: string;
  badgeVariant?: "purple" | "lime" | "neutral";
  credentialId?: string;
  skills?: string[];
  description?: string;
}

const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    icon: <Award className="h-6 w-6 text-[#7665FF]" />,
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "NOV 2026",
    glowColor: "rgba(118, 101, 255, 0.28)", // CampusCode Purple
    category: "Certificates",
    badge: "Verified Credential",
    badgeVariant: "lime",
    credentialId: "CC-FM-9942",
    skills: ["React 19", "Server Components", "Custom Hooks"],
    description: "Mastery of modern React architecture, compound components, concurrent rendering, and performance hooks.",
  },
  {
    id: "cert-2",
    icon: <Zap className="h-6 w-6 text-[#A8E62E]" />,
    title: "Next.js Performance Tuning",
    issuer: "Vercel Academy",
    date: "OCT 2026",
    glowColor: "rgba(168, 230, 46, 0.32)", // CampusCode Lime
    category: "Certificates",
    badge: "Top 5% Score",
    badgeVariant: "purple",
    credentialId: "VA-PERF-8104",
    skills: ["Edge Runtime", "Dynamic Caching", "Bundle Optimization"],
    description: "Sub-50ms TTFB optimization, dynamic edge caching pipelines, and server-side streaming optimization.",
  },
  {
    id: "cert-3",
    icon: <Shield className="h-6 w-6 text-[#111111]" />,
    title: "Web Security & Zero-Trust Auth",
    issuer: "Coursera",
    date: "AUG 2026",
    glowColor: "rgba(17, 17, 17, 0.22)", // Ink Black
    category: "Certificates",
    badge: "Honors Pass",
    badgeVariant: "neutral",
    credentialId: "COUR-SEC-3391",
    skills: ["OWASP Top 10", "JWT Auth", "CSRF Defense"],
    description: "Comprehensive web application penetration defense, stateless JWT token rotation, and zero-trust auth headers.",
  },
  {
    id: "cert-4",
    icon: <Rocket className="h-6 w-6 text-[#F59E0B]" />,
    title: "Zero to Orbit: Three.js & WebGL",
    issuer: "ThreeJS Journey",
    date: "JUL 2026",
    glowColor: "rgba(245, 158, 11, 0.28)", // Warm Amber
    category: "Certificates",
    badge: "Master Project",
    badgeVariant: "lime",
    credentialId: "3JS-ORBIT-192",
    skills: ["Three.js", "GLSL Shaders", "Physics Engine"],
    description: "GPU-accelerated interactive 3D web environments, procedural GLSL shaders, and interactive camera controllers.",
  },
  {
    id: "cert-5",
    icon: <Trophy className="h-6 w-6 text-[#7665FF]" />,
    title: "ReBuild '26 Grand Finalist",
    issuer: "CampusCode Arena",
    date: "NOV 2026",
    glowColor: "rgba(118, 101, 255, 0.35)", // CampusCode Purple
    category: "Hackathons",
    badge: "National Finalist",
    badgeVariant: "purple",
    credentialId: "RB26-NAT-008",
    skills: ["Frontend Recreation", "Framer Motion", "Pixel Precision"],
    description: "Rebuilt the CampusCode platform with micro-interactions, mobile polish, and zero defects.",
  },
  {
    id: "cert-6",
    icon: <Flame className="h-6 w-6 text-[#E11D48]" />,
    title: "Speed Algorithm Sprint Champion",
    issuer: "CampusCode Arena",
    date: "SEP 2026",
    glowColor: "rgba(225, 29, 72, 0.28)", // Rose
    category: "Achievements",
    badge: "1st Place Gold",
    badgeVariant: "lime",
    credentialId: "CC-SPRINT-01",
    skills: ["Algorithms", "Data Structures", "Speed Execution"],
    description: "Solved 5 complex graph and dynamic programming challenges in under 42 minutes.",
  },
  {
    id: "cert-7",
    icon: <Layers className="h-6 w-6 text-[#7665FF]" />,
    title: "Fullstack Architecture Specialist",
    issuer: "Vercel & AWS",
    date: "JUN 2026",
    glowColor: "rgba(118, 101, 255, 0.25)", // Purple
    category: "Certificates",
    badge: "Certified",
    badgeVariant: "neutral",
    credentialId: "AWS-FCA-5021",
    skills: ["Serverless", "Edge Lambdas", "PostgreSQL"],
    description: "Architected multi-region serverless infrastructure handling 10k requests/second with zero downtime.",
  },
  {
    id: "cert-8",
    icon: <Sparkles className="h-6 w-6 text-[#A8E62E]" />,
    title: "Open Source Contributor 2026",
    issuer: "GitHub Campus",
    date: "MAY 2026",
    glowColor: "rgba(168, 230, 46, 0.3)", // Lime
    category: "Achievements",
    badge: "50+ PRs Merged",
    badgeVariant: "lime",
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
    <div className="relative mx-auto w-full max-w-[1240px] space-y-8 select-none">
      {/* Soft Diffused Atmospheric Background Glows matching CampusCode Master Design */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 h-96 w-96 rounded-full bg-[#7665FF]/[0.08] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -right-20 h-96 w-96 rounded-full bg-[#A8E62E]/[0.08] blur-3xl"
        aria-hidden="true"
      />

      {/* Hero Banner matching OverviewView / ReBuild '26 style */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white border border-[#E5E5DF] p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)] overflow-hidden">
        {/* Subtle decorative background shapes */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7665FF]/[0.06] blur-2xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-40 -bottom-10 h-48 w-48 rounded-full bg-[#A8E62E]/[0.07] blur-2xl"
          aria-hidden="true"
        />

        <div className="relative z-10 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <CampusBadge variant="purple" dot>
              ZERO-G CREDENTIAL VAULT
            </CampusBadge>
            <CampusBadge variant="lime">
              100% VERIFIED
            </CampusBadge>
          </div>

          <h2 className="font-inter text-[28px] sm:text-[34px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
            Certificates & Achievements
          </h2>
          <p className="max-w-[720px] font-inter text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#71716D]">
            Suspended in digital zero-gravity. Verified credentials, hackathon accolades, and technical milestones earned across the CampusCode arena.
          </p>
        </div>

        {/* Live KPI Stat Cards */}
        <div className="relative z-10 flex items-center gap-3 sm:gap-4 bg-[#F7F7F4] border border-[#E5E5DF] rounded-2xl p-3 sm:px-5 shrink-0">
          <div className="text-center px-2">
            <div className="font-mono text-2xl font-bold text-[#111111]">
              {CERTIFICATES_DATA.length}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#71716D]">
              Badges
            </div>
          </div>
          <div className="h-8 w-px bg-[#E5E5DF]" />
          <div className="text-center px-2">
            <div className="font-mono text-2xl font-bold text-[#4D7C0F]">
              100%
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#71716D]">
              Verified
            </div>
          </div>
          <div className="h-8 w-px bg-[#E5E5DF]" />
          <div className="text-center px-2">
            <div className="font-mono text-2xl font-bold text-[#7665FF]">
              TOP 1%
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#71716D]">
              Rank
            </div>
          </div>
        </div>
      </div>

      {/* Filter Category Pills Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 p-1 rounded-xl bg-white border border-[#E5E5DF] shadow-2xs">
          {(["All", "Certificates", "Achievements", "Hackathons"] as CategoryFilter[]).map((tab) => {
            const isActive = activeCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 rounded-lg font-inter text-[13px] font-medium transition-all cursor-pointer select-none ${
                  isActive
                    ? "bg-[#111111] text-white shadow-xs"
                    : "text-[#71716D] hover:text-[#111111] hover:bg-[#F2F2EE]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="font-mono text-[12px] text-[#71716D] flex items-center gap-2">
          <FileBadge className="w-4 h-4 text-[#7665FF]" />
          <span>Showing {filteredItems.length} of {CERTIFICATES_DATA.length} verified credentials</span>
        </div>
      </div>

      {/* The Antigravity Floating Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 pb-12">
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
            badgeVariant={cert.badgeVariant}
            credentialId={cert.credentialId}
            skills={cert.skills}
            actionLabel="View Credential"
            onAction={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      {/* Credential Verification Modal in CampusCode Style */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/50 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-[#E5E5DF] bg-white p-6 sm:p-8 text-[#111111] shadow-[0_24px_50px_rgba(17,17,17,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F7F4] border border-[#E5E5DF]"
                style={{
                  boxShadow: `0 0 25px -4px ${selectedCert.glowColor}`,
                }}
              >
                {selectedCert.icon}
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 text-[#71716D] hover:text-[#111111] hover:bg-[#F2F2EE] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#A8E62E]/20 border border-[#A8E62E]/40 text-[11px] text-[#4D7C0F] font-mono mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified by {selectedCert.issuer}</span>
              </div>
              <h3 className="font-inter text-2xl font-bold tracking-tight text-[#111111]">
                {selectedCert.title}
              </h3>
              <p className="mt-2 text-sm text-[#4F4F4B] leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            {/* Credential Metadata Box */}
            <div className="mt-6 space-y-2.5 rounded-xl bg-[#F7F7F4] border border-[#E5E5DF] p-4 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-[#71716D]">Issuer</span>
                <span className="font-semibold text-[#111111]">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71716D]">Issue Date</span>
                <span className="text-[#111111]">{selectedCert.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71716D]">Credential ID</span>
                <span className="text-[#7665FF] font-bold">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71716D]">Verification</span>
                <span className="text-[#4D7C0F] font-medium">Cryptographically Signed</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex items-center gap-3">
              <PrimaryButton
                variant="primary"
                size="md"
                icon="arrow-pill"
                className="flex-1"
                onClick={() => alert(`Certificate ${selectedCert.credentialId} PDF downloading...`)}
              >
                Download PDF
              </PrimaryButton>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Shareable credential link copied to clipboard!");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E5DF] bg-[#F7F7F4] hover:bg-[#EAEAE5] px-5 py-2.5 text-[13px] font-medium text-[#111111] transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#71716D]" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
