import type { Meta, StoryObj } from "@storybook/react";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

const meta = {
	title: "UI/Toasts",
	component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="space-y-3">
			<Button
				onClick={() =>
					toast.success("Invite sent", {
						description: "We emailed Jamie about the new project.",
					})
				}
			>
				Trigger toast
			</Button>
			<Toaster />
		</div>
	),
};
