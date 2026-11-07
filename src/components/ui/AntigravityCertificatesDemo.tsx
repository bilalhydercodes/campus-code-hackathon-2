"use client";

import { AntigravityCertificate } from "@/components/ui/antigravity-certificate";
import { Award, Zap, Shield, Rocket } from "lucide-react";

const certificatesData = [
  {
    icon: <Award className="h-6 w-6 text-purple-400" />,
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "NOV 2026",
    glowColor: "rgba(168, 85, 247, 0.4)", // Purple
  },
  {
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    title: "Next.js Performance tuning",
    issuer: "Vercel Academy",
    date: "OCT 2026",
    glowColor: "rgba(34, 211, 238, 0.4)", // Cyan
  },
  {
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    title: "Web Security Fundamentals",
    issuer: "Coursera",
    date: "AUG 2026",
    glowColor: "rgba(52, 211, 153, 0.4)", // Emerald
  },
  {
    icon: <Rocket className="h-6 w-6 text-orange-400" />,
    title: "Zero to Orbit: Three.js",
    issuer: "ThreeJS Journey",
    date: "JUL 2026",
    glowColor: "rgba(251, 146, 60, 0.4)", // Orange
  },
];

export default function AntigravityCertificatesDemo() {
  return (
    // Note: Dark background is essential for the neon/antigravity effect to look good
    <div className="min-h-screen w-full bg-[#0a0a0f] p-8 md:p-20 overflow-hidden relative">
      {/* Decorative background stars/dust (optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-5xl">
          Zero-G{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Certificates
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certificatesData.map((cert, index) => (
            <AntigravityCertificate
              key={index}
              index={index}
              icon={cert.icon}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              glowColor={cert.glowColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
