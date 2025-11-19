import type { Meta, StoryObj } from "@storybook/react";

import {
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Pagination as PaginationRoot,
} from "@/components/ui/pagination";

const meta = {
	title: "UI/Pagination",
	component: PaginationRoot,
} satisfies Meta<typeof PaginationRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<PaginationRoot>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				{[1, 2, 3].map((page) => (
					<PaginationItem key={page}>
						<PaginationLink href="#" isActive={page === 2}>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</PaginationRoot>
	),
};
