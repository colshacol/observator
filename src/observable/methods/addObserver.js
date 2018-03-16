import { observerStore } from '_stores/observerStore'

export const addObserver = observable => ({ observer, property }) => {
	observable.observers.get(property).add(observer);
	return observable.observers.get(observer);
};