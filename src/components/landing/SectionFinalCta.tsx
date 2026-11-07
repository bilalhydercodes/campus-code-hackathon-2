import { Link } from 'react-router-dom';

export default function SectionFinalCta() {
  return (
    <section className="relative mx-auto max-w-[1320px] px-6 lg:px-11 py-16 md:py-24">
      {/* Background Atmosphere outside Final CTA: Lime (bottom-left) & Purple (bottom-right) */}
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-[#A8E62E]/[0.151] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-96 w-96 rounded-full bg-[#7665FF]/[0.151] blur-3xl" />

      {/* Slanted Parallelogram Container (unskewed on mobile to avoid viewport overflow) */}
      <div className="relative overflow-hidden transform sm:-skew-x-[14deg] rounded-[22px] sm:rounded-[28px] border border-[#DEDED8]/90 bg-white/80 p-6 xs:p-8 sm:p-14 md:p-20 shadow-[0_20px_50px_rgba(17,17,17,0.03)] backdrop-blur-sm text-center">
        {/* Subtle blended gradient inside panel: Lime (upper-left 7.5%), Off-white center, Purple (lower-right 7.5%) */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 65% 60% at 8% 12%, rgba(168, 230, 46, 0.075) 0%, transparent 60%),
              radial-gradient(ellipse 70% 65% at 92% 88%, rgba(118, 101, 255, 0.075) 0%, transparent 65%),
              #FFFFFF
            `,
          }}
        />

        {/* Content (Un-skewed on sm+) */}
        <div className="transform sm:skew-x-[14deg] mx-auto max-w-[700px]">
          <h2 className="font-inter text-[clamp(28px,4.8vw,56px)] font-normal leading-[1.12] tracking-[-0.01em] text-[#111111]">
            Your next project
            <br />
            starts here.
          </h2>

          <div className="mt-6 sm:mt-8 flex justify-center">
            <Link
              to="/register"
              className="inline-flex h-[44px] items-center gap-2.5 rounded-[5px] bg-[#111111] px-6 font-inter text-[13.5px] font-medium text-white transition-all hover:bg-[#202020] hover:shadow-sm active:scale-95"
            >
              <span>Join CampusCode</span>
              <span className="text-[#A8E62E] text-[15px] font-mono leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
