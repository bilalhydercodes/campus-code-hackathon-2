"use client";

import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, Share2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LanyardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onOpenPlaybook?: () => void;
  fullscreen?: boolean;
}

export function LanyardCard({
  className,
  onOpenPlaybook,
  fullscreen = false,
  ...props
}: LanyardCardProps) {
  const [copied, setCopied] = useState(false);

  // 3D Hover Parallax Physics setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/lanyard-digital-id.jpg";
    link.download = "CampusCode-Digital-Pass.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-start overflow-hidden bg-[#F8F9FA] selection:bg-[#B8FF33] select-none",
        fullscreen ? "min-h-screen py-6 px-4" : "min-h-[720px] rounded-2xl py-6 px-4 border border-[#111111]/[0.08] shadow-xs",
        className
      )}
      {...props}
    >
      {/* Top action header */}
      <div className="w-full max-w-4xl px-4 sm:px-6 mb-4 flex flex-wrap items-center justify-between gap-4 z-20">
        <div>
          <h1 className="font-inter text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Digital Card
          </h1>
          <p className="font-inter text-xs sm:text-sm font-medium text-zinc-500">
            Your all-access CampusCode digital pass
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-2 border-[2px] border-black bg-white px-3.5 sm:px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-zinc-50 rounded-lg cursor-pointer"
          >
            <Download className="h-4 w-4" />
            <span>DOWNLOAD ID</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 border-[2px] border-black bg-white px-3.5 sm:px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-zinc-50 rounded-lg cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4" />
                <span>SHARE PASS</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ==================================================== */}
      {/* THE PENDULUM SWING CONTAINER                          */}
      {/* Simulates natural lanyard suspension & sway          */}
      {/* ==================================================== */}
      <motion.div
        animate={{ rotate: [-1.8, 1.8, -1.8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", perspective: "1500px" }}
        className="relative flex flex-col items-center z-10 w-full max-w-[420px] pt-1"
      >
        {/* ==================================================== */}
        {/* 3D INTERACTIVE & DRAGGABLE CARD CONTAINER            */}
        {/* Tilt on mousemove, draggable with spring snap-back    */}
        {/* ==================================================== */}
        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.25}
          whileDrag={{ scale: 1.04, cursor: "grabbing" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="group relative cursor-grab select-none transition-shadow"
          onClick={onOpenPlaybook}
        >
          {/* Exact high-resolution Neo-Brutalist Lanyard Badge Artwork */}
          <div className="relative w-[300px] sm:w-[350px] md:w-[380px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_25px_45px_rgba(0,0,0,0.32)]">
            <img
              src="/assets/lanyard-digital-id.jpg"
              alt="CampusCode Lanyard Digital ID Badge - Google Builder"
              className="w-full h-auto block select-none pointer-events-none rounded-b-[24px]"
              draggable={false}
              loading="eager"
              fetchPriority="high"
            />

            {/* Specular Glare Overlay on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-b-[24px] bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom instructional micro-tip */}
      <p className="mt-4 text-[11px] font-mono font-medium text-zinc-400 tracking-wider uppercase text-center">
        • Interactive 3D Physics: Hover to tilt, drag to pull lanyard •
      </p>
    </div>
  );
}

export default LanyardCard;
