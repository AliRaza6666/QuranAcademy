import { BookOpenText } from "lucide-react";
import Image from "next/image";

type Course = {
  title: string;
  category: string;
  level: string;
  description: string;
  price: string;
  rating: number;
  image: string;
};

const courses: Course[] = [
  {
    title: "Tajweed Mastery",
    category: "ARTICULATION RULES",
    level: "ADVANCED",
    description:
      "Perfect the pronunciation of the Holy Quran through deep phonetics and traditional recitation methods.",
    price: "$129",
    rating: 5,
    image: "/images/courses/tajweed.webp",
  },
  {
    title: "Quranic Translation",
    category: "LINGUISTICS",
    level: "INTERMEDIATE",
    description:
      "Uncover the profound meanings behind the sacred text through morphological analysis and context.",
    price: "$99",
    rating: 4,
    image: "/images/courses/translation.webp",
  },
  {
    title: "Islamic History",
    category: "CIVILIZATION",
    level: "FOUNDATION",
    description:
      "Journey through the golden ages of Islamic civilization, exploring philosophy, art, and leadership.",
    price: "$149",
    rating: 5,
    image: "/images/courses/history.webp",
  },
  {
    title: "Tafseer Studies",
    category: "EXEGESIS",
    level: "ADVANCED",
    description:
      "An in-depth exploration of the classical commentaries of the Quran, studying historical contexts.",
    price: "$199",
    rating: 4,
    image: "/images/courses/tfseer.webp",
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-secondary/30 bg-[#fdfae9] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Fixed wrapper with explicit aspect ratio enforced by padding trick */}
      <div className="relative w-full overflow-hidden aspect-[16/10]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
          style={{ position: "absolute", inset: 0 }}
        />
        <div className="absolute top-4 right-4 z-10 rounded bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-secondary uppercase">
          {course.level}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-4 sm:p-6 md:p-8">
        <div className="mb-3 flex items-center gap-2">
          <BookOpenText className="h-5 w-5 text-[#775a22]" />
          <span className="text-[10px] font-bold tracking-widest text-[#775a22]/70 uppercase">
            {course.category}
          </span>
        </div>

        <h3 className="mb-4 font-heading text-2xl font-bold text-primary">
          {course.title}
        </h3>

        <p className="mb-8 flex-grow text-sm leading-relaxed text-primary/70">
          {course.description}
        </p>

        <div className="flex items-center justify-between border-t border-secondary/20 pt-6">
          <div className="flex text-xs text-secondary">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < course.rating ? "opacity-100" : "opacity-30"}>
                ★
              </span>
            ))}
          </div>
          <span className="font-heading text-lg font-bold text-primary">
            {course.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CoursesGridSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}