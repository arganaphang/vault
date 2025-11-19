import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar as CalendarRoot } from "@/components/ui/calendar";

const meta = {
	title: "UI/Calendar",
	component: CalendarRoot,
} satisfies Meta<typeof CalendarRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [date, setDate] = useState<Date | undefined>(new Date());

		return (
			<div className="flex flex-col gap-4">
				<CalendarRoot
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-lg border"
				/>
				<p className="text-sm text-muted-foreground">
					Selected: {date ? date.toLocaleDateString() : "Choose a day"}
				</p>
			</div>
		);
	},
};
