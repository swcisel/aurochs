
'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import KeepAwake from 'react-native-keep-awake';
import {
	View,
	Text,
	Switch
} from 'react-native'

class Settings extends Component {
	static navigationOptions = {
		title: 'Settings'
	}
	constructor(props) {
		super(props);
	}

	render() {
		const swoky = (v) => {
			const keepAwake = this.props.keepAwake;
			if (v === true) {
				KeepAwake.activate();
			}
			else {
				KeepAwake.deactivate();
			}
			this.props.dispatch({type: 'TOGGLE_KEEPAWAKE', keepAwake});
		}
		return (
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 20,
				borderTopWidth: 1,
				borderBottomWidth: 1,
				borderColor: 'gray',
				padding: 5
			}}>
				<Text style={{fontSize: 20, textAlignVertical: 'center', marginRight: 20}}>Keep awake</Text>
				<Switch value={this.props.keepAwake} onValueChange={swoky}></Switch>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const {keepAwake} = state.test;
	return {
		keepAwake
	}
}

export default connect(mapStateToProps)(Settings)