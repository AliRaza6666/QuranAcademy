import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Courses — Tajweed, Tafseer, Islamic History & More",
  description:
    "Browse our Quran courses: Tajweed Mastery, Quranic Translation, Tafseer Studies, and Islamic History. Live classes with expert scholars at all levels.",
  openGraph: {
    title: "Quran Courses — Imam Ali Quran Academy",
    description: "Explore curated Quran learning pathways for beginners to advanced students.",
    url: "https://imamaliquranacademy.com/courses",
  },
};
import { CoursesHeroSection } from "@/components/courses/courses-hero-section";
import { SearchSection } from "@/components/courses/search-section";
import { CoursesGridSection } from "@/components/courses/courses-grid-section";
import { CoursesSpotlightSection } from "@/components/courses/courses-spotlight-section";


export  default function Courses() {
  return (
    <div className="pt-[100px]">
        <CoursesHeroSection />
        <SearchSection />
        <CoursesGridSection />
        <CoursesSpotlightSection />
    </div>
  );
}