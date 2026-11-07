import * as React from "react";

export interface BrandList {
  image: string;
  lightimg?: string;
  name: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
  speed?: string;
}

export default function BrandSlider({ brandList, speed = "35s" }: BrandSliderProps) {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Keyframe animation */}
      <style>{`
        @keyframes brandScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Fade masks */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div
          className="flex w-max items-center gap-14 py-3 hover:[animation-play-state:paused]"
          style={{
            animation: `brandScroll ${speed} linear infinite`,
          }}
        >
          {[...brandList, ...brandList].map((brand, idx) => (
            <div
              key={idx}
              className="flex h-10 shrink-0 items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-7 w-auto object-contain max-w-[130px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
