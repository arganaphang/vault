import type { Meta, StoryObj } from "@storybook/react";

import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
	FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const meta = {
	title: "UI/Field",
	component: Field,
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<FieldSet className="space-y-6">
			<FieldLegend>Profile</FieldLegend>
			<FieldGroup>
				<Field orientation="responsive">
					<FieldLabel>Full name</FieldLabel>
					<FieldContent>
						<Input defaultValue="Jamie Doe" />
						<FieldDescription>Displayed to collaborators.</FieldDescription>
					</FieldContent>
				</Field>
				<Field orientation="responsive">
					<FieldLabel>
						<FieldTitle>Website</FieldTitle>
						<FieldDescription>Include the protocol.</FieldDescription>
					</FieldLabel>
					<FieldContent>
						<Input placeholder="https://example.com" aria-invalid />
						<FieldError errors={[{ message: "Enter a valid URL" }]} />
					</FieldContent>
				</Field>
			</FieldGroup>
			<FieldSeparator>Notifications</FieldSeparator>
			<FieldGroup>
				<Field orientation="horizontal">
					<FieldLabel>Email updates</FieldLabel>
					<FieldContent>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the switch */}
						<label className="flex items-center gap-2">
							<Switch defaultChecked />
							Weekly summary
						</label>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: we need to use a label for the switch */}
						<label className="flex items-center gap-2">
							<Switch />
							Comments
						</label>
					</FieldContent>
				</Field>
			</FieldGroup>
		</FieldSet>
	),
};
