import { SearchPageContext } from "../components/index.js";

export default function App() {
	const token = import.meta.env.VITE_TOKEN;
	const isSandbox = import.meta.env.VITE_IS_SANDBOX === "true";
	const query = import.meta.env.VITE_QUERY;

	if (!token || !query) {
		return (
			<div style={{ color: "red", padding: "16px", marginBottom: "16px" }}>
				Erro: VITE_TOKEN e VITE_QUERY devem ser definidos nas variáveis de ambiente.
			</div>
		);
	}

	if (!query.trim()) {
		return (
			<div style={{ color: "red", padding: "16px", marginBottom: "16px" }}>Erro: VITE_QUERY não pode estar vazio.</div>
		);
	}

	return <SearchPageContext isSandbox={isSandbox} token={token} query={query} />;
}
