import { createStore } from 'redux'

export default (rootReducer) => {
	"use strict";
	const store = createStore(rootReducer);

	return store;
};