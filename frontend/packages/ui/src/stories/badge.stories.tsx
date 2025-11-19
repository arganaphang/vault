import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components/ui/badge";

const meta = {
	title: "UI/Badge",
	component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-wrap items-center gap-3">
			<Badge variant="default">Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="outline">Outline</Badge>
			<Badge className="bg-emerald-500 text-white hover:bg-emerald-500/80">
				Custom
			</Badge>
		</div>
	),
};
