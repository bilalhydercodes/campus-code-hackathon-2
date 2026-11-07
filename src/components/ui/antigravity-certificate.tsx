"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export interface AntigravityCertificateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date: string;
  /** Index used to stagger the floating animation so they don't all move identically */
  index?: number;
  glowColor?: string;
  badge?: string;
  badgeVariant?: "purple" | "lime" | "neutral";
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
  glowColor = "rgba(118, 101, 255, 0.25)", // Default CampusCode Purple Glow
  badge,
  badgeVariant = "lime",
  credentialId,
  skills,
  actionLabel = "View Credential",
  onAction,
  ...props
}: AntigravityCertificateProps) {
  // Staggered floating microgravity parameters
  const floatDuration = 4 + (index % 3) * 0.6; // 4s to 5.2s
  const floatDistance = -10 - (index % 4) * 2; // -10px to -16px
  const floatDelay = (index * 0.32) % 1.8;

  const badgeStyles = {
    purple: "bg-[#7665FF]/10 text-[#7665FF] border-[#7665FF]/20",
    lime: "bg-[#A8E62E]/20 text-[#4D7C0F] border-[#A8E62E]/40",
    neutral: "bg-[#111111]/[0.05] text-[#555550] border-[#111111]/[0.08]",
  };

  return (
    <motion.div
      // Antigravity Zero-G Floating Animation
      animate={{
        y: [0, floatDistance, 0],
        rotate: [0, index % 2 === 0 ? 0.5 : -0.5, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
      className="relative group h-full"
    >
      {/* Background Soft Ambient Aura that intensifies on hover */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-2xl opacity-20 blur-xl transition-all duration-500 group-hover:opacity-75 group-hover:blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Main Frosted Glassmorphic Card Container matching CampusCode UI */}
      <div
        className={cn(
          "relative flex h-full min-w-[280px] flex-col justify-between overflow-hidden rounded-2xl",
          "border border-[#E5E5DF] bg-white/90 p-6 backdrop-blur-xl",
          "shadow-[0_4px_20px_rgba(17,17,17,0.04)] transition-all duration-300 ease-out",
          "hover:border-[#7665FF]/40 hover:bg-white hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(118,101,255,0.12)]",
          className
        )}
        {...props}
      >
        <div>
          {/* Top Header: Icon & Date / Status */}
          <div className="flex items-start justify-between gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7F7F4] border border-[#E5E5DF] transition-transform duration-300 group-hover:scale-105"
              style={{
                boxShadow: `0 0 20px -3px ${glowColor}`,
              }}
            >
              {icon}
            </div>

            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[11px] font-mono tracking-wider text-[#71716D] font-medium bg-[#F7F7F4] border border-[#E5E5DF] px-2.5 py-0.5 rounded-full">
                {date}
              </span>
              {badge && (
                <span
                  className={cn(
                    "inline-flex items-center gap-1 text-[10.5px] font-mono font-medium tracking-wide border px-2 py-0.5 rounded-full select-none",
                    badgeStyles[badgeVariant]
                  )}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{badge}</span>
                </span>
              )}
            </div>
          </div>

          {/* Content: Issuer & Title */}
          <div className="mt-5 flex flex-col gap-1 text-left">
            <p className="text-[11px] font-mono font-semibold text-[#71716D] uppercase tracking-wider flex items-center gap-1.5">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: glowColor.replace(/[\d.]+\)$/g, "1)") }}
              />
              {issuer}
            </p>
            <h3 className="font-inter text-[18px] sm:text-[19px] font-semibold text-[#111111] tracking-tight leading-snug group-hover:text-[#7665FF] transition-colors duration-200">
              {title}
            </h3>
            {credentialId && (
              <p className="text-[11px] font-mono text-[#858580] tracking-tight mt-0.5">
                ID: {credentialId}
              </p>
            )}
          </div>

          {/* Skills tags */}
          {skills && skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F7F7F4] border border-[#E5E5DF] text-[#4F4F4B]"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Footer: High-contrast CampusCode Pill CTA */}
        {actionLabel && (
          <div className="mt-5 pt-3.5 border-t border-[#E5E5DF]/70 flex items-center justify-between">
            <button
              type="button"
              onClick={onAction}
              className="group/btn inline-flex items-center gap-2 text-[12.5px] font-inter font-medium text-[#111111] hover:text-[#7665FF] transition-colors cursor-pointer select-none"
            >
              <span>{actionLabel}</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111111]/[0.06] group-hover/btn:bg-[#7665FF] group-hover/btn:text-white transition-all">
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </div>
            </button>
            <span className="text-[10px] font-mono text-[#858580] uppercase tracking-wider">
              VERIFIED
            </span>
          </div>
        )}

        {/* Specular glare line across the top edge */}
        <div className="pointer-events-none absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#7665FF]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
export default AntigravityCertificate;
