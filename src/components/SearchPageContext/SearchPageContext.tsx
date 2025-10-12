import { useEffect } from "react";
import { useSearchData } from "../../hooks/useSearchData.js";

export const SearchPageContext = ({
	token,
	isSandbox,
	query,
}: {
	token: string;
	isSandbox: boolean;
	query: string;
}) => {
	const { searchData, facets, results, total, loading, error } = useSearchData(token, isSandbox);

	useEffect(() => {
		searchData({ query });
	}, [query, searchData]);

	if (error) return null;

	return <>{JSON.stringify({ facets, results, total, loading, error })}</>;
};
