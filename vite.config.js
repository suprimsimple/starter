import { defineConfig, splitVendorChunkPlugin } from "vite"
import legacy from "@vitejs/plugin-legacy"
import ViteRestart from "vite-plugin-restart"
import { visualizer } from "rollup-plugin-visualizer"
import react from "@vitejs/plugin-react"
// import { ViteFaviconsPlugin } from "vite-plugin-favicon2"

const viteRestartValue = (() => {
	try {
		return ViteRestart({ restart: ["./templates/**/*"] })
	} catch {
		// @ts-ignore - Doesn't look like `vite-plugin-restart` exports correctly.
		return ViteRestart.default({ restart: ["./templates/**/*"] })
	}
})()

export default defineConfig(({ command }) => ({
	base: command === "serve" ? "" : "/dist/",
	publicDir: false,
	build: {
		emptyOutDir: false,
		manifest: true,
		outDir: "./public/dist/",
		rollupOptions: {
			input: {
				app: "./src/scripts/site.js",
			},
			output: {
				sourcemap: true,
			},
		},
	},
	plugins: [
		react({ fastRefresh: true }),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
		// viteRestartValue,
		// ViteFaviconsPlugin({
		// 	logo: "./src/example-logo.svg",
		// 	inject: false,
		// 	outputPath: "favicons",
		// }),
		visualizer({
			filename: "./public/dist/assets/stats.html",
			template: "treemap",
			sourcemap: true,
		}),
		// splitVendorChunkPlugin(),
	],
	worker: {
		plugins: [react()],
	},
	server: {
		host: "0.0.0.0",
		port: 3000,
		// strictPort: true,
	},
}))
