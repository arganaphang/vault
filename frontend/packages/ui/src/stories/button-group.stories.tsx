import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
	ButtonGroup,
	ButtonGroupSeparator,
	ButtonGroupText,
} from "@/components/ui/button-group";

const meta = {
	title: "UI/Button Group",
	component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ButtonGroup className="rounded-md border">
			<ButtonGroupText className="text-sm font-medium">Status</ButtonGroupText>
			<Button variant="ghost">Backlog</Button>
			<Button variant="ghost">In progress</Button>
			<Button>Review</Button>
			<ButtonGroupSeparator />
			<Button variant="outline">Publish</Button>
		</ButtonGroup>
	),
};
