import { propertySetMap } from '_utilities/propertySetMap'
import { setValue } from './methods/setValue'
import { getValue } from './methods/getValue'
import { observersOf } from './methods/observersOf'
import { getObserver } from './methods/getObserver'
import { addObserver } from './methods/addObserver'

export const observable = (data) => {
	class Observable {
		observers = propertySetMap(data);
		setValue = setValue(this);
		getValue = getValue(this);
		observersOf = observersOf(this);
		getObserver = getObserver(this);
		addObserver = addObserver(this);
		__rawData = data;
	}

	const _observable = new Observable();

	const _proxy = new Proxy(_observable, {
		get: _observable.getValue,
		set: _observable.setValue
	});

	return _proxy;
}

// export const observable = target => {
// 	const observers = new Map();

// 	const _target = new Proxy(target, {
// 		get(target, property) {
// 			const observer = observerStore.lastInStack;
// 			return property ? target[property] : target;
// 		},

// 		set(target, property, value) {
// 			console.log({ observers, target, property, value });
// 			target[property] = value;
// 			// observers.get(observer)
// 			Array.from(observers.entries()).forEach(([fn, values]) => {
// 				console.log("rerunning ", fn, { values });
// 				console.log("with args...", values.args);
// 				fn(...values.args);
// 			});

// 			return target[property];
// 		}
// 	});

// 	return _target;
// };
