import type { Meta, StoryObj } from "@storybook/react";
import { BellIcon, MailIcon, SettingsIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";

const meta = {
	title: "UI/Command",
	component: CommandDialog,
} satisfies Meta<typeof CommandDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button variant="outline" onClick={() => setOpen(true)}>
					Open command palette
				</Button>
				<CommandDialog open={open} onOpenChange={setOpen}>
					<CommandInput placeholder="Search actions..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>
								<MailIcon className="size-4" />
								Invite teammates
								<CommandShortcut>⌘I</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<BellIcon className="size-4" />
								Create notification rule
							</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem>
								<SettingsIcon className="size-4" />
								Preferences
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</CommandDialog>
			</>
		);
	},
};
