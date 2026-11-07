import * as React from "react";
import { cn } from "@/lib/utils";

export type TiltedGridImage = {
  src: string;
  alt?: string;
};

export type TiltedGridHeroProps = {
  images: TiltedGridImage[];
  speed?: number;
  tileHeight?: number;
  aspectRatio?: number;
  gap?: number;
  axis?: number;
  curve?: number;
  fade?: number;
  children?: React.ReactNode;
  className?: string;
};

export function TiltedGridHero({
  images,
  speed = 6.72,
  tileHeight = 58,
  aspectRatio = 2 / 3,
  gap = 6,
  fade = 10,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & TiltedGridHeroProps) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const animationName = `seamless-marquee-${id}`;

  // Build a seamless set of posters so there is never vacant space on any screen width.
  // Each half has 2 full sets of images, ensuring the track extends far beyond the viewport.
  const singleCycle = [...images, ...images];
  const totalItems = [...singleCycle, ...singleCycle];

  // Duration for one complete cycle (-50% translation)
  // speed represents seconds per tile; 4% faster than original 7s baseline
  const cycleCount = singleCycle.length;
  const duration = cycleCount * (speed * 0.96);

  const maskStyle = `linear-gradient(to right, transparent, #000 ${fade}%, #000 ${100 - fade}%, transparent)`;

  return (
    <div
      className={cn("group relative w-full overflow-hidden select-none py-2", className)}
      style={{
        maskImage: maskStyle,
        WebkitMaskImage: maskStyle,
        ...props.style,
      }}
      {...props}
    >
      <style>{`
        @keyframes ${animationName} {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .${animationName}-track {
          display: flex;
          width: max-content;
          animation: ${animationName} ${duration.toFixed(2)}s linear infinite;
          will-change: transform;
        }
        .${animationName}-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .${animationName}-track {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className={`${animationName}-track items-center gap-5 sm:gap-6 md:gap-7`}>
        {totalItems.map((img, idx) => (
          <div
            key={idx}
            className="relative shrink-0 overflow-hidden rounded-[18px] md:rounded-[22px] border border-[#111111]/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
            style={{
              height: `clamp(260px, ${tileHeight}vh, 390px)`,
              aspectRatio: `${aspectRatio}`,
            }}
          >
            <img
              src={img.src}
              alt={img.alt || `Challenge slide ${idx + 1}`}
              loading="eager"
              draggable={false}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {children}
    </div>
  );
}

export default TiltedGridHero;
