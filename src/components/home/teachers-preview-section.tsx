import Image from "next/image";

const teachers = [
	{
		name: "Dr. Ibrahim Al-Azhar",
		role: "PhD in Quranic Linguistics",
		quote:
			'"Language is the vessel of revelation. We do not just teach words, we teach the soul\'s communication."',
		image: "/images/home/teacher-ibrahim.webp",
	},
	{
		name: "Sheikh Mansoor Ali",
		role: "Master of Tajweed",
		quote:
			'"The rhythm of the heart must align with the rhythm of the verse for true recitation."',
		image: "/images/home/teacher-monsoor.webp",
	},
	{
		name: "Ustadha Fatima Zahra",
		role: "Hifz Specialist",
		quote:
			'"Memorization is more than repetition; it is about building a lifelong relationship with the Light."',
		image: "/images/home/teacher-fatima.webp",
	},
];

export function TeachersPreviewSection() {
	return (
		<section className="bg-accent/12 py-20 md:py-24">
			<div className="mx-auto w-full max-w-7xl px-6 md:px-10">
				<div className="mb-12 text-center md:mb-16">
					<p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
						Guidance
					</p>
					<h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
						Meet Our Teachers
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
					{teachers.map((teacher) => (
						<article key={teacher.name} className="group flex flex-col  items-center">
							<div className="relative mb-7 w-full overflow-hidden border  border-secondary/25 bg-background aspect-[4/5]">
								<Image
									src={teacher.image}
									alt={teacher.name}
									fill
									className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
								/>
								<div className="pointer-events-none absolute inset-2 border border-secondary/35 transition duration-300 group-hover:inset-1" />
							</div>

							<h3 className="mb-1 text-center text-2xl font-semibold text-primary">
								{teacher.name}
							</h3>
							<p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-secondary">
								{teacher.role}
							</p>
							<p className="max-w-sm text-center text-sm leading-relaxed text-foreground/75">
								{teacher.quote}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
