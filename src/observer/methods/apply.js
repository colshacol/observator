import { observerStore } from "_stores/observerStore";

export const apply = observer => (target, thisArg, args) => {
	observerStore.addToStack({
		func: observer.__rawFunc,
		name: observer.__rawName,
		args
	});

	observer.observables.clear();

	const returnValue = observer.__rawFunc(...args);
	observerStore.popFromStack();

	return returnValue;
};
