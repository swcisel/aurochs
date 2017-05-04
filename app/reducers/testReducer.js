
'use strict';

import {REHYDRATE} from 'redux-persist/constants';

const INCREMENT_AGE = 'INCREMENT_AGE';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const RESET_AGE = 'RESET_AGE';
const TOGGLE_KEEPAWAKE = 'TOGGLE_KEEPAWAKE';
const INCREMENT_TAPS = 'INCREMENT_TAPS';
const INCREMENT_LAPS = 'INCREMENT_LAPS';
const BUY_GROWER = 'BUY_GROWER';
const INITIAL_STATE = {
	age: 10,
	keepAwake: false,
	name: 'SEAN',
	counter: 0,
	timer: null,
	multiplier: 1,
	taps: 0,
	laps: 0,
	growers: 0,
	growerCost: 1
}

export default (state = INITIAL_STATE, action) => {
	let {age, keepAwake, taps, laps, growers, growerCost} = action;
	switch (action.type) {
		case BUY_GROWER:
			age -= growerCost;
			growerCost = Math.floor(Math.pow(growers, 1.1));
			growers++;
			console.log('buy grower', age, growerCost, growers);
			return {...state, age, growers, growerCost};
			break;
		case INCREMENT_LAPS:
			laps++;
			return {...state, laps};
			break;
		case INCREMENT_TAPS:
			taps++;
			return {...state, taps}
			break;
		case TOGGLE_KEEPAWAKE:
			keepAwake = !keepAwake;
			return {...state, keepAwake};
			break;
		case INCREMENT_AGE:
			age += .001 * Math.pow(Math.log(state.taps) + Math.log(state.counter+2), 2);
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