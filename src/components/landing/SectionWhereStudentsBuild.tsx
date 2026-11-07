export default function SectionWhereStudentsBuild() {
  const details = [
    {
      title: 'Individual',
      desc: 'You build alone.',
      accentColor: 'bg-[#7665FF]',
    },
    {
      title: 'Frontend only',
      desc: 'No backend needed.',
      accentColor: 'bg-[#A8E62E]',
    },
    {
      title: 'Nov 6 – 7',
      desc: 'Round 1 Friday, Round 2 Saturday. Sunday free.',
      accentColor: 'bg-[#7665FF]',
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-[1320px] px-6 lg:px-11 py-18 md:py-24">
      {/* Editorial Two-Column Header */}
      <div className="grid grid-cols-1 md:grid-cols-[44%_1px_50%] items-center gap-8 md:gap-12">
        {/* Left: Headline with editorial serif italic 'build' */}
        <div>
          <h2 className="font-inter text-[clamp(38px,4.5vw,56px)] font-normal leading-[1.1] tracking-[-0.01em] text-[#111111]">
            Where
            <br />
            students{' '}
            <span className="font-serif italic font-normal text-[#7665FF] text-[1.06em]">
              build
            </span>
          </h2>
        </div>

        {/* Minimal Vertical Separator */}
        <div className="hidden md:block h-20 w-[1px] bg-[#DEDED8]" />

        {/* Right: Description */}
        <div className="flex items-center">
          <p className="max-w-[480px] font-inter text-[16px] md:text-[17px] font-normal leading-[1.6] text-[#111111]/85">
            CampusCode is an AI-powered hackathon platform — one place to run and
            join hackathons, instead of juggling many tools.
          </p>
        </div>
      </div>

      {/* Supporting Details: Three Editorial Content Blocks */}
      <div className="mt-14 md:mt-18 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
        {details.map((item) => (
          <div key={item.title} className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span
                className={`inline-block h-3.5 w-8 transform -skew-x-[16deg] rounded-[2px] ${item.accentColor}`}
                aria-hidden="true"
              />
              <h3 className="font-inter text-[16.5px] font-semibold text-[#111111]">
                {item.title}
              </h3>
            </div>
            <p className="mt-2.5 font-inter text-[13.5px] font-normal text-[#71716D] leading-normal">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
