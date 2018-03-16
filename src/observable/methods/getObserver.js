import { observerStore } from "_stores/observerStore";

export const getObserver = observable => ({ property }) => {
	return observerStore.lastInStack && observable.observersOf({ property });
};
