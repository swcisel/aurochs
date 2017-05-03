'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	WebView
} from 'react-native'

class WeeklyAd extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<WebView location='https://flyers.shopfamilyfare.com/h/m/familyfare/weeklyad/browse?flyer_run_id=198156&locale=en-US&type=1'></WebView>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return (state);
}

export default connect(mapStateToProps)(WeeklyAd)