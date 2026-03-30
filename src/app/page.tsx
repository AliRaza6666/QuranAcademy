import type { Metadata } from "next";
import { FeaturedCoursesSection } from "@/components/home/featured-courses-section";

export const metadata: Metadata = {
  title: "Home | Online Quran Courses with Expert Scholars",
  description:
    "Imam Ali Quran Academy offers live online Quran classes with certified scholars. Tajweed, Tafseer, Islamic History and more for all ages.",
  openGraph: {
    title: "Imam Ali Quran Academy — Sacred Knowledge Online",
    description: "Live online Quran courses with certified Islamic scholars.",
    url: "https://imamaliquranacademy.com",
  },
};
import { HeroBanner } from "@/components/home/hero-banner";
import { TeachersPreviewSection } from "@/components/home/teachers-preview-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedCoursesSection />
      <TeachersPreviewSection />
      <WhyChooseUsSection />
    </>
  );
}