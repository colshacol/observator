export const firstTruthy = (cases, defaultValue) => {
	for (let _case of cases) {
		const result = _case();
		if (result) return result;
	}

	return defaultValue;

	// return values.find(value => !!value())[0] || defaultValue;
}