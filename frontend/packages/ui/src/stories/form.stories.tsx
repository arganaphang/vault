import type { Meta, StoryObj } from "@storybook/react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";

type ProfileFormValues = {
	email: string;
	username: string;
};

const meta = {
	title: "UI/Form",
	component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const form = useForm<ProfileFormValues>({
			defaultValues: {
				email: "jamie@example.com",
				username: "jamie.doe",
			},
		});

		const onSubmit = (values: ProfileFormValues) => {
			toast.success(`Saved ${values.username}`);
		};

		return (
			<>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6 rounded-xl border p-6"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input type="email" {...field} />
									</FormControl>
									<FormDescription>
										We will send important notifications to this address.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-fit">
							Save profile
						</Button>
					</form>
				</Form>
				<Toaster />
			</>
		);
	},
};
