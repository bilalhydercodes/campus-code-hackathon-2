import { Link } from 'react-router-dom';
import Hero3DVisual from './Hero3DVisual';
import MarqueeLogoScroller, { Logo } from './MarqueeLogoScroller';

const businessLogos: Logo[] = [
  {
    src: '/logos/google.svg',
    alt: 'Google',
    gradient: {
      from: 'rgba(66, 133, 244, 0.25)',
      via: 'rgba(234, 67, 53, 0.25)',
      to: 'rgba(251, 188, 5, 0.25)',
    },
  },
  {
    src: '/logos/microsoft.svg',
    alt: 'Microsoft',
    gradient: {
      from: 'rgba(242, 80, 34, 0.25)',
      via: 'rgba(127, 186, 0, 0.25)',
      to: 'rgba(0, 164, 239, 0.25)',
    },
  },
  {
    src: '/logos/github.svg',
    alt: 'GitHub',
    gradient: {
      from: 'rgba(36, 41, 46, 0.25)',
      via: 'rgba(110, 84, 148, 0.25)',
      to: 'rgba(118, 101, 255, 0.25)',
    },
  },
  {
    src: '/logos/stripe.svg',
    alt: 'Stripe',
    gradient: {
      from: 'rgba(99, 91, 255, 0.25)',
      via: 'rgba(122, 115, 255, 0.25)',
      to: 'rgba(0, 212, 255, 0.25)',
    },
  },
  {
    src: '/logos/vercel.svg',
    alt: 'Vercel',
    gradient: {
      from: 'rgba(0, 0, 0, 0.25)',
      via: 'rgba(118, 101, 255, 0.25)',
      to: 'rgba(168, 230, 46, 0.25)',
    },
  },
  {
    src: '/logos/linear.svg',
    alt: 'Linear',
    gradient: {
      from: 'rgba(94, 106, 210, 0.25)',
      via: 'rgba(118, 101, 255, 0.25)',
      to: 'rgba(168, 230, 46, 0.25)',
    },
  },
  {
    src: '/logos/figma.svg',
    alt: 'Figma',
    gradient: {
      from: 'rgba(242, 78, 30, 0.25)',
      via: 'rgba(162, 89, 255, 0.25)',
      to: 'rgba(26, 188, 254, 0.25)',
    },
  },
  {
    src: '/logos/supabase.svg',
    alt: 'Supabase',
    gradient: {
      from: 'rgba(62, 207, 142, 0.25)',
      via: 'rgba(36, 147, 97, 0.25)',
      to: 'rgba(168, 230, 46, 0.25)',
    },
  },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background Atmosphere Gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle 900px at 100% 0%, rgba(118, 101, 255, 0.32) 0%, rgba(118, 101, 255, 0.15) 35%, rgba(255, 255, 255, 0.8) 65%, transparent 100%),
            #F7F7F4
          `,
        }}
      />

      {/* S-curve Sweeping Diagonal Lime Wave beneath Hero */}
      <div className="pointer-events-none absolute -bottom-14 -left-16 h-[280px] w-[640px] -rotate-12 rounded-[100%] bg-gradient-to-tr from-[#A8E62E]/28 via-[#A8E62E]/12 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[25%] h-[160px] w-[420px] rounded-[100%] bg-[#A8E62E]/10 blur-2xl" />

      {/* Subtle Upper-Right Lime Stripes behind hero visual */}
      <div className="pointer-events-none absolute top-4 right-12 h-10 w-36 transform -skew-x-[14deg] rounded-md bg-[#A8E62E]/35 blur-[0.5px]" />
      <div className="pointer-events-none absolute -top-4 right-28 h-8 w-28 transform -skew-x-[14deg] rounded-md bg-[#A8E62E]/20 blur-[0.5px]" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 lg:px-11">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Left Column: Context, Headline, Description, CTAs */}
          <div className="flex flex-col items-start">
            {/* Contextual Text */}
            <div className="font-mono text-[11px] font-normal tracking-[0.04em] text-[#111111]/90">
              THE DIGITAL HOME FOR STUDENT INNOVATION
            </div>

            {/* Main Headline (All on one line on desktop with editorial serif italic Compete.) */}
            <h1 className="mt-6 mb-5 font-inter text-[clamp(40px,4.6vw,68px)] font-normal leading-[1.08] tracking-[-0.01em] text-[#111111] whitespace-normal lg:whitespace-nowrap">
              Build.{' '}
              <span className="font-serif italic font-normal text-[#7665FF] text-[1.06em] tracking-normal">
                Compete.
              </span>{' '}
              Ship.
            </h1>

            {/* Description */}
            <p className="max-w-[460px] font-inter text-[16px] md:text-[17px] font-normal leading-[1.5] text-[#111111]/85">
              A digital arena for students who don't just have ideas.
              <br />
              They build them.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-7">
              <Link
                to="/student"
                className="inline-flex h-[46px] items-center gap-2 rounded-[5px] bg-[#111111] px-6 font-inter text-[14px] font-medium text-white transition-all hover:bg-[#202020] hover:shadow-sm"
              >
                <span>Explore Hackathons</span>
                <span className="text-[#A8E62E] text-[15px] font-mono leading-none">→</span>
              </Link>

              <a
                href="#how"
                className="font-inter text-[14px] font-normal text-[#111111] transition-colors hover:text-[#7665FF]"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Right Column: 2D/3D Terminal Component */}
          <div className="relative flex items-center justify-center lg:justify-end w-full">
            <div className="w-full max-w-[575px] flex items-center justify-center">
              <Hero3DVisual />
            </div>
          </div>
        </div>

        {/* Logo Scroller: Trusted by Businesses */}
        <div className="mt-14 md:mt-20">
          <MarqueeLogoScroller
            title="Trusted by Businesses"
            description="Empowering the next generation of builders, innovators, and future founders across the globe."
            logos={businessLogos}
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}
