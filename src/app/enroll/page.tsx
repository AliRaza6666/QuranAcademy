import type { Metadata } from "next";
import EnrollForm from "@/components/enroll/enroll-form";

export const metadata: Metadata = {
  title: "Enroll — Imam Ali Quran Academy",
  description:
    "Register for your free trial at Imam Ali Quran Academy. Choose your course, preferred schedule, and our team will confirm your slot within 24 hours.",
  openGraph: {
    title: "Enroll — Imam Ali Quran Academy",
    description: "Start your Quranic journey. Register for a free trial with certified scholars.",
    url: "https://imamaliquranacademy.com/enroll",
  },
};

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Decorative top strip */}
      <div className="h-1 w-full bg-linear-to-r from-secondary/30 via-secondary to-secondary/30" />
      <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-32 sm:px-6 md:px-10">
        <EnrollForm />
      </div>
    </div>
  );
}
