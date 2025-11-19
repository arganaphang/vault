import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@/components/ui/separator";

const meta = {
	title: "UI/Separator",
	component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-4">
			<p className="text-sm text-muted-foreground">
				Divide sections with ease.
			</p>
			<Separator />
			<p className="text-sm">
				Add separators to settings pages and detail panels to keep things tidy.
			</p>
		</div>
	),
};
