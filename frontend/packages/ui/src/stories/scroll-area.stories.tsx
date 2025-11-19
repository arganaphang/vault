import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const meta = {
	title: "UI/Scroll Area",
	component: ScrollArea,
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ScrollArea className="h-40 w-full rounded-lg border">
			<div className="p-4">
				<div className="space-y-2">
					{Array.from({ length: 12 }).map((_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: we need to use the index as the key for the checklist item
						<p key={index} className="text-sm text-muted-foreground">
							Checklist item #{index + 1}
						</p>
					))}
				</div>
			</div>
			<ScrollBar orientation="vertical" />
		</ScrollArea>
	),
};
