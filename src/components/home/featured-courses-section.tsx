import { ArrowRight, BookOpenText, Languages, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const stars = [1, 2, 3, 4, 5];

export function FeaturedCoursesSection() {
	return (
		<section className="mx-auto w-full max-w-7xl px-6 py-22 md:px-10 lg:py-24">
			<div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
				<div>
					<p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
						Curriculum
					</p>
					<h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
						Featured Courses
					</h2>
				</div>
				<p className="max-w-md text-sm leading-relaxed text-foreground/75 md:text-base">
					Explore curated pathways designed for both beginners and advanced
					seekers of Quranic knowledge.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
				<article className="relative overflow-hidden rounded-xl border border-secondary/20 bg-background p-5 sm:p-7 shadow-sm md:col-span-8 md:p-10">
					<div className="relative z-10 max-w-md">
						<BookOpenText className="mb-5 h-10 w-10 text-secondary" />
						<h3 className="mb-3 text-2xl font-semibold text-primary md:text-3xl">
							Tajweed Mastery
						</h3>
						<p className="mb-7 text-sm leading-relaxed text-foreground/75 md:text-base">
							Master articulation, rhythm, and spiritual depth for beautiful,
							precise recitation.
						</p>
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-1 text-secondary">
								{stars.map((star) => (
									<Star key={star} className="h-4 w-4 fill-current" />
								))}
							</div>
							<span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
								Gold Level
							</span>
						</div>
					</div>
					<div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(168,196,198,0.25),transparent_70%)] md:block" />
				</article>

				<article className="rounded-xl border border-secondary/15 bg-accent/20 p-5 sm:p-7 shadow-sm md:col-span-4">
					<Languages className="mb-5 h-9 w-9 text-secondary" />
					<h3 className="mb-3 text-xl font-semibold text-primary">
						Quranic Translation
					</h3>
					<p className="mb-6 text-sm text-foreground/75">
						Understand meanings with contextual language guidance.
					</p>
					<div className="flex items-center gap-1 text-secondary">
						{stars.map((star) => (
							<Star key={star} className="h-3.5 w-3.5 fill-current" />
						))}
					</div>
				</article>

				<article className="rounded-xl border border-secondary/15 bg-accent/20 p-5 sm:p-7 shadow-sm md:col-span-4">
					<BookOpenText className="mb-5 h-9 w-9 text-secondary" />
					<h3 className="mb-3 text-xl font-semibold text-primary">
						Tafseer Studies
					</h3>
					<p className="mb-6 text-sm text-foreground/75">
						Unveil deeper meanings through classical and modern sources.
					</p>
					<div className="flex items-center gap-1 text-secondary">
						{stars.map((star) => (
							<Star key={star} className="h-3.5 w-3.5 fill-current" />
						))}
					</div>
				</article>

				<article className="flex flex-col md:flex-row overflow-hidden rounded-xl border border-primary/20 bg-primary shadow-sm md:col-span-8">
					<div className="flex flex-1 flex-col p-6 sm:p-8 md:p-10">
						<h3 className="mb-4 text-3xl font-bold tracking-tight text-background" style={{ fontFamily: "'Montserrat', sans-serif" }}>
							Islamic History
						</h3>
						<p className="mb-8 text-base leading-relaxed text-background/80 md:pr-6">
							Follow the timeline of revelation, scholars, and civilizations to
							connect faith with historical context. Explore the profound legacies 
							of the golden ages.
						</p>
						<div className="mt-auto pt-4">
							<Link
								href="/fees"
								className="inline-flex items-center justify-center rounded-full bg-[#C5A059] px-6 py-2.5 text-sm font-bold tracking-[0.12em] text-[#1A1A1A] shadow-sm transition-all hover:bg-[#d3b26b] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)]"
							>
								LEARN TODAY
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</div>
					</div>
					<div className="relative min-h-[200px] w-full shrink-0 md:w-[40%]">
						<Image
							src="/images/home/islamic_history_cover.png"
							alt="Islamic History - Classical illumination and astronomy"
							fill
							sizes="(max-width: 768px) 100vw, 350px"
							className="object-cover"
						/>
					</div>
				</article>
			</div>
		</section>
	);
}
