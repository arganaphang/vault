import type { Meta, StoryObj } from "@storybook/react";

import {
	AvatarFallback,
	AvatarImage,
	Avatar as AvatarRoot,
} from "@/components/ui/avatar";

const meta = {
	title: "UI/Avatar",
	component: AvatarRoot,
} satisfies Meta<typeof AvatarRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex items-center gap-6">
			<AvatarRoot className="size-16">
				<AvatarImage
					src="https://avatars.githubusercontent.com/u/227909?s=200"
					alt="Avatar"
				/>
				<AvatarFallback>JD</AvatarFallback>
			</AvatarRoot>
			<div>
				<div className="font-semibold">Jamie Doe</div>
				<div className="text-muted-foreground text-sm">Design Lead</div>
			</div>
		</div>
	),
};
