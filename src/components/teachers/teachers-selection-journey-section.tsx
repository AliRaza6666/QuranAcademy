type JourneyStep = {
  step: string;
  title: string;
  description: string;
};

const journeySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Qualification Verification",
    description:
      "Deep dive into academic credentials and direct chains of authorization from senior scholars.",
  },
  {
    step: "02",
    title: "Teaching Evaluation",
    description:
      "Live demonstration sessions monitored by our pedagogical board to assess clarity and empathy.",
  },
  {
    step: "03",
    title: "Background and Character Check",
    description:
      "Comprehensive review of communal standing and alignment with our spiritual ethics (Adab).",
  },
  {
    step: "04",
    title: "Ongoing Performance Review",
    description:
      "Continuous professional development and termly audits based on student outcomes.",
  },
];

export function TeachersSelectionJourneySection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24" style={{ backgroundColor: "var(--background)" }}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary md:text-4xl">Our Selection Journey</h2>
          <div
            className="mx-auto h-1 w-24 rounded-full"
            style={{ backgroundColor: "color-mix(in srgb, var(--secondary) 92%, transparent)" }}
          />
        </div>

        <div className="relative">
          <div
            className="absolute top-10 hidden h-px w-full lg:block"
            style={{ backgroundColor: "color-mix(in srgb, var(--secondary) 22%, transparent)" }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((item) => (
              <article key={item.step} className="text-center">
                <div
                  className="mx-auto mb-6 flex flex-none items-center justify-center rounded-lg border-2 shadow-lg"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "var(--primary)",
                    color: "var(--secondary)",
                    borderColor: "var(--background)",
                    boxShadow: "0 14px 30px color-mix(in srgb, var(--primary) 16%, transparent)",
                  }}
                >
                  <span className="font-heading text-base font-bold">{item.step}</span>
                </div>

                <h3 className="mb-3 font-heading text-lg font-bold text-primary">{item.title}</h3>
                <p className="px-4 text-sm leading-relaxed text-foreground/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
