import { Users } from "lucide-react";

type Duration = "30" | "60";

type TwoStudentOffer = {
  daysPerWeek: string;
  usd: string;
  aud?: string;
  uk?: string;
  europe?: string;
  popular?: boolean;
};

const TWO_STUDENT_OFFERS_30: TwoStudentOffer[] = [
  { daysPerWeek: "1 Day / Week", usd: "USD $50" },
  { daysPerWeek: "2 Days / Week", usd: "USD $60" },
  { daysPerWeek: "3 Days / Week", usd: "USD $70" },
  {
    daysPerWeek: "5 Days / Week",
    usd: "USD $100",
    aud: "AUD $100",
    uk: "UK £60",
    europe: "€60",
    popular: true,
  },
];

function applyDoubleMinusTen(priceText: string): string {
  return priceText.replace(/(\d+(?:\.\d+)?)/, (value) => {
    const num = Number(value);
    return String(num * 2 - 10);
  });
}

function getOffersByDuration(duration: Duration): TwoStudentOffer[] {
  if (duration === "30") {
    return TWO_STUDENT_OFFERS_30;
  }

  return TWO_STUDENT_OFFERS_30.map((offer) => ({
    ...offer,
    usd: applyDoubleMinusTen(offer.usd),
    aud: offer.aud ? applyDoubleMinusTen(offer.aud) : undefined,
    uk: offer.uk ? applyDoubleMinusTen(offer.uk) : undefined,
    europe: offer.europe ? applyDoubleMinusTen(offer.europe) : undefined,
  }));
}

type FeesTwoStudentOfferSectionProps = {
  duration: Duration;
};

export function FeesTwoStudentOfferSection({ duration }: FeesTwoStudentOfferSectionProps) {
  const offers = getOffersByDuration(duration);

  return (
    <section className="relative mx-auto mb-16 w-full max-w-7xl overflow-hidden rounded-3xl px-4 py-12 sm:mb-20 sm:px-6 sm:py-16 md:mb-24 md:px-8 md:py-20">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "color-mix(in srgb, var(--secondary) 8%, transparent)" }}
      />

      <div className="relative z-10 mb-8 px-2 text-center sm:mb-10 sm:px-4 md:mb-16">
        <Users className="mx-auto mb-3 h-10 w-10 text-secondary sm:mb-4 sm:h-12 sm:w-12" />
        <h2 className="mb-3 font-heading text-2xl text-primary sm:mb-4 sm:text-3xl md:text-4xl">Special Offer For Two Students</h2>
        <p className="mx-auto mb-2 max-w-xl text-sm text-foreground/75 italic sm:text-base">
          Shared learning for family members to cultivate spiritual growth together.
        </p>
      </div>

      <div
        className="relative z-10 grid gap-4 px-1 sm:gap-5 sm:px-2 md:gap-6 md:px-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))" }}
      >
        {offers.map((offer) => (
          <article
            key={`${duration}-${offer.daysPerWeek}`}
            className={`mx-auto w-full max-w-60 rounded-xl px-5 py-7 text-center sm:max-w-60 sm:px-6 sm:py-9 md:px-8 md:py-11 ${
              offer.popular
                ? "md:-translate-y-2 border-2 border-secondary bg-secondary/25 shadow-lg"
                : "border border-secondary/20 bg-background/90 backdrop-blur"
            }`}
          >
            {offer.popular && (
              <p className="mb-1 text-[10px] font-bold tracking-[0.16em] text-secondary uppercase">Most Popular</p>
            )}

            <p className="mb-1 text-base font-bold text-primary sm:text-lg">{offer.daysPerWeek}</p>
            <p className="font-heading text-xl font-bold text-secondary sm:text-2xl">{offer.usd}</p>

            {offer.popular && offer.aud && offer.uk && offer.europe && (
              <div className="mt-3 flex flex-wrap justify-center gap-2 border-t border-secondary/20 pt-2 text-[10px] font-semibold text-secondary">
                <span>{offer.aud}</span>
                <span>{offer.uk}</span>
                <span>{offer.europe}</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
