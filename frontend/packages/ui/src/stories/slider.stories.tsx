import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@/components/ui/slider";

const meta = {
	title: "UI/Slider",
	component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-3">
			<p className="text-sm text-muted-foreground">
				Weekly budget: <span className="font-semibold">$12,500</span>
			</p>
			<Slider defaultValue={[12500]} max={20000} step={500} />
		</div>
	),
};
