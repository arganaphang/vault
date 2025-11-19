import type { Meta, StoryObj } from "@storybook/react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const meta = {
	title: "UI/Toggle Group",
	component: ToggleGroup,
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ToggleGroup type="multiple" className="gap-3">
			{["Bold", "Italic", "Underline"].map((label) => (
				<ToggleGroupItem
					key={label}
					value={label.toLowerCase()}
					aria-label={label}
				>
					{label}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	),
};
