import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/react-vite",
		options: {
			strictMode: true,
		},
	},
	async viteFinal(config) {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve?.alias,
					"@": path.resolve(__dirname, "../src"),
					react: path.resolve(__dirname, "../node_modules/react"),
					"react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
				},
				dedupe: ["react", "react-dom"],
			},
			esbuild: {
				...config.esbuild,
				jsx: "automatic",
				jsxImportSource: "react",
			},
		};
	},
};

export default config;
