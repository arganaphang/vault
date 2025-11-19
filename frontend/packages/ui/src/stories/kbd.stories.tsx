import type { Meta, StoryObj } from "@storybook/react";

import { Kbd, KbdGroup } from "@/components/ui/kbd";

const meta = {
	title: "UI/Kbd",
	component: Kbd,
} satisfies Meta<typeof Kbd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-3">
			<p className="text-sm text-muted-foreground">
				Use shortcuts to stay in flow.
			</p>
			<KbdGroup>
				<Kbd>⌘</Kbd>
				<Kbd>K</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Shift</Kbd>
				<Kbd>Click</Kbd>
			</KbdGroup>
		</div>
	),
};
