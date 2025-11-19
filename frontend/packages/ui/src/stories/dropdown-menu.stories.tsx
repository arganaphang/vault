import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const meta = {
	title: "UI/Dropdown Menu",
	component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Quick actions</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem checked>
					Email notifications
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem>Push notifications</DropdownMenuCheckboxItem>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value="light">
					<DropdownMenuLabel inset>Theme</DropdownMenuLabel>
					<DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
				<DropdownMenuSeparator />
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>More tools</DropdownMenuSubTrigger>
					<DropdownMenuSubContent className="w-40">
						<DropdownMenuItem>
							API keys
							<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>Audit logs</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};
