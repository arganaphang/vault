import type { Meta, StoryObj } from "@storybook/react";

import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const meta = {
	title: "UI/Tooltip",
	component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="ghost" size="icon">
						<InfoIcon className="size-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Helpful context appears here.</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
};
