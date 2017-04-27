import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Text,
	View,
	AsyncStorage
} from 'react-native';
import styles from './Style'
/**
 * @returns aoeu
 */
class Other extends Component {
	state = {
		timer: null,
		counter: 0
	}

	componentWillMount() {
		let timer = setInterval(this.tick, 1000);
		this.setState({timer});
	}
	componentWillUnmount() {
		this.clearInterval(this.state.timer);
	}
	tick = () => {
		this.props.dispatch({type: 'INCREMENT_COUNTER'});
	}
	render () {
		return (
			<View style={styles.view}>
				<Text style={styles.text}>Counter: {this.props.counter}</Text>
			</View>
		)
	}
}
const mapStateToProps = (state) => {
	"use strict";
	const {age, counter, timer, multiplier} = state.test;
	return {
		counter,
		timer,
		age,
		multiplier
	}
}
const other = connect(mapStateToProps)(Other);
export default other;