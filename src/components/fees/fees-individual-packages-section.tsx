import Link from "next/link";

type Duration = "30" | "60";

type IndividualPackage = {
  tier: string;
  daysPerWeek: string;
  usd: string;
  lessonsPerMonth: string;
  aud: string;
  uk: string;
  europe: string;
  featured?: boolean;
  badge?: string;
  cta: string;
};

const INDIVIDUAL_PACKAGES: Record<Duration, IndividualPackage[]> = {
  "30": [
    {
      tier: "FOUNDATION",
      daysPerWeek: "1 Day / Week",
      usd: "USD $30",
      lessonsPerMonth: "4 Lessons Per Month",
      aud: "AUD $30",
      uk: "UK £20",
      europe: "EUROPE €20",
      cta: "Enroll Now",
    },
    {
      tier: "STEADY",
      daysPerWeek: "2 Days / Week",
      usd: "USD $35",
      lessonsPerMonth: "8 Lessons Per Month",
      aud: "AUD $35",
      uk: "UK £22",
      europe: "EUROPE €22",
      cta: "Enroll Now",
    },
    {
      tier: "DEDICATED",
      daysPerWeek: "3 Days / Week",
      usd: "USD $40",
      lessonsPerMonth: "12 Lessons Per Month",
      aud: "AUD $45",
      uk: "UK £25",
      europe: "EUROPE €25",
      cta: "Enroll Now",
    },
    {
      tier: "IMMERSIVE",
      daysPerWeek: "5 Days / Week",
      usd: "USD $55",
      lessonsPerMonth: "20 Lessons Per Month",
      aud: "AUD $55",
      uk: "UK £35",
      europe: "EUROPE €35",
      featured: true,
      badge: "Best Value",
      cta: "Admission",
    },
  ],
  "60": [
    {
      tier: "FOUNDATION",
      daysPerWeek: "1 Day / Week",
      usd: "USD $55",
      lessonsPerMonth: "4 Lessons Per Month",
      aud: "AUD $55",
      uk: "UK £35",
      europe: "EUROPE €35",
      cta: "Enroll Now",
    },
    {
      tier: "STEADY",
      daysPerWeek: "2 Days / Week",
      usd: "USD $70",
      lessonsPerMonth: "8 Lessons Per Month",
      aud: "AUD $70",
      uk: "UK £45",
      europe: "EUROPE €45",
      cta: "Enroll Now",
    },
    {
      tier: "DEDICATED",
      daysPerWeek: "3 Days / Week",
      usd: "USD $90",
      lessonsPerMonth: "12 Lessons Per Month",
      aud: "AUD $90",
      uk: "UK £58",
      europe: "EUROPE €58",
      cta: "Enroll Now",
    },
    {
      tier: "IMMERSIVE",
      daysPerWeek: "5 Days / Week",
      usd: "USD $120",
      lessonsPerMonth: "20 Lessons Per Month",
      aud: "AUD $120",
      uk: "UK £75",
      europe: "EUROPE €75",
      featured: true,
      badge: "Best Value",
      cta: "Admission",
    },
  ],
};

function applyDoubleMinusTen(priceText: string): string {
  return priceText.replace(/(\d+(?:\.\d+)?)/, (value) => {
    const num = Number(value);
    const updated = num * 2 - 10;
    return String(updated);
  });
}

function getPackagesByDuration(duration: Duration): IndividualPackage[] {
  if (duration === "30") {
    return INDIVIDUAL_PACKAGES["30"];
  }

  return INDIVIDUAL_PACKAGES["30"].map((item) => ({
    ...item,
    usd: applyDoubleMinusTen(item.usd),
    aud: applyDoubleMinusTen(item.aud),
    uk: applyDoubleMinusTen(item.uk),
    europe: applyDoubleMinusTen(item.europe),
  }));
}

type FeesIndividualPackagesSectionProps = {
  duration: Duration;
};

export function FeesIndividualPackagesSection({ duration }: FeesIndividualPackagesSectionProps) {
  const packages = getPackagesByDuration(duration);

  return (
    <section className="mx-auto mb-16 w-full max-w-7xl px-4 sm:mb-20 sm:px-6 md:mb-24 md:px-8">
      <div className="mb-8 flex items-center gap-3 sm:mb-10 sm:gap-4 md:mb-12">
        <div className="h-px flex-1 bg-secondary/30" />
        <h2 className="px-2 text-center font-heading text-2xl text-primary italic sm:px-3 sm:text-3xl">
          Individual Student Packages
        </h2>
        <div className="h-px flex-1 bg-secondary/30" />
      </div>

      <div
        key={duration}
        className="mb-6 grid gap-5 sm:gap-6 xl:gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}
      >
        {packages.map((item) => (
          <article
            key={`${duration}-${item.tier}`}
            className={`relative mx-auto flex w-full max-w-sm flex-col items-center rounded-xl p-6 text-center transition-all duration-500 sm:p-7 md:p-8 ${
              item.featured
                ? "border-2 border-secondary bg-[#2f4050] text-primary-foreground"
                : "border border-secondary/15 bg-background hover:border-secondary/45"
            }`}
            style={{
              boxShadow: item.featured
                ? "0 15px 40px rgba(255, 255, 255, 0.12)"
                : "0 20px 40px color-mix(in srgb, var(--secondary) 10%, transparent)",
            }}
          >
            {item.badge && (
              <div className="absolute -top-4 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-secondary-foreground uppercase sm:px-4">
                {item.badge}
              </div>
            )}

            <span className="mb-2 text-xs font-bold tracking-[0.16em] text-secondary sm:text-sm">{item.tier}</span>
            <h3 className={`mb-3 font-heading text-lg sm:mb-4 sm:text-xl ${item.featured ? "text-primary-foreground" : "text-primary"}`}>
              {item.daysPerWeek}
            </h3>

            <div className="mb-5 sm:mb-6">
              <p className={`font-heading text-3xl font-bold sm:text-4xl ${item.featured ? "text-secondary" : "text-primary"}`}>
                {item.usd}
              </p>
              <p className={`mt-2 text-xs ${item.featured ? "text-primary-foreground/80" : "text-foreground/70"}`}>
                {item.lessonsPerMonth}
              </p>
            </div>

            <div
              className={`mb-6 w-full space-y-2 border-t pt-5 text-sm sm:mb-8 sm:pt-6 ${
                item.featured ? "border-secondary/35 text-primary-foreground" : "border-secondary/15 text-foreground/75"
              }`}
            >
              <p>{item.aud}</p>
              <p>{item.uk}</p>
              <p>{item.europe}</p>
            </div>

            <Link
              href={`/enroll?course=${item.tier.toLowerCase()}`}
              className={`mt-2 flex w-full items-center justify-center rounded-full py-3.5 text-xs font-bold tracking-[0.16em] uppercase transition-all ${
                item.featured
                  ? "bg-[#C5A059] text-[#1A1A1A] hover:bg-[#d3b26b] hover:shadow-[0_0_16px_rgba(197,160,89,0.4)]"
                  : "border-2 border-secondary/40 bg-white text-secondary hover:border-secondary hover:bg-secondary/10"
              }`}
            >
              {item.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
