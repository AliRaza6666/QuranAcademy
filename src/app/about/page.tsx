import type { Metadata } from "next";
import { HeroHeader } from "@/components/about/hero";

export const metadata: Metadata = {
  title: "About Us — Our Mission, Vision & Values",
  description:
    "Learn about Imam Ali Quran Academy — our journey bridging ancient Islamic traditions with modern digital learning. Founded on principles of sacred knowledge and accessibility.",
  openGraph: {
    title: "About Imam Ali Quran Academy",
    description: "Our mission to make authentic Quranic education accessible worldwide.",
    url: "https://imamaliquranacademy.com/about",
  },
};
import { MissionVision } from "@/components/about/mission-vision";
import { WhyChooseUs } from "@/components/about/why-choose-us";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#fdfae9]">
      <HeroHeader />
      <MissionVision />
      <WhyChooseUs />
    </div>
  );
}