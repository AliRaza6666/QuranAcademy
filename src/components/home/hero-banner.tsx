import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroBanner() {
	return (
		<section className="relative min-h-[70vh] overflow-hidden px-5 pb-14 pt-32 sm:px-6 sm:pb-16 sm:pt-32 md:min-h-[78vh] md:px-10 md:pb-28 md:pt-36">
			<div className="absolute inset-0 -z-20">
				<Image
					src="/images/home/hero.webp"
					alt="Library shelves and books"
					fill
					sizes="100vw"
					priority
					className="object-cover object-[72%_center] opacity-70 md:object-center"
				/>
			</div>

			<div className="absolute inset-0 -z-10 bg-linear-to-r from-background/95 via-background/88 to-background/35 md:from-background md:via-background/90 md:to-background/30" />

			<div className="absolute inset-0 -z-10 bg-linear-to-t from-background/45 via-transparent to-transparent md:from-transparent" />

			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(196,160,97,0.26),transparent_56%)]" />

			<div className="mx-auto w-full max-w-7xl">
				<div className="mb-6 flex flex-wrap items-center gap-3">
					<div className="flex items-center gap-1 text-secondary">
						{Array.from({ length: 5 }).map((_, index) => (
							<Star key={index} className="h-4 w-4 fill-current" />
						))}
					</div>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
						The Highest Standard of Learning
					</p>
				</div>

				<h1 className="mb-6 max-w-4xl text-[2.25rem] font-bold leading-[1.05] text-primary sm:text-6xl sm:leading-tight md:text-7xl lg:text-8xl">
					IMAM ALI QURAN
					<span className="ml-3 block italic text-secondary md:inline">Academy</span>
				</h1>

				<p className="mb-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg md:mb-10 md:text-xl">
					Illuminating the path of divine knowledge through traditional
					scholarly excellence and modern digital accessibility.
				</p>

				<div className="flex flex-wrap gap-3 pt-1 md:gap-4">
					<Link
						href="/about"
						className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#C5A059] px-8 text-sm font-bold tracking-[0.12em] text-[#1A1A1A] shadow-sm transition-all hover:bg-[#d3b26b] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] focus-visible:outline-none focus-visible:ring-2 sm:w-auto"
					>
						LEARN NOW
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>

					<Link
						href="/fees"
						className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-secondary/60 bg-background/40 px-8 text-sm font-medium tracking-[0.12em] text-primary transition-all hover:border-secondary hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 sm:w-auto"
					>
						OUR CURRICULUM
					</Link>
				</div>
			</div>
		</section>
	)
}
