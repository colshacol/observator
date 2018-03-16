export const propertySetMap = (data) => {
	const map = new Map();
	return Object.keys(data).reduce((final, key) => {
		final.set(key, new Set());
		return final;
	}, new Map());	
}