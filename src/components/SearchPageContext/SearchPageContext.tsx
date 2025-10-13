import { Badge } from "@faststore/ui";
import "@faststore/ui/src/components/atoms/Badge/styles.scss";

export const SearchPageContext = ({
	token,
	isSandbox,
	query,
}: {
	token: string;
	isSandbox: boolean;
	query: string;
}) => {
	return (
		<>
			<Badge variant="neutral">Neutral</Badge>
			<Badge variant="info">Info</Badge>
			<Badge variant="highlighted">Highlighted</Badge>
			<Badge variant="neutral" size="big">
				Neutral & Big
			</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="danger">Danger</Badge>
			{JSON.stringify({
				token,
				isSandbox,
				query,
			})}
		</>
	);
};
