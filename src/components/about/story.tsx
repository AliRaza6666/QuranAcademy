import Image from "next/image";

export function StorySection() {
  return (
    <section className="bg-transparent py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:gap-20 md:px-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-['Noto_Serif'] text-3xl font-bold text-[#00334D] md:mb-8 md:text-4xl">
            The Journey of <br />
            <i className="font-normal text-[#775a22]">Imam Ali Online Quran Academy</i>
          </h2>
          <p className="mb-0 text-base leading-relaxed text-[#00334D]/70 md:mb-0 md:text-lg">
            Founded on the principles of sacred knowledge and modern accessibility, Imam Ali Online Quran Academy emerged from a vision to bridge the gap between ancient traditions and the digital age. We believe that distance should never be a barrier to divine understanding.
          </p>

          <div className="mt-15 sm:mt-20 md:mt-30 grid grid-cols-1 gap-6 md:grid-cols-2">
  {/* First card: full width */}
  <div className="md:col-span-2 rounded-lg border border-[#4b3a7a] bg-[#2f2357] p-4 sm:p-6 shadow-md">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a3a85] text-[#e6deff] shadow-sm">
        {/* Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6L2 12l10 6 10-6-10-6z" />
        </svg>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-[#f2ecff]">Traditional meets Modern</h3>
        <p className="text-sm text-[#ddd2ff]/90">
          Our curriculum preserves the rigorous standards of classical Ijazah while utilizing state-of-the-art virtual classrooms. We teach not just the recitation, but the profound wisdom hidden within the verses.
        </p>
      </div>
    </div>
  </div>

  {/* Second card: dark blue */}
  <div className="rounded-lg border border-[#1f5c50] bg-[#0f4a3d] p-4 sm:p-6 shadow-md text-[#a8f2dc]">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f6a5a] shadow-sm">
        {/* Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-[#d9fff1]">Core Philosophy</h3>
        <p className="text-sm text-[#cbf7e8]/90">
          Excellence (Ihsan) in every interaction. We strive to provide a learning experience that reflects the beauty of the Quran itself.
        </p>
      </div>
    </div>
  </div>

  {/* Third card: light beige */}
  <div className="rounded-lg border border-[#d39a3b] bg-[#fff0d6] p-4 sm:p-6 shadow-md text-[#6a3e00]">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe2b8] shadow-sm">
        {/* Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-[#7a4700]">Global Reach</h3>
        <p className="text-sm text-[#855425]/90">
          From the heart of historic centers to the furthest reaches of the globe, we connect students to world-class scholars.
        </p>
      </div>
    </div>
  </div>
</div>
        </div>

        <div className="relative pb-4 md:translate-x-10 md:pb-24 lg:translate-x-16">
          <div className="relative z-10 ml-auto w-full max-w-[280px] sm:max-w-[320px] rotate-2 overflow-hidden rounded-lg border-8 border-[#fdfae9] shadow-2xl transition-transform duration-500 hover:rotate-0 md:w-[420px] md:max-w-none">
            <Image
              src="/images/about/img.webp"
              alt="Student studying"
              width={420}
              height={240}
              className="h-[180px] w-full object-cover md:h-[240px] md:w-[420px]"
            />
          </div>
          <div className="z-20 mt-6 max-w-sm border-l-4 border-[#C4A061] bg-[#fdfae9] p-5 sm:p-8 shadow-xl md:absolute md:-bottom-10 md:-left-10 md:mt-0">
            <p className="mb-4 font-['Noto_Serif'] text-lg italic  text-secondary">
              &ldquo;The ink of the scholar is more sacred than the blood of the martyr.&rdquo;
            </p>
            <span className="text-[10px] font-bold tracking-widest text-[#775a22] uppercase">— Classical Wisdom</span>
          </div>
        </div>
      </div>
    </section>
  );
}