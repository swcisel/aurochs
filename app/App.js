
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	AsyncStorage
} from 'react-native';
import {persistStore} from 'redux-persist';
import { Provider } from 'react-redux';
import createStore from './reducers';
import Main from './containers/main/Main';
import Other from './containers/other/Other';
import {Button} from 'aurochs/app/components'
const store = createStore();

/**
 * @todo write an app
 */
export default class aurochs extends Component {
	/**
	 * @returns {XML}
	 */
	constructor() {
		super();
		// this.buub = async (e) => {
		// 	try {
		// 		const value = await AsyncStorage.getItem('reduxPersist:test');
		// 		if (value !== null){
		// 			// We have data!!
		// 			console.log(value);
		// 		}
		// 		else {
		// 			console.log('now');
		// 		}
		// 	} catch (error) {
		// 		console.log('WAH!', error);
		// 		// Error retrieving data
		// 	}
		// 	persistStore(store, {storage: AsyncStorage});
		// }
	}
	render() {
		console.log('STORE', store);
		return (
			<Provider store={store}>
				<View style={{flex: 1}}>
					<Main></Main>
					<Other></Other>
				</View>
			</Provider>
		);
	}
}

/**
 * @const styles
 */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});