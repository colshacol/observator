import { propertySetMap } from "utilities/propertySetMap";
import { remap } from "./methods/remap";
import { observerInfo } from "./utilities/observerInfo";
import { apply } from './methods/apply';
// import { foo } from './methods/foo';

export const observer = (...args) => {
	const { func, name } = observerInfo(args);

	class Observer {
		observables = propertySetMap({});

		__rawFunc = func;
		__rawName = name;
	}

	const _observer = new Observer();

	const _proxy = new Proxy(() => {}, {
		apply: apply(_observer)
	});

	return _proxy;
};
