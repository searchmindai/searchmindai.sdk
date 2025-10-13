import preact from "@preact/preset-vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [preact(), dts({ insertTypesEntry: true, tsconfigPath: "./tsconfig.app.json" })],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "@searchmindai/sdk",
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === "style.css") return "ui.css";
					return assetInfo.name!;
				},
			},
		},
		cssCodeSplit: false,
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			react: "preact/compat",
			"react-dom": "preact/compat",
			"react/jsx-runtime": "preact/jsx-runtime",
		},
	},
});
