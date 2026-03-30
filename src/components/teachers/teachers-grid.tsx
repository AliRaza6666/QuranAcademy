import React from "react";
import NextImage from "next/image";

const teachers = [
  {
    name: "Sheikh Ibrahim Al-Mansour",
    qualification: "Masters in Quranic Sciences (Al-Azhar)",
    bio: "With over 15 years of experience in Tajweed and Tafseer, Sheikh Ibrahim specializes in bridging classical interpretations with modern pedagogical methods.",
    image: "/images/home/teacher-ibrahim.webp",
  },
  {
    name: "Ustadha Fatima Zahra",
    qualification: "Licensed Ijazah in Ten Qira'at",
    bio: "Ustadha Fatima focuses on the spiritual dimensions of Quranic recitation, helping students achieve precision in Tajweed while connecting with the divine word.",
    image: "/images/home/teacher-fatima.webp",
  },
  {
    name: "Dr. Mansoor Ahmed",
    qualification: "PhD in Islamic History and Heritage",
    bio: "Dr. Mansoor brings Islamic history to life through immersive storytelling, focusing on the preservation of heritage and the development of scholarly traditions.",
    image: "/images/home/teacher-monsoor.webp",
  },
];

export function TeachersGrid() {
  return (
    <section className="bg-[#fdfae9] py-20 px-5 md:py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Teacher Image Container */}
              <div className="relative mb-8 aspect-[4/5] w-full overflow-hidden" style={{ borderRadius: "2.5rem" }}>
                <NextImage
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3D]/40 to-transparent" />
              </div>

              {/* Teacher Info */}
              <div className="flex flex-col items-center text-center">
                <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B8965A]">
                  Faculty Member
                </span>
                <h3 className="mb-2 text-2xl font-bold text-[#0B2C3D]">
                  {teacher.name}
                </h3>
                <p className="mb-4 text-sm font-semibold italic text-[#B8965A]">
                  {teacher.qualification}
                </p>
                <div className="mb-4 h-px w-12 bg-[#B8965A]/30" />
                <p className="max-w-xs text-base leading-relaxed text-[#5F7A8A]">
                  {teacher.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
