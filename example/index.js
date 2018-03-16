import { observer, observable } from "observator";
import randomString from "randomstring";

// DOM stuff that is pretty irrelevant.
const elById = (id) => document.getElementById(id);
const nameInput = elById('nameInput')
const nameValue = elById('nameValue')
const nameSetter = elById('nameSetter')
const uidInput = elById('uidInput')
const uidValue = elById('uidValue')
const uidSetter = elById('uidSetter')

// Define the observable state. At this point it requires
// an object that it maps out to store observers.

export const state = observable({
	name: "Jeff",
	uid: randomString.generate()
});

// Define observers.

// observer() takes two arguments: a name for the observer
// and the function that will execute when its dependencies
// change.

const logName = observer("logName", (foo) => {
	console.log(`state.name is "${state.name}"`);
	nameValue.innerText = `state.name is "${state.name}"`
});

// the name is optional, though.

const logUID = observer((bar) => {
	console.log(`state.uid is "${state.uid}"`);
	uidValue.innerText = `state.uid is "${state.uid}"`
});

// Unline MobX's autorun (which our observer basically mimics),
// the provided observer functions are not ran once by default.

// To activate the observers, they must be invoked separately. This
// allows us to provide arguments that are stored and provided to
// the function every time it reacts to an observable change.

logName(true)
logUID('blah')

// When one of the buttons are clicked, the state values
// will be set, causing the observables to react.

nameSetter.addEventListener('click', (event) => {
	state.name = nameInput.value;
})

uidSetter.addEventListener('click', (event) => {
	state.uid = uidInput.value;
})