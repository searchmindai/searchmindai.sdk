type ClassValue = string | number | boolean | undefined | null | ClassRecord | ClassValue[];

interface ClassRecord {
	[key: string]: boolean | undefined | null;
}

export function classNames(...classes: ClassValue[]): string {
	const result: string[] = [];

	for (const cls of classes) {
		if (!cls) continue;

		if (typeof cls === "string" || typeof cls === "number") {
			result.push(String(cls));
		} else if (Array.isArray(cls)) {
			const nested = classNames(...cls);
			if (nested) {
				result.push(nested);
			}
		} else if (typeof cls === "object") {
			for (const [key, value] of Object.entries(cls)) {
				if (value) {
					result.push(key);
				}
			}
		}
	}

	return result.join(" ");
}

export default classNames;
