import { observerStore } from '_stores/observerStore'

export const addObserverOfProperty = observable => ({ observer, property }) => {
	observable.observers.get(property).add(observer);
}