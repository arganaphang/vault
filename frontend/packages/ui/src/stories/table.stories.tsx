import type { Meta, StoryObj } from "@storybook/react";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const meta = {
	title: "UI/Table",
	component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Member</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Tasks</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{[
					{ name: "Jamie Doe", status: "Active", tasks: 24 },
					{ name: "Kai Stone", status: "Reviewing", tasks: 12 },
				].map((row) => (
					<TableRow key={row.name}>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.status}</TableCell>
						<TableCell className="text-right">{row.tasks}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableCaption>Team workload</TableCaption>
		</Table>
	),
};
