import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "@/components/ui/spinner";

const meta = {
	title: "UI/Spinner",
	component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex items-center gap-3 text-sm text-muted-foreground">
			<Spinner className="text-primary" />
			Deploying latest changes...
		</div>
	),
};
