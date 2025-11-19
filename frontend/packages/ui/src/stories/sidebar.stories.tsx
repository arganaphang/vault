import type { Meta, StoryObj } from "@storybook/react";

import { BellIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarSeparator,
	SidebarTrigger,
} from "@/components/ui/sidebar";

const meta = {
	title: "UI/Sidebar",
	component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<SidebarProvider>
			<div className="flex min-h-[360px] w-full overflow-hidden rounded-xl border">
				<Sidebar>
					<SidebarContent>
						<SidebarHeader>
							<SidebarInput placeholder="Search..." />
						</SidebarHeader>
						<SidebarGroup>
							<SidebarGroupLabel>Projects</SidebarGroupLabel>
							<SidebarGroupAction aria-label="Add project">
								<PlusIcon className="size-3.5" />
							</SidebarGroupAction>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton isActive>Launch plan</SidebarMenuButton>
										<SidebarMenuBadge>5</SidebarMenuBadge>
										<SidebarMenuAction showOnHover>
											<BellIcon className="size-3.5" />
										</SidebarMenuAction>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>Design system</SidebarMenuButton>
										<SidebarMenuSub>
											<SidebarMenuSubItem>
												<SidebarMenuSubButton size="sm">
													Tokens
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
											<SidebarMenuSubItem>
												<SidebarMenuSubButton size="sm">
													Icons
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										</SidebarMenuSub>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
						<SidebarSeparator />
						<SidebarGroup>
							<SidebarGroupLabel>Recently viewed</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuSkeleton showIcon />
									<SidebarMenuSkeleton showIcon />
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
					<SidebarFooter>
						<Button variant="ghost" className="justify-start">
							Account settings
						</Button>
					</SidebarFooter>
				</Sidebar>
				<SidebarInset className="p-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-muted-foreground">Workspace</p>
							<h2 className="text-2xl font-semibold">Launch plan</h2>
						</div>
						<SidebarTrigger />
					</div>
					<div className="mt-6 space-y-4">
						<Card>
							<CardContent className="space-y-2">
								<p className="text-sm text-muted-foreground">Next milestone</p>
								<p className="text-lg font-semibold">Beta release</p>
							</CardContent>
						</Card>
					</div>
				</SidebarInset>
			</div>
		</SidebarProvider>
	),
};
