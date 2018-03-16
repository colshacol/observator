export const addToStack = store => observer => {
	store.stack.push(observer);
};
