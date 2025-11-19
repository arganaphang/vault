import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
	title: "UI/Label",
	component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-2">
			<Label htmlFor="email">Email address</Label>
			<Input id="email" type="email" placeholder="you@example.com" />
		</div>
	),
};
