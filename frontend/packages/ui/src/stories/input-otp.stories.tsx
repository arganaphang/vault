import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";

const meta = {
	title: "UI/Input OTP",
	component: InputOTP,
} satisfies Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState("");
		return (
			<InputOTP value={value} onChange={(value) => setValue(value)}>
				<InputOTPGroup>
					{[0, 1, 2].map((slot) => (
						<InputOTPSlot key={slot} index={slot} />
					))}
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup>
					{[3, 4, 5].map((slot) => (
						<InputOTPSlot key={slot} index={slot} />
					))}
				</InputOTPGroup>
			</InputOTP>
		);
	},
};
