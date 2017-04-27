export const INCREMENT_AGE = 'INCREMENT_AGE';

export function incrementAge(age) {
	"use strict";
	age++;
	console.log('arguments');
	return {type: INCREMENT_AGE, age};
}