import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const meta = {
	title: "UI/Radio Group",
	component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="monthly" className="space-y-3">
			{[
				{ label: "Monthly billing", value: "monthly" },
				{ label: "Annual billing", value: "annual" },
			].map((option) => (
				<div key={option.value} className="flex items-center gap-3">
					<RadioGroupItem value={option.value} id={option.value} />
					<Label htmlFor={option.value}>{option.label}</Label>
				</div>
			))}
		</RadioGroup>
	),
};
