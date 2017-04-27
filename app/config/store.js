import { compose, applyMiddleware, createStore } from 'redux'
import {AsyncStorage} from 'react-native'
import {autoRehydrate, persistStore} from 'redux-persist'

export default (rootReducer) => {
	"use strict";
	const store = createStore(
		rootReducer,
		undefined,
		compose()
	);
	persistStore(store, {storage: AsyncStorage});
	return store;
};