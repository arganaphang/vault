import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

const meta = {
	title: "UI/Drawer",
	component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Notifications</DrawerTitle>
					<DrawerDescription>
						Choose which events should trigger an email.
					</DrawerDescription>
				</DrawerHeader>
				<div className="space-y-4 px-4 text-sm">
					{/* biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the checkbox */}
					<label className="flex items-center gap-3">
						<Checkbox defaultChecked />
						Mentioned in a comment
					</label>
					{/* biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the checkbox */}
					<label className="flex items-center gap-3">
						<Checkbox />
						Tasks assigned to me
					</label>
				</div>
				<DrawerFooter>
					<Button variant="outline">Cancel</Button>
					<Button>Save changes</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
};
