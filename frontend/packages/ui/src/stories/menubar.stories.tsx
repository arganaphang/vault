import type { Meta, StoryObj } from "@storybook/react";

import {
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarLabel,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	Menubar as MenubarRoot,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";

const meta = {
	title: "UI/Menubar",
	component: MenubarRoot,
} satisfies Meta<typeof MenubarRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<MenubarRoot>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						New Tab <MenubarShortcut>⌘T</MenubarShortcut>
					</MenubarItem>
					<MenubarCheckboxItem checked>Autosave</MenubarCheckboxItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Share</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>Email</MenubarItem>
							<MenubarItem>Copy link</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarLabel inset>Density</MenubarLabel>
					<MenubarRadioGroup value="comfortable">
						<MenubarRadioItem value="compact">Compact</MenubarRadioItem>
						<MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
					</MenubarRadioGroup>
				</MenubarContent>
			</MenubarMenu>
		</MenubarRoot>
	),
};
