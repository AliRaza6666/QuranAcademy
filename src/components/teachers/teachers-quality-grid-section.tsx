import {
  BadgeCheck,
  BookOpen,
  ChartLine,
  Languages,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type QualityItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const qualityItems: QualityItem[] = [
  {
    title: "Traditional Ijazah Certification",
    description:
      "Mastery of classical texts and direct chains of transmission (Isnad) from recognized global scholars.",
    icon: BadgeCheck,
  },
  {
    title: "Pedagogical Training",
    description:
      "Modern teaching methodologies tailored for effective online learning and student engagement.",
    icon: BookOpen,
  },
  {
    title: "Arabic and English Fluency",
    description:
      "Articulate communication to bridge classical wisdom and diverse global student populations.",
    icon: Languages,
  },
  {
    title: "Character and Ethics (Adab)",
    description:
      "Teachers who embody the prophetic values they teach, serving as noble spiritual role models.",
    icon: ShieldCheck,
  },
  {
    title: "Technology-Friendly",
    description:
      "Experts in virtual classroom tools, interactive digital pedagogy, and modern LMS platforms.",
    icon: MonitorSmartphone,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Regular academic audits and student feedback loops ensuring constant growth and excellence.",
    icon: ChartLine,
  },
];

export function TeachersQualityGridSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{
        backgroundColor: "color-mix(in srgb, var(--background) 88%, var(--accent) 12%)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-0 text-center md:mb-0 md:text-left">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary md:text-4xl">
            Foundation of Mastery
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-base leading-relaxed text-foreground/70 md:mx-0">
            Each teacher at our academy meets six essential pillars of quality, verified through our unique
            accreditation framework.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 md:mt-22 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {qualityItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-xl p-6 sm:p-8 md:p-10 lg:p-11 transition-all duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--background) 96%, white 4%)",
                  boxShadow: "0 12px 28px color-mix(in srgb, var(--foreground) 8%, transparent)",
                }}
              >
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg transition-colors duration-300"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--secondary) 24%, transparent)",
                  }}
                >
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-2 px-0 sm:px-4 font-heading text-lg sm:text-xl font-bold text-primary">{item.title}</h3>
                <p className="px-0 sm:px-4 mb-4 text-sm leading-relaxed text-foreground/70">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
