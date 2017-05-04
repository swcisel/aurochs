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
		clearInterval(this.state.timer);
	}
	tick = () => {
		this.props.dispatch({type: 'INCREMENT_COUNTER'});
	}
	render () {
		return (
			<View style={styles.mainView}>
				<View style={styles.view}>
					<Text style={styles.text}>Counter: {this.props.counter}</Text>
					<Text style={styles.text}>Taps: {this.props.taps}</Text>
					<Text style={styles.text}>Laps: {this.props.laps}</Text>
				</View>
				<View style={styles.view}>
					<Text style={styles.text}>Growers: {this.props.growers}</Text>
				</View>
			</View>
		)
	}
}
const mapStateToProps = (state) => {
	"use strict";
	const {age, counter, timer, multiplier, taps, laps, growers} = state.test;
	return {
		counter,
		timer,
		age,
		multiplier,
		taps,
		laps,
		growers
	}
}
const other = connect(mapStateToProps)(Other);
export default other;