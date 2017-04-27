/**
 * @flow
 */

'use strict';

const INCREMENT_AGE = 'INCREMENT_AGE';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const INITIAL_STATE = {
	age: 10,
	name: 'SEAN',
	counter: 0,
	timer: null,
	multiplier: 1
}

export default (state = INITIAL_STATE, action) => {
	let {age} = action;
	switch (action.type) {
		case INCREMENT_AGE:
			age += .001 * state.counter;
			return {...state, age};
			break;
		case INCREMENT_COUNTER:
			let counter = state.counter;
			counter++;
			return {...state, counter};
			break;
		default:
			return {...state};
	}
}