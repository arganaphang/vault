import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemHeader,
	ItemMedia,
	ItemSeparator,
	ItemTitle,
} from "@/components/ui/item";

const meta = {
	title: "UI/Item",
	component: Item,
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ItemGroup className="divide-y rounded-xl border">
			{[1, 2].map((item) => (
				<React.Fragment key={item}>
					<Item className="flex-col items-start gap-3 text-left sm:flex-row sm:items-center">
						<ItemMedia variant="image">
							<img
								src={`https://picsum.photos/seed/${item}/80/80`}
								alt=""
								loading="lazy"
							/>
						</ItemMedia>
						<ItemContent>
							<ItemHeader>
								<ItemTitle>Research sprint #{item}</ItemTitle>
								<ItemDescription>
									Interviews, synthesis, and prototypes for the growth team.
								</ItemDescription>
							</ItemHeader>
						</ItemContent>
						<ItemActions>
							<Button variant="secondary" size="sm">
								View
							</Button>
							<Button size="sm">Share</Button>
						</ItemActions>
					</Item>
					{item === 1 && <ItemSeparator />}
				</React.Fragment>
			))}
		</ItemGroup>
	),
};
