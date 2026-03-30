import Image from "next/image";

export function CoursesHeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden px-5 py-14 sm:px-6 sm:py-16 md:min-h-[78vh] md:px-10 md:py-28">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/courses/hero.webp"
          alt="Sunlight in a scholarly library"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover object-[72%_center] opacity-70 md:object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/88 to-background/35 md:from-background md:via-background/90 md:to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/45 via-transparent to-transparent md:from-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(196,160,97,0.26),transparent_56%)]" />

      <div className="mx-auto w-full max-w-7xl">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
          The Digital Sanctuary
        </span>

        <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          OUR <span className="italic text-secondary">CURRICULUM</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl">
          Step into an illuminated path of knowledge. Our courses are designed
          to bridge ancient wisdom with modern scholarly excellence.
        </p>
      </div>
    </section>
  );
}
