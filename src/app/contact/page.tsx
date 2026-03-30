import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Have questions about enrollment or curriculum? Contact Imam Ali Quran Academy. Reach us by phone, email, or submit an inquiry form.",
  openGraph: {
    title: "Contact Us — Imam Ali Quran Academy",
    description: "Get in touch with our team for enrollment and curriculum inquiries.",
    url: "https://imamaliquranacademy.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#fdfae9]">
      <ContactHero />
      <ContactContent />
    </div>
  );
}
