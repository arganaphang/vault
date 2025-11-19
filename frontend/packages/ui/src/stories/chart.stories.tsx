import type { Meta, StoryObj } from "@storybook/react";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

const chartData = [
	{ month: "Jan", desktop: 148, mobile: 67 },
	{ month: "Feb", desktop: 212, mobile: 98 },
	{ month: "Mar", desktop: 186, mobile: 120 },
	{ month: "Apr", desktop: 241, mobile: 142 },
	{ month: "May", desktop: 215, mobile: 135 },
];

const meta = {
	title: "UI/Chart",
	component: ChartContainer,
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ChartContainer config={chartConfig} className="max-w-2xl">
			<LineChart data={chartData}>
				<CartesianGrid vertical={false} strokeDasharray="3 3" />
				<XAxis dataKey="month" tickLine={false} axisLine={false} />
				<YAxis tickLine={false} axisLine={false} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent />} />
				<Line
					dataKey="desktop"
					stroke="var(--color-desktop)"
					strokeWidth={2}
					dot={false}
					type="monotone"
				/>
				<Line
					dataKey="mobile"
					stroke="var(--color-mobile)"
					strokeWidth={2}
					dot={false}
					type="monotone"
				/>
			</LineChart>
		</ChartContainer>
	),
};
