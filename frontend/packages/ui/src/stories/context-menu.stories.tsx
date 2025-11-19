import type { Meta, StoryObj } from "@storybook/react";

import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

const meta = {
	title: "UI/Context Menu",
	component: ContextMenu,
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger asChild>
				<div className="rounded-xl border p-6 text-sm shadow-sm">
					<p className="font-semibold">Quarterly Report.pdf</p>
					<p className="text-muted-foreground">Right click to reveal actions</p>
				</div>
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuLabel>Workspace</ContextMenuLabel>
				<ContextMenuItem>Open</ContextMenuItem>
				<ContextMenuItem>Share link</ContextMenuItem>
				<ContextMenuCheckboxItem checked>Starred</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuSub>
					<ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
					<ContextMenuSubContent className="w-48">
						<ContextMenuItem>Design</ContextMenuItem>
						<ContextMenuItem>Marketing</ContextMenuItem>
						<ContextMenuItem>Finance</ContextMenuItem>
					</ContextMenuSubContent>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuRadioGroup value="pdf">
					<ContextMenuLabel inset>Export as</ContextMenuLabel>
					<ContextMenuRadioItem value="pdf">PDF</ContextMenuRadioItem>
					<ContextMenuRadioItem value="csv">CSV</ContextMenuRadioItem>
				</ContextMenuRadioGroup>
			</ContextMenuContent>
		</ContextMenu>
	),
};
