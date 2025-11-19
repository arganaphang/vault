import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const meta = {
	title: "UI/Carousel",
	component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="relative flex w-full max-w-2xl items-center justify-center">
			<Carousel className="w-full max-w-xl">
				<CarouselContent>
					{[1, 2, 3, 4].map((item) => (
						<CarouselItem key={item} className="sm:basis-1/2">
							<Card className="h-32 items-center justify-center">
								<CardContent className="flex h-full flex-col items-start justify-center gap-2">
									<span className="text-sm text-muted-foreground">
										Case study
									</span>
									<span className="text-lg font-semibold">
										Customer #{item}
									</span>
									<Button size="sm" variant="link" className="h-auto p-0">
										Read more
									</Button>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};
