"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Share2, Download, CheckCircle2 } from "lucide-react";

export interface AntigravityCertificateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date: string;
  verified?: boolean;
  isActive?: boolean;
  index?: number;
  onShare?: (e: React.MouseEvent) => void;
  onDownload?: (e: React.MouseEvent) => void;
}

export function AntigravityCertificate({
  className,
  icon,
  title,
  issuer,
  date,
  verified = false,
  isActive = false,
  index = 0,
  onShare,
  onDownload,
  ...props
}: AntigravityCertificateProps) {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 4.2 + (index % 2) * 0.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.35,
      }}
      className="relative group h-full"
    >
      <div
        className={cn(
          "relative flex h-full min-w-[280px] flex-col justify-between rounded-[24px] bg-white p-7 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1",
          isActive
            ? "border-2 border-[#7665FF]/60 ring-4 ring-[#7665FF]/[0.06]"
            : "border border-[#E5E5DF] hover:border-[#7665FF]/40",
          className
        )}
        {...props}
      >
        <div>
          {/* Top Row: Icon & Verified Badge */}
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F4F0] text-[#111111] transition-transform duration-300 group-hover:scale-105">
              {icon}
            </div>

            {verified && (
              <span className="rounded-lg bg-[#F0EDFF] px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-[#7665FF] uppercase select-none">
                VERIFIED
              </span>
            )}
          </div>

          {/* Title & Issuer */}
          <div className="mt-6 space-y-1 text-left">
            <h3 className="font-inter text-[20px] font-bold text-[#111111] tracking-tight leading-snug group-hover:text-[#7665FF] transition-colors">
              {title}
            </h3>
            <p className="font-inter text-[14px] text-[#71716D]">
              {issuer}
            </p>
          </div>
        </div>

        {/* Bottom Row: Issue Date & Actions */}
        <div className="mt-8 flex items-center justify-between pt-2">
          <span className="font-inter text-[13px] text-[#71716D]">
            {date}
          </span>

          <div className="flex items-center gap-1.5 text-[#111111]">
            <button
              type="button"
              onClick={onShare}
              title="Share Credential"
              className="rounded-full p-2 hover:bg-[#F4F4F0] hover:text-[#7665FF] transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" strokeWidth={2} />
            </button>

            <button
              type="button"
              onClick={onDownload}
              title="Download PDF"
              className="rounded-full p-2 hover:bg-[#F4F4F0] hover:text-[#7665FF] transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AntigravityCertificate;
