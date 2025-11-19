import type { Meta, StoryObj } from "@storybook/react";
import {
	AccordionContent,
	AccordionItem,
	Accordion as AccordionRoot,
	AccordionTrigger,
} from "@/components/ui/accordion";

const meta = {
	title: "UI/Accordion",
	component: AccordionRoot,
} satisfies Meta<typeof AccordionRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: "single",
		collapsible: true,
		className: "w-full max-w-xl divide-y",
	},
	render: (args) => (
		<AccordionRoot {...args}>
			<AccordionItem value="item-1">
				<AccordionTrigger className="text-base font-medium">
					What is included?
				</AccordionTrigger>
				<AccordionContent>
					Every component ships with sensible defaults, slot based styling, and
					first class dark mode support.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger className="text-base font-medium">
					Can I customize everything?
				</AccordionTrigger>
				<AccordionContent>
					Tokens are exposed via CSS variables, so it is straightforward to
					adjust spacing, colors, or typography.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger className="text-base font-medium">
					Is it production ready?
				</AccordionTrigger>
				<AccordionContent>
					Yes! These components power production applications and were built on
					top of Radix primitives.
				</AccordionContent>
			</AccordionItem>
		</AccordionRoot>
	),
};
