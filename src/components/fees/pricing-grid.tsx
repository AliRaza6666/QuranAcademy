import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Foundation",
    price: "$45",
    description: "Ideal for beginners starting their sacred journey.",
    features: [
      "2 Classes Per Week",
      "One-on-One Sessions",
      "Basic Tajweed Rules",
      "Digital Study Materials",
      "Progress Reports",
    ],
    popular: false,
  },
  {
    name: "Scholarly",
    price: "$75",
    description: "Our most popular immersion for dedicated students.",
    features: [
      "4 Classes Per Week",
      "Priority Scheduling",
      "Advanced Tajweed & Tafseer",
      "Direct Scholar Access",
      "Certified Completion",
      "Interactive Workshops",
    ],
    popular: true,
  },
  {
    name: "Ijazah Path",
    price: "$120",
    description: "Advanced certification for mastery of recitation.",
    features: [
      "Daily Focused Classes",
      "Specialized Ijazah Prep",
      "Direct Sanad Connection",
      "Unlimited Review Sessions",
      "Priority Scholar Mentorship",
    ],
    popular: false,
  },
];

export function PricingGrid() {
  return (
    <section className="bg-[#fdfae9] py-20 px-5 md:py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12 ${
                plan.popular 
                  ? "border-2 border-[#B8965A] shadow-[0_20px_50px_rgba(184,150,90,0.15)] bg-white/40" 
                  : "border border-[#0B2C3D]/10 bg-white/20"
              }`}
              style={{ 
                borderRadius: "2.5rem",
                animationDelay: `${index * 150}ms`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8965A] px-6 py-1 rounded-full">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-[#0B2C3D]">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#0B2C3D]">{plan.price}</span>
                  <span className="text-[#5F7A8A]">/month</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#5F7A8A]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B8965A]/20">
                        <Check className="h-2.5 w-2.5 text-[#B8965A]" />
                      </div>
                      <span className="text-sm font-medium text-[#0B2C3D]/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/enroll"
                className={`flex h-12 items-center justify-center rounded-full text-sm font-bold tracking-[0.15em] transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#B8965A] text-white shadow-lg hover:bg-[#a68549] hover:shadow-xl"
                    : "border-2 border-[#B8965A] text-[#B8965A] hover:bg-[#B8965A] hover:text-white"
                }`}
              >
                ENROLL NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
