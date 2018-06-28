import nanoid from "nanoid";

export const uid = () => {
	return nanoid(12);
};

export const propertySetMap = data => {
	const map = new Map();
	return Object.keys(data).reduce((final, key) => {
		final.set(key, new Set());
		return final;
	}, new Map());
};

export const isString = target => {
	return typeof target === "string";
};

export const isFunction = target => {
	return typeof target === "function";
};

export const isArray = target => {
	return Array.isArray(target);
};

export const ifString = (target, cb) => {
	return isString(target) && cb();
};

export const ifFunction = (target, cb) => {
	return isFunction(target) && cb();
};

export const firstTruthy = (cases, defaultValue) => {
	for (let _case of cases) {
		const result = _case();
		if (result) return result;
	}

	return defaultValue;
};

export const fileArray = (array, determinator) => {
	return array.reduce(
		(final, item) => {
			determinator(item) ? final[0].push(item) : final[1].push(item);

			return final;
		},
		[[], []]
	);
};

export const entriesOf = target => {
	if (target instanceof Set) return target.entries();
	return Object.entries(target);
};

export const clearArray = target => {
	target.forEach(item => {
		target.pop();
	});
};
