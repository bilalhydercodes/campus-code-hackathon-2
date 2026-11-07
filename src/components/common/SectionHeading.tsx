import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  /** Uppercase micro-label above headline (monospace) */
  tag?: string;
  /** Primary bold headline */
  title: string;
  /** Optional italic serif highlight word */
  italicWord?: string;
  /** Optional prefix before italic word */
  italicPrefix?: string;
  /** Optional suffix after italic word */
  italicSuffix?: string;
  /** Explanatory description text */
  description?: string;
  /** Text alignment */
  align?: "left" | "center";
  /** Optional right-aligned CTA or action element */
  action?: React.ReactNode;
  className?: string;
}

/**
 * CampusCode Standard Section Heading
 * Follows the approved typography hierarchy:
 * 1. Monospace uppercase label in brand Purple (#7665FF)
 * 2. Heavy Inter headline with crisp black text (#111111)
 * 3. Editorial Newsreader serif italic accent word
 * 4. Soft lead description (#555550)
 */
export function SectionHeading({
  tag,
  title,
  italicWord,
  italicPrefix = "",
  italicSuffix = "",
  description,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 md:pb-10",
        isCenter && "md:flex-col md:items-center text-center",
        className
      )}
    >
      <div className={cn("max-w-[780px]", isCenter && "mx-auto")}>
        {tag && (
          <div className="font-mono text-[11px] font-normal tracking-[0.05em] text-[#7665FF] uppercase mb-2.5">
            {tag}
          </div>
        )}
        <h2 className="font-inter text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.08] tracking-tight text-[#111111]">
          {title}{" "}
          {italicWord && (
            <span>
              {italicPrefix}
              <span className="font-serif italic font-normal text-[#111111]">
                {italicWord}
              </span>
              {italicSuffix}
            </span>
          )}
        </h2>
        {description && (
          <p className="mt-3.5 font-inter text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#555550]">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export default SectionHeading;
