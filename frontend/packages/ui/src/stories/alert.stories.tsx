import type { Meta, StoryObj } from "@storybook/react";

import {
	AlertDescription,
	Alert as AlertRoot,
	AlertTitle,
} from "@/components/ui/alert";

const meta = {
	title: "UI/Alert",
	component: AlertRoot,
} satisfies Meta<typeof AlertRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<AlertRoot>
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				You are currently using the free plan. Upgrade to unlock unlimited
				projects.
			</AlertDescription>
		</AlertRoot>
	),
};

export const Destructive: Story = {
	render: () => (
		<AlertRoot variant="destructive">
			<AlertTitle>Payment failed</AlertTitle>
			<AlertDescription>
				We were unable to process the latest invoice. Update your billing
				information to avoid interruptions.
			</AlertDescription>
		</AlertRoot>
	),
};
