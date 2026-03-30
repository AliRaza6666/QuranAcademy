import Image from "next/image";
import { BadgeCheck, Clock3, Users } from "lucide-react";

const highlights = [
	{
		title: "Authentic Lineage",
		description:
			"Our teachers hold Ijazah with chains of narration rooted in classical scholarship.",
		Icon: BadgeCheck,
	},
	{
		title: "Flexible Learning",
		description:
			"Digital classrooms designed around your schedule without compromising rigor.",
		Icon: Clock3,
	},
	{
		title: "Global Community",
		description:
			"Join students from many countries in a supportive and spiritually focused environment.",
		Icon: Users,
	},
];

export function WhyChooseUsSection() {
	return (
		<section className="mx-auto w-full max-w-7xl px-6 py-22 md:px-10 md:py-24">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div className="relative">
					<div className="relative aspect-video overflow-hidden rounded-xl border border-secondary/25 bg-background shadow-sm">
						<Image
							src="/images/home/why-choose-placeholder.webp"
							alt="Sunlight and books"
							fill
							className="object-cover shadow-lg -left-4"
						/>
					</div>
					<div className="absolute -bottom-6 -right-4 hidden border border-secondary/30 bg-secondary px-8 py-6 text-primary md:block">
						<p className="text-4xl font-bold leading-none">25+</p>
						<p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em]">
							Years of Tradition
						</p>
					</div>
				</div>

				<div className="rounded-xl border border-secondary/15 bg-background/60 p-7 shadow-sm md:p-9">
					<p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
						Philosophy
					</p>
					<h2 className="mb-5 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
						Why Choose Us
					</h2>
					<p className="mb-9 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
						We bridge ancient wisdom and modern accessibility, helping students
						grow with clarity, consistency, and spiritual depth.
					</p>

					<div className="space-y-6">
						{highlights.map((item) => (
							<article key={item.title} className="flex gap-4">
								<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/30 text-secondary">
									<item.Icon className="h-5 w-5" />
								</div>
								<div>
									<h3 className="mb-1 text-xl font-semibold text-primary">{item.title}</h3>
									<p className="text-sm leading-relaxed text-foreground/75">
										{item.description}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
