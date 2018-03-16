export const entriesOf = (target) => {
	if (target instanceof Set) return target.entries();
	return Object.entries(target);
}