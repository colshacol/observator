import { observerStore } from "_stores/observerStore";

const getValue = observable => (target, property) => {
	const { lastInStack } = observerStore;
	const observers = observable.observersOf(property);

	if (lastInStack && !observers.has(lastInStack)) {
		observers.add(lastInStack);
	}		

	return property ? target.__rawData[property] : target.__rawData;
};

export { getValue };
