import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "@/components/ui/progress";

const meta = {
	title: "UI/Progress",
	component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Progress value={62} className="h-3 w-full max-w-md" />,
};
