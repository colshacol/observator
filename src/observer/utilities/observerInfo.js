import { isFunction } from "_utilities/isFunction";
import { isString } from "_utilities/isString";

export const observerInfo = args => {
	return args.length && isString(args[0]) && isFunction(args[1])
		? { func: args[1], name: args[0] }
		: { func: args[0], name: "ANON" };
};
