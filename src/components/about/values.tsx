import type { ReactNode } from "react";

type ValueCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="group space-y-4 flex flex-col gap-2 text-center transition-transform duration-300 hover:scale-105">
    <div
      className="mx-auto flex h-10 w-10 !bg-white items-center justify-center rounded-[14px] border border-[#C4A061]/35 text-[#8c6a2c] shadow-[0_2px_8px_rgba(119,90,34,0.08)] transition-colors group-hover:!bg-white group-hover:text-[#8c6a2c]"
      style={{ backgroundColor: "#ffffff" }}
    >
      {icon}
    </div>
    <h3 className="font-['Noto_Serif'] text-xl font-bold text-[#00334D]">{title}</h3>
    <p className="text-sm leading-relaxed text-[#00334D]/60">{description}</p>
  </div>
);

export function ValuesSection() {
  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 flex flex-col gap-3 space-y-2 text-center md:mb-12">
          <h2 className="font-['Noto_Serif'] text-2xl font-bold text-[#00334D] md:text-3xl">Our Spiritual Anchors</h2>
          <p className="mx-auto  max-w-2xl text-[#00334D]/55">Guided by the timeless values of Islamic scholarship, we operate with integrity, patience, and devotion.</p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12" style={{ marginTop: "96px" }}>
          <div className="w-full">
            <ValueCard
              title="Authenticity"
              description="Direct chains of narration (Isnad) connecting our teachers to the source of wisdom."
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
            />
          </div>
          <div className="w-full">
            <ValueCard
              title="Inclusivity"
              description="An welcoming sanctuary for students of all ages, backgrounds, and starting points."
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
            />
          </div>
          <div className="w-full sm:col-span-2 lg:col-span-1">
            <ValueCard
              title="Innovation"
              description="Harnessing the power of AI and interactive media to enhance Quranic memorization."
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}