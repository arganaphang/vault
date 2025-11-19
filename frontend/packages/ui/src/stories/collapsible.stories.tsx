import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

const meta = {
	title: "UI/Collapsible",
	component: Collapsible,
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Collapsible className="space-y-2 rounded-lg border p-4">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-sm text-muted-foreground">Usage this month</p>
					<p className="text-xl font-semibold">24,823 events</p>
				</div>
				<CollapsibleTrigger asChild>
					<Button size="sm" variant="outline">
						Toggle details
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent className="space-y-2 text-sm text-muted-foreground">
				<p>API: 18,204 events</p>
				<p>Background jobs: 3,201 events</p>
				<p>Integrations: 3,418 events</p>
			</CollapsibleContent>
		</Collapsible>
	),
};
