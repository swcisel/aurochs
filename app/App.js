
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text
} from 'react-native';
import { Provider } from 'react-redux';
import createStore from './reducers';
import Main from './containers/main/Main';
import Other from './containers/other/Other';
const store = createStore();

/**
 * @todo write an app
 */
export default class aurochs extends Component {
	/**
	 * @returns {XML}
	 */
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