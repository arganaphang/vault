import type { Meta, StoryObj } from "@storybook/react";

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

const meta = {
	title: "UI/Resizable",
	component: ResizablePanelGroup,
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ResizablePanelGroup className="min-h-[200px] overflow-hidden rounded-xl border">
			<ResizablePanel defaultSize={60} className="p-4">
				<p className="text-sm text-muted-foreground">
					Drag the handle to resize panels. Great for split editors and
					dashboards.
				</p>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={40} className="bg-muted/30 p-4">
				<p className="text-sm font-medium">Measurements</p>
			</ResizablePanel>
		</ResizablePanelGroup>
	),
};
