import Navbar from "../compoments/layout/Navbar";
import Hero from "../compoments/sections/Hero";
import TrustBar from "../compoments/sections/Trustbar";
import FeaturesGrid from "../compoments/sections/FeaturesGrid";
import EcosystemModules from "../compoments/sections/EcosystemModules";
import GlobalPresence from "../compoments/sections/GlobalPresence";
import OSModules from "../compoments/sections/OSModules";
import CTABanner from "../compoments/sections/CTABanner";
import FooterCTA from "../compoments/sections/FooterCTA";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats and Credibility TrustBar */}
      <TrustBar />

      {/* Large Featured Solutions (DonorSense, ClientAxis) */}
      <FeaturesGrid />

      {/* Ecosystem Modules (Trading, RiskEngine, Payroll, Consulting) */}
      <EcosystemModules />

      {/* Global Presence — 4 City Hub Card */}
      <GlobalPresence />

      {/* OS for Modern Operations — Analytics, Team Control, Smart Triggers */}
      <OSModules />

      {/* Gradient CTA Banner — Managing Clients Smarter */}
      <CTABanner />

      {/* Footer Links */}
      <FooterCTA />
    </div>
  );
}
