
'use strict';

import {REHYDRATE} from 'redux-persist/constants';

const INCREMENT_AGE = 'INCREMENT_AGE';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const RESET_AGE = 'RESET_AGE';
const TOGGLE_KEEPAWAKE = 'TOGGLE_KEEPAWAKE';

const INITIAL_STATE = {
	age: 10,
	keepAwake: false,
	name: 'SEAN',
	counter: 0,
	timer: null,
	multiplier: 1
}

export default (state = INITIAL_STATE, action) => {
	let {age, keepAwake} = action;
	switch (action.type) {
		case TOGGLE_KEEPAWAKE:
			keepAwake = !keepAwake;
			return {...state, keepAwake};
			break;
		case INCREMENT_AGE:
			age += .001 * Math.pow(Math.log(state.counter+2), 2);
			return {...state, age};
			break;
		case RESET_AGE:
			age = 10;
			return {...state, age};
			break;
		case INCREMENT_COUNTER:
			let counter = state.counter;
			counter++;
			return {...state, counter};
			break;
		case REHYDRATE:
			var incoming = action.payload.test
			if (incoming) return {...state, ...incoming}
			console.log('INCUMING', action);
			return state
		default:
			return {...state};
	}
}