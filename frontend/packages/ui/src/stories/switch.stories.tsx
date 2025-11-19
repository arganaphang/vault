import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@/components/ui/switch";

const meta = {
	title: "UI/Switch",
	component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		// biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the switch
		<label className="flex items-center gap-3">
			<Switch defaultChecked id="notify" />
			<div>
				<span className="font-medium">Notify team</span>
				<p className="text-muted-foreground text-sm">
					Sends an email to collaborators.
				</p>
			</div>
		</label>
	),
};
