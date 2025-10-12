interface ImportMetaEnv {
	readonly VITE_TOKEN: string;
	readonly VITE_IS_SANDBOX: string;
	readonly VITE_QUERY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
