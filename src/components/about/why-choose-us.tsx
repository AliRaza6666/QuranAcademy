import React from "react";
import { GraduationCap, ShieldCheck, Globe, Star } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Qualified Scholars",
    description: "Learn from instructors with decades of mastery in traditional sacred knowledge.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Excellence",
    description: "Every curriculum is vetted for academic rigor and traditional authenticity.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join an inclusive sanctuary for students seeking spiritual enlightenment.",
  },
  {
    icon: Star,
    title: "Sacred Integrity",
    description: "A commitment to the highest standards of Islamic ethical and scholarly conduct.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#f7f4e4] py-20 px-5 md:py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0B2C3D] sm:text-4xl md:text-6xl">
            Why Choose <span className="italic text-[#B8965A]">Us</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#B8965A]/40" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 text-center transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12"
              style={{
                backgroundColor: "rgba(253, 250, 233, 0.45)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "0 20px 40px rgba(11, 44, 61, 0.05)",
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B8965A]/10">
                <feature.icon className="h-8 w-8 text-[#B8965A]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0B2C3D]">
                {feature.title}
              </h3>
              <p className="text-base text-[#5F7A8A]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
