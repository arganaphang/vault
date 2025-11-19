import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const meta = {
	title: "UI/Aspect Ratio",
	component: AspectRatio,
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl border">
			<img
				src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop"
				alt="Team collaborating"
				className="h-full w-full object-cover"
				loading="lazy"
			/>
		</AspectRatio>
	),
};
