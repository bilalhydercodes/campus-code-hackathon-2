import HeroOne from '../components/ui/hero-01';
import SectionHowItWorks from '../components/landing/SectionHowItWorks';
import SectionArenaChallenges from '../components/landing/SectionArenaChallenges';
import SectionMission from '../components/landing/SectionMission';
import SectionFinalCta from '../components/landing/SectionFinalCta';
import LandingFooter from '../components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#F7F7F4] text-[#111111] overflow-x-hidden">
      <HeroOne />
      <main className="overflow-x-hidden">
        <SectionHowItWorks />
        <SectionArenaChallenges />
        <SectionMission />
        <SectionFinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
