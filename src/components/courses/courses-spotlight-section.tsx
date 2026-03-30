import Image from "next/image";
import { BookOpenCheck, PenTool } from "lucide-react";

export function CoursesSpotlightSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4e4] pb-20 pt-12 md:pb-24 md:pt-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(196,160,97,0.18),transparent_56%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative h-[24rem] overflow-hidden rounded-xl border border-secondary/20 md:h-[30rem]">
            <Image
              src="/images/courses/hero.webp"
              alt="Scholarly learning hall"
              width={1200}
              height={900}
              className="h-full w-full object-cover object-[72%_center]"
            />
          </div>

          <div className="absolute -bottom-8 -right-2 max-w-xs border border-secondary/20 bg-background p-6 shadow-lg md:right-0">
            <p className="font-heading text-lg leading-relaxed text-primary/85 italic">
              &ldquo;The seeking of knowledge is obligatory for every seeker.&rdquo;
            </p>
            <div className="mt-4 h-0.5 w-12 bg-secondary" />
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-xs font-semibold tracking-[0.22em] text-secondary uppercase">
            Experience Excellence
          </p>

          <h2 className="font-heading text-4xl leading-tight text-primary md:text-5xl">
            Digital Learning with a <span className="italic text-secondary">Scholarly Heart</span>
          </h2>

          <div className="space-y-7 pt-2">
            <article className="flex gap-4">
              <div className="flex h-10 w-22 shrink-0 items-center justify-center rounded-lg bg-primary text-secondary">
                <BookOpenCheck className="h-7 w-10" />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-xl text-primary">Structured Pedagogy</h3>
                <p className="text-sm leading-relaxed text-primary/70 md:text-base">
                  Our curriculum is curated by scholars to ensure a balanced progression from foundations to mastery.
                </p>
              </div>
            </article>

            <article className="flex gap-4">
              <div className="flex h-10 w-22 shrink-0 items-center justify-center rounded-lg bg-primary text-secondary">
                <PenTool className="h-7 w-10" />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-xl text-primary">Artistic Integration</h3>
                <p className="text-sm leading-relaxed text-primary/70 md:text-base">
                  Visual aids and traditional calligraphy are woven into lessons to inspire the soul while informing the mind.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
