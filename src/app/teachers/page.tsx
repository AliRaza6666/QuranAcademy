import type { Metadata } from "next";
import { TeachersHeroSection } from "@/components/teachers/teachers-hero-section";
import { TeachersGrid } from "@/components/teachers/teachers-grid";

export const metadata: Metadata = {
  title: "Our Teachers — Expert Scholars & Quranic Guides",
  description:
    "Meet the qualified scholars and certified instructors of Imam Ali Quran Academy. Experience traditional excellence in digital Quranic education.",
  openGraph: {
    title: "Qualified Scholars & Teachers",
    description: "Learn from the masters of Quranic sciences and Islamic heritage.",
    url: "https://imamaliquranacademy.com/teachers",
  },
};

export default function TeachersPage() {
  return (
    <div className="flex flex-col bg-[#fdfae9]">
      <TeachersHeroSection />
      <TeachersGrid />
    </div>
  );
}
