import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const meta = {
	title: "UI/Textarea",
	component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-2">
			<Label htmlFor="notes">Notes</Label>
			<Textarea id="notes" rows={4} placeholder="Share update..." />
		</div>
	),
};
