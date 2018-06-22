import { observer, observable } from "observator";
import randomString from "randomstring";

// DOM stuff that is pretty irrelevant.
const elById = id => document.getElementById(id);
const nameInput = elById("nameInput");
const nameValue = elById("nameValue");
const nameSetter = elById("nameSetter");
const uidInput = elById("uidInput");
const uidValue = elById("uidValue");
const uidSetter = elById("uidSetter");

// Define the observable state. At this point it requires
// an object that it maps out to store observers.

export const state = observable({
	name: "Jeff",
	uid: randomString.generate(),
	foo: {
		bar: {
			baz: {
				boo: "12345"
			}
		}
	}
});

// Define observers.

// observer() takes two arguments: a name for the observer
// and the function that will execute when its dependencies
// change.

const logName = observer("logName", () => {
	console.log(`state.name is "${state.name}"`);
	nameValue.innerText = `state.name is "${state.name}"`;
	console.log(state.raw());
});

const foo = observer(() => {
	console.log(`foo.... is "${state.foo.bar.baz.boo}"`);
	console.log(state.raw());
});

console.log(state);

console.log(state.raw());

// the name is optional, though.

const logUID = observer(() => {
	console.log(`state.uid is "${state.uid}"`);
	uidValue.innerText = `state.uid is "${state.uid}"`;
	console.log(state.raw());
});

// When one of the buttons are clicked, the state values
// will be set, causing the observables to react.

nameSetter.addEventListener("click", event => {
	state.name = nameInput.value;
});

uidSetter.addEventListener("click", event => {
	state.uid = uidInput.value;
});
