import type { Meta, StoryObj } from "@storybook/react";

import { InboxIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";

const meta = {
	title: "UI/Empty",
	component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<InboxIcon />
				</EmptyMedia>
				<EmptyTitle>No conversations yet</EmptyTitle>
				<EmptyDescription>
					Start collaborating by inviting teammates to this workspace. We will
					sync discussions here.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button>Create a conversation</Button>
				<Button variant="outline">Invite teammates</Button>
			</EmptyContent>
		</Empty>
	),
};
