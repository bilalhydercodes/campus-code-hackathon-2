import * as React from "react";
import { cn } from "@/lib/utils";

export interface SlantedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  skewAngle?: number;
  glow?: boolean;
  children: React.ReactNode;
}

/**
 * CampusCode Signature Slanted Parallelogram Card
 * Features the brand's geometric -14deg skew with counter-skewed inner content
 * and subtle ambient luminous interior.
 */
export function SlantedCard({
  skewAngle = 14,
  glow = true,
  className,
  children,
  ...props
}: SlantedCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] md:rounded-[28px] border border-[#DEDED8]/90 bg-white/80 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(17,17,17,0.03)] backdrop-blur-sm",
        className
      )}
      style={{
        transform: `skewX(-${skewAngle}deg)`,
        ...props.style,
      }}
      {...props}
    >
      {/* Subtle interior gradient */}
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 65% 60% at 8% 12%, rgba(168, 230, 46, 0.075) 0%, transparent 60%),
              radial-gradient(ellipse 70% 65% at 92% 88%, rgba(118, 101, 255, 0.075) 0%, transparent 65%),
              #FFFFFF
            `,
          }}
          aria-hidden="true"
        />
      )}

      {/* Counter-skewed child content */}
      <div style={{ transform: `skewX(${skewAngle}deg)` }}>{children}</div>
    </div>
  );
}

export default SlantedCard;
