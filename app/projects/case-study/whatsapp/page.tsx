"use client";

import ChallengesSection from "@/components/sections/whatsapp/ChallengesSection";
import InsightsSection from "@/components/sections/whatsapp/InsightsSection";
import ProblemDefinitionSection from "@/components/sections/whatsapp/ProblemDefinitionSection";
import TechConstraintsSection from "@/components/sections/whatsapp/TechConstraintsSection";
import ThanksSection from "@/components/sections/whatsapp/ThanksSection";
import UserJobOneSection from "@/components/sections/whatsapp/UserJobOneSection";
import UserJobTwoSection from "@/components/sections/whatsapp/UserJobTwoSection";
import ValidationSection from "@/components/sections/whatsapp/ValidationSection";
import WhatsAppHeroSection from "@/components/sections/whatsapp/WhatsAppHeroSection";

const WhatsAppCaseStudy = () => {
  return (
    <main className="flex min-h-screen justify-center bg-white text-gray-900" style={{ paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
      <WhatsAppHeroSection>
        <ValidationSection />
        <InsightsSection />
        <ProblemDefinitionSection />
        <UserJobOneSection />
        <UserJobTwoSection />
        <TechConstraintsSection />
        <ChallengesSection />
        <ThanksSection />
      </WhatsAppHeroSection>
    </main>
  );
};

export default WhatsAppCaseStudy;
