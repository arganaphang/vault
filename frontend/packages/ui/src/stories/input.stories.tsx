import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
	title: "UI/Input",
	component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-2">
			<Label htmlFor="project">Project name</Label>
			<Input id="project" placeholder="New brand system" />
			<p className="text-muted-foreground text-sm">
				Choose something memorable – you can change this later.
			</p>
		</div>
	),
};
