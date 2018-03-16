export const observersOf = observable => property => {
	return observable.observers.get(property);
};
