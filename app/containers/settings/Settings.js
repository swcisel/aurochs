
'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text
} from 'react-native'

class Settings extends Component {
	static navigationOptions = {
		title: 'Settings'
	}
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>Settings</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return (state);
}

export default connect(mapStateToProps)(Settings)