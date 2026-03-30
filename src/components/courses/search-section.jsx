import { Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchSection() {
	return (
		<section className="border-t border-secondary/10 bg-background/80 px-6 py-8 md:px-10 md:py-9">
			<div className="mx-auto w-full max-w-7xl">
				<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
					<div className="space-y-2">
						<h2 className="font-heading text-4xl leading-tight whitespace-nowrap text-primary">Learning Gallery</h2>
						<p className="text-sm text-foreground/70">
							Refine your search by discipline or difficulty level.
						</p>
					</div>

					<div className="flex shrink-0 items-center gap-3">
						<div className="relative w-full sm:w-[12rem]">
							<Input
								type="text"
								placeholder="Search disciplines..."
								className="h-10 rounded-md border-secondary/20 bg-background/55 pl-9 pr-3 text-sm text-foreground placeholder:text-foreground/45 focus-visible:border-secondary/40 focus-visible:ring-secondary/20"
							/>
						</div>
						<Button
							variant="secondary"
							className="h-10 w-[6.8rem] shrink-0 rounded-md border border-primary/10 bg-primary px-5 text-sm font-semibold tracking-[0.04em] text-secondary hover:bg-primary/90 hover:text-secondary"
						>
							<SlidersHorizontal className="mr-2 h-4 w-4" />
							Filter
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}