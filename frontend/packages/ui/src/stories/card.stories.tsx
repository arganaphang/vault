import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const meta = {
	title: "UI/Card",
	component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Card className="max-w-xl">
			<CardHeader className="border-b">
				<div>
					<CardTitle>Weekly summary</CardTitle>
					<CardDescription>
						Key metrics collected from your workspace.
					</CardDescription>
				</div>
				<CardAction>
					<Button size="sm" variant="secondary">
						Download
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent className="space-y-4 py-6">
				<div>
					<p className="text-sm text-muted-foreground">Active users</p>
					<p className="text-3xl font-semibold">1,437</p>
				</div>
				<div>
					<p className="text-sm text-muted-foreground">Open tasks</p>
					<p className="text-3xl font-semibold">82</p>
				</div>
			</CardContent>
			<CardFooter className="border-t justify-between">
				<span className="text-sm text-muted-foreground">Updated just now</span>
				<Button variant="ghost" size="sm">
					View details
				</Button>
			</CardFooter>
		</Card>
	),
};
