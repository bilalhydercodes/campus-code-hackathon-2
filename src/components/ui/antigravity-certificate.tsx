"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export interface AntigravityCertificateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date: string;
  /** Index used to stagger the floating animation so they don't all move identically */
  index?: number;
  glowColor?: string;
  badge?: string;
  credentialId?: string;
  skills?: string[];
  actionLabel?: string;
  onAction?: () => void;
}

export function AntigravityCertificate({
  className,
  icon,
  title,
  issuer,
  date,
  index = 0,
  glowColor = "rgba(139, 92, 246, 0.4)", // Default Purple Glow
  badge,
  credentialId,
  skills,
  actionLabel,
  onAction,
  ...props
}: AntigravityCertificateProps) {
  // Stagger parameters for organic, asynchronous zero-g float
  const floatDuration = 4 + (index % 3) * 0.7; // Variable duration between 4s and 5.4s
  const floatDistance = -10 - (index % 4) * 2; // Float height between -10px and -16px
  const floatDelay = (index * 0.35) % 2;

  return (
    <motion.div
      // The Antigravity Floating Animation - simulating true microgravity suspension
      animate={{
        y: [0, floatDistance, 0],
        rotate: [0, index % 2 === 0 ? 0.6 : -0.6, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
      className="relative group h-full"
    >
      {/* Background Glow Effect that intensifies and expands on hover */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-35 blur-xl transition-all duration-700 group-hover:opacity-85 group-hover:blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 75%)`,
        }}
      />

      {/* Main Glassmorphic Card Container */}
      <div
        className={cn(
          "relative flex h-full min-w-[280px] flex-col justify-between overflow-hidden rounded-2xl",
          "border border-white/10 bg-[#0c0d14]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
          "transition-all duration-500 ease-out",
          "hover:border-white/30 hover:bg-[#12131d]/85 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]",
          className
        )}
        {...props}
      >
        <div>
          {/* Top Header: Glowing Icon & Date/Badge */}
          <div className="flex items-start justify-between gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-white/25"
              style={{
                boxShadow: `0 0 25px -4px ${glowColor}`,
              }}
            >
              {icon}
            </div>

            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[11px] font-mono tracking-wider text-slate-400/90 font-medium bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-full backdrop-blur-sm">
                {date}
              </span>
              {badge && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  {badge}
                </span>
              )}
            </div>
          </div>

          {/* Content: Issuer & Title */}
          <div className="mt-5 flex flex-col gap-1.5 text-left">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: glowColor.replace(/[\d.]+\)$/g, "1)") }}
              />
              {issuer}
            </p>
            <h3 className="text-lg font-bold text-white tracking-wide leading-snug group-hover:text-white transition-colors duration-200">
              {title}
            </h3>
            {credentialId && (
              <p className="text-[11px] font-mono text-slate-500 tracking-tight mt-0.5">
                ID: {credentialId}
              </p>
            )}
          </div>

          {/* Optional Skills tags */}
          {skills && skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Action */}
        {actionLabel && (
          <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
            <button
              onClick={onAction}
              className="inline-flex items-center gap-1.5 hover:underline focus:outline-none text-[12px] font-medium"
            >
              <span>{actionLabel}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>
            <span className="text-[10px] font-mono text-slate-600">VERIFIED</span>
          </div>
        )}

        {/* Decorative subtle glare line across the top edge */}
        <div className="pointer-events-none absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Radial ambient spot inside card on hover */}
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
          style={{ backgroundColor: glowColor }}
        />
      </div>
    </motion.div>
  );
}
