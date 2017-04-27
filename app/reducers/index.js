import {combineReducers} from 'redux'
import testReducer from './testReducer'
import configureStore from '../config/store'

export default () => {

	const rootReducer = combineReducers({
		test: testReducer
	});
	return configureStore(rootReducer);
}