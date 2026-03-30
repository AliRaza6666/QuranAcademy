import React from "react";
import NextImage from "next/image";

/**
 * ContactHero — Hero section for the Contact page
 * Strictly matches provided design: headline, divider, supporting text
 * Responsive, SEO-friendly, uses design tokens
 */
export function ContactHero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-6 md:min-h-[65vh] md:px-10 md:pb-24 md:pt-40">
      <div className="absolute inset-0 -z-20">
        <NextImage
          src="/images/contact/hero.png"
          alt="Vintage brass astrolabe and a feather quill pen"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover object-[72%_center] opacity-70 md:object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/88 to-background/35 md:from-background md:via-background/90 md:to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/45 via-transparent to-transparent md:from-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(196,160,97,0.26),transparent_56%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
          THE DIGITAL SANCTUARY
        </span>

        <h1 className="max-w-4xl text-left text-5xl font-bold leading-[0.95] text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          CONTACT <span className="italic text-secondary">US</span>
        </h1>

        <p className="mt-7 max-w-2xl text-left text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl">
          Have questions? Our spiritual advisors are here to guide your
          academy integration.
        </p>
      </div>
    </section>
  );
}
