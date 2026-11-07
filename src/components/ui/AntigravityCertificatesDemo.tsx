"use client";

import { AntigravityCertificate } from "@/components/ui/antigravity-certificate";
import { Award, Zap, Shield, Rocket } from "lucide-react";
import { CampusBadge } from "@/components/common/CampusBadge";

const certificatesData = [
  {
    icon: <Award className="h-6 w-6 text-[#7665FF]" />,
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "NOV 2026",
    glowColor: "rgba(118, 101, 255, 0.28)", // CampusCode Purple
    badge: "Verified",
    badgeVariant: "lime" as const,
  },
  {
    icon: <Zap className="h-6 w-6 text-[#A8E62E]" />,
    title: "Next.js Performance Tuning",
    issuer: "Vercel Academy",
    date: "OCT 2026",
    glowColor: "rgba(168, 230, 46, 0.32)", // CampusCode Lime
    badge: "Top 5%",
    badgeVariant: "purple" as const,
  },
  {
    icon: <Shield className="h-6 w-6 text-[#111111]" />,
    title: "Web Security Fundamentals",
    issuer: "Coursera",
    date: "AUG 2026",
    glowColor: "rgba(17, 17, 17, 0.22)", // Ink Black
    badge: "Honors",
    badgeVariant: "neutral" as const,
  },
  {
    icon: <Rocket className="h-6 w-6 text-[#F59E0B]" />,
    title: "Zero to Orbit: Three.js",
    issuer: "ThreeJS Journey",
    date: "JUL 2026",
    glowColor: "rgba(245, 158, 11, 0.28)", // Warm Amber
    badge: "Mastery",
    badgeVariant: "lime" as const,
  },
];

export default function AntigravityCertificatesDemo() {
  return (
    <div className="min-h-screen w-full bg-[#F7F7F4] text-[#111111] p-6 sm:p-12 md:p-16 overflow-hidden relative">
      {/* Diffused ambient background glows */}
      <div
        className="pointer-events-none absolute -top-12 -left-12 h-96 w-96 rounded-full bg-[#7665FF]/[0.08] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -right-20 h-96 w-96 rounded-full bg-[#A8E62E]/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-10 space-y-2">
          <CampusBadge variant="purple" dot className="mx-auto">
            ANTIGRAVITY CREDENTIALS
          </CampusBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111111]">
            Certificates &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7665FF] to-[#82B91A]">
              Achievements
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#71716D] max-w-lg mx-auto">
            Suspended in digital zero-gravity. Verified credentials matching the CampusCode studio design language.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificatesData.map((cert, index) => (
            <AntigravityCertificate
              key={index}
              index={index}
              icon={cert.icon}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              glowColor={cert.glowColor}
              badge={cert.badge}
              badgeVariant={cert.badgeVariant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
