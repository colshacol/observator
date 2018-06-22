import { observerStore } from "./observerStore";
import { propertySetMap } from "utilities";
import { isFunction } from "_utilities";
import { isString } from "_utilities";

const observerInfo = args => {
	return args.length && isString(args[0]) && isFunction(args[1])
		? { func: args[1], name: args[0] }
		: { func: args[0], name: "ANON" };
};

const apply = observer => (target, thisArg, args) => {
	observerStore.addToStack({
		func: observer.__rawFunc,
		name: observer.__rawName,
		args
	});

	observer.observables.clear();

	const returnValue = observer.__rawFunc(...args);
	observerStore.popFromStack();

	return observer;
};

export const observer = (...args) => {
	const { func, name } = observerInfo(args);

	class Observer {
		observables = propertySetMap({});

		__rawFunc = func;
		__rawName = name;
	}

	const _observer = new Observer();

	const proxy = new Proxy(() => {}, {
		apply: apply(_observer)
	});

	return proxy();
};
