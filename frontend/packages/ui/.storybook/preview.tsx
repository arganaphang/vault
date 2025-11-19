import type { Preview } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: for jsx decorators
import React from "react";
import "../src/index.css";

const preview: Preview = {
	globalTypes: {
		theme: {
			name: "Theme",
			description: "Switch between light and dark themes",
			defaultValue: "light",
			toolbar: {
				icon: "mirror",
				items: [
					{ value: "light", icon: "sun", title: "Light" },
					{ value: "dark", icon: "moon", title: "Dark" },
				],
				dynamicTitle: true,
			},
		},
	},
	parameters: {
		layout: "fullscreen",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story, context) => {
			const theme = context.globals.theme || "light";

			// Apply theme class directly to document root
			if (typeof document !== "undefined") {
				document.documentElement.classList.remove("light", "dark");
				document.documentElement.classList.add(theme);
			}

			return (
				<div className="bg-background text-foreground min-h-screen p-8">
					<Story />
				</div>
			);
		},
	],
};

export default preview;
