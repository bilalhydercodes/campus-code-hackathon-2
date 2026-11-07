import * as React from "react";
import { cn } from "@/lib/utils";

export interface AmbientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "hero" | "standard" | "minimal" | "cta";
  showGrid?: boolean;
  children?: React.ReactNode;
}

/**
 * CampusCode Master Ambient Background Wrapper
 * Implements the approved diffused radial glow system:
 * - Base: #F7F7F4
 * - Purple glow: #7665FF (diffused, 4–15% opacity)
 * - Lime glow: #A8E62E (diffused, 4–17% opacity)
 * - Optional blended grid texture with feathered top/bottom edges
 */
export function AmbientBackground({
  variant = "standard",
  showGrid = false,
  className,
  children,
  ...props
}: AmbientBackgroundProps) {
  return (
    <div
      className={cn("relative w-full bg-[#F7F7F4] text-[#111111] overflow-hidden", className)}
      {...props}
    >
      {/* Hero Ambient Gradients */}
      {variant === "hero" && (
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 46% 46% at 8% 48%,
                rgba(118, 101, 255, 0.151) 0%,
                rgba(118, 101, 255, 0.063) 32%,
                transparent 65%
              ),
              radial-gradient(
                ellipse 42% 42% at 92% 10%,
                rgba(168, 230, 46, 0.176) 0%,
                rgba(168, 230, 46, 0.063) 30%,
                transparent 65%
              )
            `,
          }}
          aria-hidden="true"
        />
      )}

      {/* Standard Section Ambient Gradients */}
      {variant === "standard" && (
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 52% 52% at 5% 50%,
                rgba(168, 230, 46, 0.087) 0%,
                rgba(168, 230, 46, 0.025) 38%,
                transparent 70%
              ),
              radial-gradient(
                ellipse 48% 48% at 94% 50%,
                rgba(118, 101, 255, 0.075) 0%,
                rgba(118, 101, 255, 0.025) 35%,
                transparent 70%
              )
            `,
          }}
          aria-hidden="true"
        />
      )}

      {/* Minimal Section Ambient Gradients (Process / Forms) */}
      {variant === "minimal" && (
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 55% 50% at 10% 78%,
                rgba(118, 101, 255, 0.056) 0%,
                rgba(118, 101, 255, 0.018) 35%,
                transparent 65%
              ),
              radial-gradient(
                ellipse 48% 45% at 86% 45%,
                rgba(168, 230, 46, 0.051) 0%,
                rgba(168, 230, 46, 0.013) 30%,
                transparent 65%
              )
            `,
          }}
          aria-hidden="true"
        />
      )}

      {/* Final CTA Atmosphere */}
      {variant === "cta" && (
        <>
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-[#A8E62E]/[0.151] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-96 w-96 rounded-full bg-[#7665FF]/[0.151] blur-3xl" />
        </>
      )}

      {/* Optional Feathered Edge Grid Texture */}
      {showGrid && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(17, 17, 17, 0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(17, 17, 17, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: "28.5px 28.5px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 14%, rgba(0, 0, 0, 1) 86%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 14%, rgba(0, 0, 0, 1) 86%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Child Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default AmbientBackground;
