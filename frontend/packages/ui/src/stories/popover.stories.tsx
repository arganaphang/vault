import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const meta = {
	title: "UI/Popover",
	component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Open popover</Button>
			</PopoverTrigger>
			<PopoverContent className="w-64">
				<h4 className="font-semibold">Create automation</h4>
				<p className="text-muted-foreground text-sm">
					Build rules that notify your team when thresholds are exceeded.
				</p>
			</PopoverContent>
		</Popover>
	),
};
