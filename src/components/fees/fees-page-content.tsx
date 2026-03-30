"use client";

import { useState } from "react";

import { FeesHeroSection } from "@/components/fees/fees-hero-section";
import { FeesIndividualPackagesSection } from "@/components/fees/fees-individual-packages-section";
import { FeesInvestmentSection } from "@/components/fees/fees-investment-section";
import { FeesTwoStudentOfferSection } from "@/components/fees/fees-two-student-offer-section";

type Duration = "30" | "60";

export function FeesPageContent() {
  const [duration, setDuration] = useState<Duration>("30");

  return (
    <>
      <FeesHeroSection />
      <FeesInvestmentSection duration={duration} onDurationChange={setDuration} />
      <FeesIndividualPackagesSection duration={duration} />
      <FeesTwoStudentOfferSection duration={duration} />
    </>
  );
}
