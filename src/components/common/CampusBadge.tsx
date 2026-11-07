import * as React from "react";
import { cn } from "@/lib/utils";

export interface CampusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "purple" | "lime" | "neutral" | "slanted" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
}

/**
 * CampusCode Status & Track Badge
 * Features DM Mono typography, micro uppercase tracking, and brand accents.
 */
export function CampusBadge({
  variant = "purple",
  size = "md",
  dot = false,
  className,
  children,
  ...props
}: CampusBadgeProps) {
  const variantStyles = {
    purple: "bg-[#7665FF]/10 text-[#7665FF] border border-[#7665FF]/20",
    lime: "bg-[#A8E62E]/15 text-[#5F8B08] border border-[#A8E62E]/30",
    neutral: "bg-[#111111]/[0.05] text-[#555550] border border-[#111111]/[0.08]",
    outline: "bg-transparent text-[#111111] border border-[#111111]/15",
    slanted: "transform -skew-x-[12deg] bg-[#EEF9D1] text-[#111111] border border-[#D7ECC0]",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10.5px]",
    md: "px-3 py-1 text-[11.5px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium tracking-[0.04em] uppercase rounded-full select-none",
        variantStyles[variant],
        sizeStyles[size],
        variant === "slanted" && "rounded-[4px]",
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
        </span>
      )}
      <span className={variant === "slanted" ? "transform skew-x-[12deg]" : undefined}>
        {children}
      </span>
    </span>
  );
}

export default CampusBadge;
