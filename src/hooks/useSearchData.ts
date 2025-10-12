import { useCallback, useState } from "react";

interface SearchParams {
	query: string;
	limit?: number;
	offset?: number;
	facets?: boolean;
}

interface SearchResult {
	facets: Record<string, unknown>;
	results: any[];
	total: number;
}

interface UseSearchDataReturn {
	searchData: (params: SearchParams) => Promise<void>;
	facets: Record<string, unknown>;
	results: any[];
	total: number;
	loading: boolean;
	error: string | null;
}

export const useSearchData = (token: string, isSandbox: boolean = false): UseSearchDataReturn => {
	const [facets, setFacets] = useState<Record<string, unknown>>({});
	const [results, setResults] = useState<any[]>([]);
	const [total, setTotal] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const searchData = useCallback(
		async ({ query, limit = 10, offset = 0, facets: includeFacets = true }: SearchParams) => {
			if (!query.trim()) {
				setResults([]);
				setFacets({});
				setTotal(0);
				return;
			}

			setLoading(true);
			setError(null);

			try {
				const myHeaders = new Headers();
				myHeaders.append("API-KEY", token);
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					query: query.trim(),
					limit,
					offset,
					facets: includeFacets,
				});

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow",
				} as RequestInit;

				const response = await fetch(
					`${isSandbox ? "https://dev.api.searchmindai.com" : "https://api.searchmindai.com"}/v2/search`,
					requestOptions,
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const result: SearchResult = await response.json();

				setFacets(result.facets || {});
				setResults(result.results || []);
				setTotal(result.total || 0);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : "Erro na busca";
				setError(errorMessage);
				console.error("Erro na busca:", err);
			} finally {
				setLoading(false);
			}
		},
		[token, isSandbox],
	);

	return {
		searchData,
		facets,
		results,
		total,
		loading,
		error,
	};
};
