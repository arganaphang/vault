import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components/ui/checkbox";

const meta = {
	title: "UI/Checkbox",
	component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-4">
			{/* biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the checkbox */}
			<label className="flex items-center gap-3 text-sm font-medium">
				<Checkbox defaultChecked />
				Receive weekly product updates
			</label>
			{/* biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the checkbox */}
			<label className="flex items-center gap-3 text-sm font-medium">
				<Checkbox />
				Enable beta features
			</label>
		</div>
	),
};
