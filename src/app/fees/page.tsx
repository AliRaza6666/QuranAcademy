import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { FeesHeroSection } from "@/components/fees/fees-hero-section";
import { PricingGrid } from "@/components/fees/pricing-grid";

export const metadata: Metadata = {
  title: "Fee Structure — Affordable Quran Course Pricing",
  description:
    "Transparent and flexible tuition options for everyone. View our Quran Academy fee structure and enroll in our affordable online courses.",
  openGraph: {
    title: "Pricing & Course Investment",
    description: "View our tuition structure and choose the best path for your learning journey.",
    url: "https://imamaliquranacademy.com/fees",
  },
};

export default function FeesPage() {
  return (
    <div className="flex flex-col bg-[#fdfae9]">
      <FeesHeroSection />
      <PricingGrid />
    </div>
  );
}