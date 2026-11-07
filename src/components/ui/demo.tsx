import HeroOne from "@/components/ui/hero-01";
import { Footerdemo } from "@/components/ui/footer-section";
import AuthSectionOne from "@/components/ui/auth-section-1";

export default function Default() {
  return <AuthSectionOne />;
}

export function HeroOneDemo() {
  return <HeroOne />;
}

export function Footer() {
  return (
    <div className="block">
      <Footerdemo />
    </div>
  );
}
