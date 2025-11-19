import type { Meta, StoryObj } from "@storybook/react";

import {
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenu as NavigationMenuRoot,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const meta = {
	title: "UI/Navigation Menu",
	component: NavigationMenuRoot,
} satisfies Meta<typeof NavigationMenuRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<NavigationMenuRoot>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Product</NavigationMenuTrigger>
					<NavigationMenuContent className="p-4">
						<div className="grid gap-3 sm:w-[400px]">
							<NavigationMenuLink className="rounded-lg border p-4">
								<p className="text-sm font-medium">Design system</p>
								<p className="text-muted-foreground text-sm">
									Opinionated tokens, icons, and documentation.
								</p>
							</NavigationMenuLink>
							<NavigationMenuLink className="rounded-lg border p-4">
								<p className="text-sm font-medium">Developer tools</p>
								<p className="text-muted-foreground text-sm">
									Modular SDKs and monitoring.
								</p>
							</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
					<NavigationMenuContent className="p-4">
						<NavigationMenuLink className="rounded-lg border p-4">
							Customer stories
						</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuIndicator />
			<NavigationMenuViewport />
		</NavigationMenuRoot>
	),
};
