import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	Sheet as SheetRoot,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const meta = {
	title: "UI/Sheet",
	component: SheetRoot,
} satisfies Meta<typeof SheetRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<SheetRoot>
			<SheetTrigger asChild>
				<Button variant="outline">Open sheet</Button>
			</SheetTrigger>
			<SheetContent side="right" className="sm:max-w-md">
				<SheetHeader>
					<SheetTitle>New campaign</SheetTitle>
					<SheetDescription>
						Configure targeting, budget, and scheduling before launch.
					</SheetDescription>
				</SheetHeader>
				<div className="space-y-4 px-4 text-sm">
					{/* biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the input */}
					<label className="space-y-2">
						<span>Campaign name</span>
						<Input placeholder="Brand awareness" />
					</label>
					{/* biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the input */}
					<label className="space-y-2">
						<span>Budget</span>
						<Input type="number" placeholder="10,000" />
					</label>
				</div>
				<SheetFooter>
					<Button variant="outline">Cancel</Button>
					<Button>Launch</Button>
				</SheetFooter>
			</SheetContent>
		</SheetRoot>
	),
};
