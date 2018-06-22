import { propertySetMap } from "_utilities";
import { observerStore } from "./observerStore";

const addObserverOfProperty = observable => ({ observer, property }) => {
	observable.observers.get(property).add(observer);
};

const addObserver = observable => ({ observer, property }) => {
	observable.observers.get(property).add(observer);
	return observable.observers.get(observer);
};

const getObserver = observable => ({ property }) => {
	// If there is an observer on the stack, try to
	return observerStore.lastInStack && observable.observersOf({ property });
};

const getApplyTrap = observable => (target, property) => {
	return (...args) => {
		const methodName = property;
		return observable.publicMethods[methodName](...args);
	};
};

const getValue = observable => (target, property) => {
	if (property in observable.publicMethods)
		return observable.getApplyTrap(target, property);

	const { lastInStack } = observerStore;
	const observers = observable.observersOf(property);

	if (lastInStack && !observers.has(lastInStack)) {
		observers.add(lastInStack);
	}

	return property ? target.__rawData[property] : target.__rawData;
};

const observersOf = observable => property => {
	return observable.observers.get(property);
};

const setValue = observable => (target, property, value) => {
	target.__rawData[property] = value || "";

	observable.observers.get(property).forEach(observer => {
		observer.func(...observer.args);
	});

	return true;
};

const publicMethods = observer => {
	const raw = () => {
		return observer.__rawData;
	};

	return {
		raw
	};
};

const createObservable = data => {
	class Observable {
		// Functions that are observing individual
		// properties on this data
		observers = propertySetMap(data);
		setValue = setValue(this);
		getValue = getValue(this);
		observersOf = observersOf(this);
		getObserver = getObserver(this);
		addObserver = addObserver(this);
		getApplyTrap = getApplyTrap(this);
		publicMethods = publicMethods(this);
		__rawData = data;
	}

	return new Observable();
};

export const observable = data => {
	const _observable = createObservable(data);

	const proxy = new Proxy(_observable, {
		get: _observable.getValue,
		set: _observable.setValue
	});

	return proxy;
};
