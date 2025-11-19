import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta = {
	title: "UI/Tabs",
	component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-full max-w-xl">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="activity">Activity</TabsTrigger>
			</TabsList>
			<TabsContent value="overview" className="rounded-xl border p-4">
				Metrics, automation, and history in one place.
			</TabsContent>
			<TabsContent value="activity" className="rounded-xl border p-4">
				Recent changes to this project.
			</TabsContent>
		</Tabs>
	),
};
