import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "@/components/ui/toggle";

const meta = {
	title: "UI/Toggle",
	component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Toggle aria-label="Toggle preview" pressed>
			Preview changes
		</Toggle>
	),
};
