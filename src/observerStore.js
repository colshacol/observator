export const addToStack = store => observer => {
	store.stack.push(observer);
};

export const popFromStack = store => () => {
	store.stack.pop();
};

class ObserverStore {
	stack = [];

	addToStack = addToStack(this);
	popFromStack = popFromStack(this);

	get lastInStack() {
		// console.log('observerStore.lastInStack ===', this.stack[this.stack.length - 1])
		return this.stack[this.stack.length - 1];
	}

	get observerActive() {
		// console.log('observerStore.observerActive ===',!!this.stack[this.stack.length - 1])
		return !!this.stack[this.stack.length - 1];
	}
}

export const observerStore = (window.observerStore = new ObserverStore());
