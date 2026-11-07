export default function SectionHowItWorks() {
  return (
    <section
      id="how"
      className="relative w-full overflow-hidden bg-[#F7F7F4] py-14 lg:py-24"
    >
      {/* Subtle Ambient Brand Glow Layer: Purple (left/lower 3-6%) & Lime (illustration 3-5%) */}
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

      {/* Blended Grid Background: Smoothly fades in and out at top and bottom edges */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17, 17, 17, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 17, 17, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '28.5px 28.5px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 14%, rgba(0, 0, 0, 1) 86%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 14%, rgba(0, 0, 0, 1) 86%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Desktop / Tablet Canvas: Aspect ratio 1024 / 576 (16:9) matching exact master reference */}
        <div className="relative hidden md:block w-full aspect-[1024/576] select-none">
          {/* Header at Top-Left */}
          <div className="absolute left-[6.35%] top-[8.68%] z-20 max-w-[38%]">
            <span className="font-inter text-[14px] lg:text-[17px] xl:text-[19px] font-bold tracking-[0.05em] text-[#7665FF] uppercase">
              FROM IDEA TO IMPACT
            </span>
            <h2 className="mt-2.5 font-inter text-[26px] lg:text-[34px] xl:text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#111111]">
              A simple path from
              <br />
              idea to a working product
            </h2>
          </div>

          {/* Left Callout Pill: IDEA -> PRODUCT */}
          <div
            className="absolute left-[7.42%] top-[54.86%] z-20 flex h-[9.38%] w-[21.29%] items-center justify-center rounded-[18px] bg-[#EEF9D1] px-4 py-2"
            style={{ boxSizing: 'border-box' }}
          >
            <span className="font-inter text-[16px] lg:text-[22px] xl:text-[26px] font-bold tracking-tight text-[#111111]">
              IDEA → PRODUCT
            </span>
          </div>

          {/* Background SVG Pathway, Portals, and Checkpoints */}
          <svg
            viewBox="0 0 1024 576"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full pointer-events-none z-0"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Top-Right Portal */}
            <g id="top-portal">
              <ellipse
                cx="908"
                cy="54"
                rx="48"
                ry="15.5"
                fill="#FAF9F7"
                stroke="#111111"
                strokeWidth="2.5"
              />
              <ellipse
                cx="908"
                cy="52"
                rx="38"
                ry="9"
                fill="#111111"
              />
            </g>

            {/* Bottom-Left Portal */}
            <g id="bottom-portal">
              <ellipse
                cx="344"
                cy="502"
                rx="50"
                ry="16"
                fill="#FAF9F7"
                stroke="#111111"
                strokeWidth="2.5"
              />
              <ellipse
                cx="344"
                cy="500"
                rx="40"
                ry="9.5"
                fill="#111111"
              />
            </g>

            {/* Continuous Black Curved Pathway */}
            {/* Segment 1: from Top Portal into Card 1 right edge */}
            <path
              d="M 930 58 C 930 95, 888 137, 828 137"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Segment 2: from Card 1 left edge through CP1, wide sweeping left U-turn into Card 2 left edge */}
            <path
              d="M 499 167 L 473.5 166"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 446.5 166 L 435 166 C 280 166, 190 185, 190 230 C 190 275, 360 304, 542 305"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Segment 3: from Card 2 right edge through CP3, loop around right into Card 3 right edge */}
            <path
              d="M 875 285 L 886.5 285"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 913.5 285 C 935 285, 940 310, 940 335 C 940 355, 855 379, 759 379"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Segment 4: from Card 3 left edge through CP2, lower loop through CP4 into Bottom Portal */}
            <path
              d="M 403 382 L 377.5 382"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 350.5 382 L 340 382 C 260 382, 219 408, 219 446 C 219 485, 245 496, 266.5 496"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 293.5 496 C 303 496, 308 502, 315 502"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Checkpoint 1 (Left of Card 1) */}
            <circle
              cx="460"
              cy="166"
              r="13.5"
              fill="#FAF9F7"
              stroke="#111111"
              strokeWidth="2.5"
            />
            {/* Motion Arc over CP1 */}
            <path
              d="M 454 156 C 456 150, 469 150, 472 156"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Checkpoint 2 (Left of Card 3) */}
            <circle
              cx="364"
              cy="382"
              r="13.5"
              fill="#FAF9F7"
              stroke="#111111"
              strokeWidth="2.5"
            />

            {/* Checkpoint 3 (Right edge of Card 2) */}
            <circle
              cx="900"
              cy="285"
              r="13.5"
              fill="#FAF9F7"
              stroke="#111111"
              strokeWidth="2.5"
            />
            {/* Motion Arc over CP3 */}
            <path
              d="M 894 275 C 896 269, 909 269, 912 275"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Checkpoint 4 (Near Bottom Portal) */}
            <circle
              cx="280"
              cy="496"
              r="13.5"
              fill="#FAF9F7"
              stroke="#111111"
              strokeWidth="2.5"
            />
            {/* Motion Arc over CP4 */}
            <path
              d="M 274 486 C 276 480, 289 480, 292 486"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Card 1: Discover (Upper-Right) */}
          <div
            className="absolute left-[48.73%] top-[17.71%] z-10 flex h-[16.67%] w-[32.13%] flex-col justify-center rounded-[24px] border-[2px] border-[#111111] bg-[#EFECFD] px-6 lg:px-8 shadow-none"
            style={{ boxSizing: 'border-box' }}
          >
            <h3 className="font-inter text-[20px] lg:text-[26px] xl:text-[30px] font-bold leading-tight text-[#111111]">
              Discover
            </h3>
            <p className="mt-1 font-inter text-[13px] lg:text-[16px] xl:text-[18px] font-normal leading-snug text-[#111111]">
              Find a challenge that excites you.
            </p>
          </div>

          {/* Card 2: Team up (Right-Middle) */}
          <div
            className="absolute left-[52.93%] top-[36.98%] z-10 flex h-[16.67%] w-[32.52%] flex-col justify-center rounded-[24px] border-[2px] border-[#111111] bg-[#ECFBD2] px-6 lg:px-8 shadow-none"
            style={{ boxSizing: 'border-box' }}
          >
            <h3 className="font-inter text-[20px] lg:text-[26px] xl:text-[30px] font-bold leading-tight text-[#111111]">
              Team up
            </h3>
            <p className="mt-1 font-inter text-[13px] lg:text-[16px] xl:text-[18px] font-normal leading-snug text-[#111111]">
              Find people who share your ambition.
            </p>
          </div>

          {/* Card 3: Build (Middle-Left) */}
          <div
            className="absolute left-[39.36%] top-[55.38%] z-10 flex h-[16.67%] w-[34.77%] flex-col justify-center rounded-[24px] border-[2px] border-[#111111] bg-[#EFECFD] px-6 lg:px-8 shadow-none"
            style={{ boxSizing: 'border-box' }}
          >
            <h3 className="font-inter text-[20px] lg:text-[26px] xl:text-[30px] font-bold leading-tight text-[#111111]">
              Build
            </h3>
            <p className="mt-1 font-inter text-[13px] lg:text-[16px] xl:text-[18px] font-normal leading-snug text-[#111111]">
              Turn your idea into a working product.
            </p>
          </div>

          {/* Card 4: Ship (Lower-Right) */}
          <div
            className="absolute left-[51.07%] top-[74.13%] z-10 flex h-[16.67%] w-[31.74%] flex-col justify-center rounded-[24px] border-[2px] border-[#111111] bg-[#ECFBD2] px-6 lg:px-8 shadow-none"
            style={{ boxSizing: 'border-box' }}
          >
            <h3 className="font-inter text-[20px] lg:text-[26px] xl:text-[30px] font-bold leading-tight text-[#111111]">
              Ship
            </h3>
            <p className="mt-1 font-inter text-[13px] lg:text-[16px] xl:text-[18px] font-normal leading-snug text-[#111111]">
              Submit your work and take it to the arena.
            </p>
          </div>
        </div>

        {/* Mobile Layout (< md) */}
        <div className="block md:hidden space-y-6">
          <div>
            <span className="font-inter text-[15px] font-bold tracking-wide text-[#7665FF] uppercase">
              FROM IDEA TO IMPACT
            </span>
            <h2 className="mt-2 font-inter text-[26px] font-bold leading-tight text-[#111111]">
              A simple path from
              <br />
              idea to a working product
            </h2>
          </div>

          <div className="inline-flex rounded-[14px] bg-[#EEF9D1] px-5 py-2.5">
            <span className="font-inter text-[17px] font-bold text-[#111111]">
              IDEA → PRODUCT
            </span>
          </div>

          <div className="space-y-4">
            <div className="rounded-[22px] border-[2px] border-[#111111] bg-[#EFECFD] p-5">
              <h3 className="font-inter text-[22px] font-bold text-[#111111]">Discover</h3>
              <p className="mt-1 font-inter text-[15px] text-[#111111]">
                Find a challenge that excites you.
              </p>
            </div>

            <div className="rounded-[22px] border-[2px] border-[#111111] bg-[#ECFBD2] p-5">
              <h3 className="font-inter text-[22px] font-bold text-[#111111]">Team up</h3>
              <p className="mt-1 font-inter text-[15px] text-[#111111]">
                Find people who share your ambition.
              </p>
            </div>

            <div className="rounded-[22px] border-[2px] border-[#111111] bg-[#EFECFD] p-5">
              <h3 className="font-inter text-[22px] font-bold text-[#111111]">Build</h3>
              <p className="mt-1 font-inter text-[15px] text-[#111111]">
                Turn your idea into a working product.
              </p>
            </div>

            <div className="rounded-[22px] border-[2px] border-[#111111] bg-[#ECFBD2] p-5">
              <h3 className="font-inter text-[22px] font-bold text-[#111111]">Ship</h3>
              <p className="mt-1 font-inter text-[15px] text-[#111111]">
                Submit your work and take it to the arena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
