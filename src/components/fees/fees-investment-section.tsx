
import { BookOpenText } from "lucide-react";

type FeesInvestmentSectionProps = {
  duration: "30" | "60";
  onDurationChange: (duration: "30" | "60") => void;
};

export function FeesInvestmentSection({ duration, onDurationChange }: FeesInvestmentSectionProps) {

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16">
      <div
        className="relative mb-10 overflow-hidden rounded-2xl border border-secondary/20 px-4 py-8 text-center sm:mb-12 sm:px-6 sm:py-10 md:mb-16 md:p-12"
        style={{
          backgroundColor: "color-mix(in srgb, var(--background) 84%, var(--accent) 16%)",
          boxShadow: "0 20px 40px color-mix(in srgb, var(--secondary) 10%, transparent)",
        }}
      >
        <div className="pointer-events-none absolute top-2 right-2 opacity-10 sm:top-3 sm:right-4">
          <BookOpenText className="h-14 w-14 text-secondary sm:h-20 sm:w-20 md:h-28 md:w-28" />
        </div>

        <h2 className="mb-4 font-heading text-2xl leading-tight text-primary sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl">Investment in Learning</h2>
        <p className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:mb-9 sm:text-base md:mb-10 md:text-lg">
          All fees are charged on a <span className="font-bold text-secondary">Monthly Basis</span>. Please note that
          tuition includes public holidays to ensure consistent support for our academic infrastructure.
        </p>

        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <span className="text-[11px] font-semibold tracking-[0.18em] text-secondary uppercase sm:text-xs md:text-sm">
            Select Lesson Duration
          </span>

          <div className="inline-flex rounded-full border border-border/70 bg-muted p-1">
            <button
              type="button"
              onClick={() => onDurationChange("30")}
              className={`rounded-full px-5 sm:px-8 py-2 text-xs sm:text-sm font-medium transition-all ${
                duration === "30" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"
              }`}
              aria-pressed={duration === "30"}
            >
              30 Minutes
            </button>
            <button
              type="button"
              onClick={() => onDurationChange("60")}
              className={`rounded-full px-5 sm:px-8 py-2 text-xs sm:text-sm font-medium transition-all ${
                duration === "60" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"
              }`}
              aria-pressed={duration === "60"}
            >
              60 Minutes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
