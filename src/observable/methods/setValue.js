export const setValue = observable => (target, property, value) => {
	target.__rawData[property] = value || '';

	observable.observers.get(property).forEach(observer => {
		observer.func(...observer.args);
	})

	return true;
};
