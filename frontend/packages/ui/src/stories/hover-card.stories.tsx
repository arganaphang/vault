import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

const meta = {
	title: "UI/Hover Card",
	component: HoverCard,
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link" className="p-0">
					View product plan
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex items-start gap-4">
					<Avatar className="size-12">
						<AvatarImage
							src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=200&auto=format&fit=crop"
							alt="Product plan"
						/>
						<AvatarFallback>PP</AvatarFallback>
					</Avatar>
					<div>
						<h4 className="font-semibold leading-tight">Product plan</h4>
						<p className="text-muted-foreground text-sm">
							Track work across engineering, design, and research teams.
						</p>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
};
