import type { Meta, StoryObj } from "@storybook/react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const meta = {
	title: "UI/Select",
	component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Select defaultValue="daily">
			<SelectTrigger>
				<SelectValue placeholder="Select cadence" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Cadence</SelectLabel>
					<SelectItem value="daily">Daily</SelectItem>
					<SelectItem value="weekly">Weekly</SelectItem>
					<SelectItem value="monthly">Monthly</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectLabel>Custom</SelectLabel>
					<SelectItem value="custom">Custom automation</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};
