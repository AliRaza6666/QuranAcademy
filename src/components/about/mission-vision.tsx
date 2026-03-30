import React from "react";

export function MissionVision() {
  return (
    <section className="bg-[#fdfae9] py-20 px-5 md:py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Our Mission */}
          <div className="flex flex-col space-y-6 animate-in fade-in slide-in-from-left-12 duration-1000 ease-out">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0B2C3D] sm:text-4xl md:text-5xl">
              Our <span className="italic text-[#B8965A]">Mission</span>
            </h2>
            <div className="h-1 w-16 rounded-full bg-[#B8965A]/40" />
            <p className="text-lg leading-loose text-[#5F7A8A] md:text-xl">
              To provide a sacred digital space where students worldwide can
              access authentic Quranic knowledge, nurtured by qualified scholars
              who bridge traditional wisdom with modern pedagogical excellence.
            </p>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col space-y-6 animate-in fade-in slide-in-from-right-12 duration-1000 ease-out delay-200">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0B2C3D] sm:text-4xl md:text-5xl">
              Our <span className="italic text-[#B8965A]">Vision</span>
            </h2>
            <div className="h-1 w-16 rounded-full bg-[#B8965A]/40" />
            <p className="text-lg leading-loose text-[#5F7A8A] md:text-xl">
              To become the leading global standard for Islamic digital
              education, fostering a generation of enlightened individuals who
              carry the light of divine knowledge with character and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
