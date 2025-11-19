import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	Dialog as DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const meta = {
	title: "UI/Dialog",
	component: DialogRoot,
} satisfies Meta<typeof DialogRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<DialogRoot>
			<DialogTrigger asChild>
				<Button>Schedule review</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Schedule a design review</DialogTitle>
					<DialogDescription>
						Share availability and we will invite collaborators to the session.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-3 text-sm">
					<p className="text-muted-foreground">
						Reviews typically run for 45 minutes. Attach links and files so the
						team can prepare.
					</p>
					<Button variant="outline">Attach files</Button>
				</div>
				<DialogFooter>
					<Button type="button" variant="outline">
						Cancel
					</Button>
					<Button type="submit">Send invite</Button>
				</DialogFooter>
			</DialogContent>
		</DialogRoot>
	),
};
