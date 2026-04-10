import React from "react";
import Link from "next/link";

const feeSections = [
  {
    heading: "Weekday Classes (Monday - Friday)",
    plans: [
      {
        title: "1 Day / Week",
        subtitle: "4 Days / Month",
        duration: "30 Minutes / Day",
        price: "$30",
        badge: "Basic",
        buttonLabel: "Select Plan",
        currencyBubbles: [
          { label: "USD/CAD", value: "$30" },
          { label: "AUD", value: "$30" },
          { label: "UK", value: "£20" },
          { label: "Europe", value: "€20" },
        ],
      },
      {
        title: "2 Days / Week",
        subtitle: "8 Days / Month",
        duration: "30 Minutes / Day",
        price: "$35",
        badge: "Standard",
        buttonLabel: "Select Plan",
        currencyBubbles: [
          { label: "USD/CAD", value: "$35" },
          { label: "AUD", value: "$35" },
          { label: "UK", value: "£22" },
          { label: "Europe", value: "€22" },
        ],
      },
      {
        title: "3 Days / Week",
        subtitle: "12 Days / Month",
        duration: "30 Minutes / Day",
        price: "$40",
        badge: "Popular",
        buttonLabel: "Select Plan",
        currencyBubbles: [
          { label: "USD/CAD", value: "$40" },
          { label: "AUD", value: "$45" },
          { label: "UK", value: "£25" },
          { label: "Europe", value: "€25" },
        ],
      },
      {
        title: "4 Days / Week",
        subtitle: "16 Days / Month",
        duration: "30 Minutes / Day",
        price: "$45",
        badge: "Advanced",
        buttonLabel: "Select Plan",
        currencyBubbles: [
          { label: "USD/CAD", value: "$45" },
          { label: "AUD", value: "$50" },
          { label: "UK", value: "£28" },
          { label: "Europe", value: "€28" },
        ],
      },
      {
        title: "5 Days / Week",
        subtitle: "20 Days / Month",
        duration: "30 Minutes / Day",
        price: "$55",
        badge: "Best Value",
        buttonLabel: "Select Plan",
        currencyBubbles: [
          { label: "USD/CAD", value: "$55" },
          { label: "AUD", value: "$55" },
          { label: "UK", value: "£35" },
          { label: "Europe", value: "€35" },
        ],
      },
    ],
  },
  {
    heading: "Weekend Special (Saturday & Sunday)",
    plans: [
      {
        title: "Saturday Only",
        subtitle: "4 Days / Month",
        duration: "45 Minutes / Day",
        price: "$35",
        badge: "Weekend",
        buttonLabel: "Select Plan",
        currencyBubbles: [
          { label: "USD/CAD", value: "$35" },
          { label: "AUD", value: "$35" },
          { label: "UK", value: "£20" },
          { label: "Europe", value: "€20" },
        ],
      },
      {
        title: "Sunday Only",
        subtitle: "4 Days / Month",
        duration: "45 Minutes / Day",
        price: "$35",
        badge: "Weekend",
        buttonLabel: "Select Plan",
        currencyBubbles: [
          { label: "USD/CAD", value: "$35" },
          { label: "AUD", value: "$35" },
          { label: "UK", value: "£20" },
          { label: "Europe", value: "€20" },
        ],
      },
      {
        title: "Saturday + Sunday",
        subtitle: "8 Days / Month",
        duration: "45 Minutes / Day",
        price: "$60",
        badge: "Working Professionals",
        buttonLabel: "Select Plan",
        currencyBubbles: [
          { label: "USD/CAD", value: "$60" },
          { label: "AUD", value: "$60" },
          { label: "UK", value: "£40" },
          { label: "Europe", value: "€40" },
        ],
      },
    ],
  },
];

export function PricingGrid() {
  return (
    <section className="bg-[#fdfae9] py-20 px-5 md:py-28 md:px-10">
      <div className="mx-auto max-w-7xl space-y-20">
        {feeSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0B2C3D] sm:text-4xl">
                {section.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F7A8A]">
                Choose the schedule that fits your week with clear pricing and plan highlights.
              </p>
            </div>

            <div
              className={`grid grid-cols-1 gap-6 ${
                sectionIndex === 0 ? "md:grid-cols-3 lg:grid-cols-5" : "md:grid-cols-3 lg:grid-cols-3"
              }`}
            >
              {section.plans.map((plan, index) => (
                <article
                  key={index}
                  className="flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[2rem] border-2 border-[#B8965A] bg-white/95 shadow-[0_18px_40px_rgba(11,44,61,0.08)] transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="flex h-14 items-center justify-center rounded-t-[1.5rem] bg-[#f3ead8] text-center text-[#0B2C3D] font-semibold text-xl sm:text-2xl">
                    <h3 className="whitespace-nowrap px-4">
                      {plan.title}
                    </h3>
                  </div>
                  <div className="flex flex-col flex-grow gap-6 p-8 pb-10">
                    <div>
                      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#0B2C3D]/80">
                        {plan.subtitle}
                      </p>
                    </div>

                    <div className="inline-flex items-center rounded-full border border-[#E0D6BC] bg-[#F8F3E8] px-4 py-2 text-sm font-semibold text-[#0B2C3D]">
                      {plan.duration}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-semibold text-[#B8965A]">{plan.price}</span>
                        <span className="pb-1 text-sm font-medium text-[#5F7A8A]">/ month</span>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2">
                        {plan.currencyBubbles.map((currency, currencyIndex) => (
                          <span
                            key={currencyIndex}
                            className="inline-flex min-w-[90px] items-center justify-center rounded-full border border-[#E9E3D4] bg-[#F7F3EB] px-3 py-2 text-[11px] font-semibold text-[#0B2C3D]"
                          >
                            {currency.label}: {currency.value}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href="/enroll"
                        className="whitespace-nowrap flex h-12 items-center justify-center rounded-full bg-[#B48C4D] px-10 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#9b783f]"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
