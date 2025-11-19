import type { Meta, StoryObj } from "@storybook/react";

import { SettingsIcon } from "lucide-react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "@/components/ui/input-group";

const meta = {
	title: "UI/Input Group",
	component: InputGroup,
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-4">
			<InputGroup>
				<InputGroupAddon>
					<InputGroupText>https://</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput placeholder="acme.com" />
				<InputGroupAddon align="inline-end">
					<InputGroupButton size="icon-sm" variant="ghost">
						<SettingsIcon className="size-4" />
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupTextarea placeholder="Share some context..." />
			</InputGroup>
		</div>
	),
};
