
import React, { Component } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import { Provider } from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome"
import createStore from './reducers';
import Other from './containers/other/Other';
import Nav from './routes';
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
		this.renderScene = (route, navigator) => {
			<View style={{ flex: 1 }}>
				{route.title}
			</View>
		}
	}
	render() {
		console.log('STORE', store);
		return (
			<Provider store={store}>
				<View style={{flex: 1}}>
					<Nav style={{flex: 15}}>

					</Nav>
					{/*<Form />*/}
					{/*<Main />*/}
					<Other style={{flex: 1}} />
					{/*<View style={{width: 'auto', position: 'absolute', right: 0, top: 25, height: 'auto', zIndex: 100}}><Icon.Button backgroundColor="transparent" color="red" size={20} name="gear" /></View>*/}
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