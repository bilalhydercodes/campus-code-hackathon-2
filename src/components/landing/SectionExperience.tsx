export default function SectionExperience() {
  return (
    <section className="mx-auto max-w-[1400px] px-[5vw] py-16">
      <div className="font-mono text-[9px] tracking-[1.5px] text-[#858580]">
        02 — EXPERIENCE
      </div>
      <div className="mt-6 flex flex-col justify-between rounded border border-[#deded8] bg-white p-8 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-3 font-mono text-[9px] text-[#858580]">
            <span className="rounded bg-[#a8e62e]/20 px-2 py-0.5 font-bold text-[#82b91a]">00:30</span>
            <span>THE CAMPUSCODE EXPERIENCE</span>
          </div>
          <h3 className="mt-3 font-inter text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-2px] text-[#111111]">
            BUILD TOGETHER.
          </h3>
        </div>

        <div className="mt-6 flex items-center gap-4 md:mt-0">
          <button
            type="button"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-[18px] text-[#a8e62e] transition-transform hover:scale-105"
            title="Play film"
          >
            ▶
          </button>
          <div className="font-mono text-[9px] text-[#777777]">
            <div className="font-bold text-[#111111]">WATCH THE STORY</div>
            <div>PLAYS AS YOU SCROLL ↗</div>
          </div>
        </div>
      </div>
    </section>
  );
}
