import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {
	Text,
	View,
	Animated,
} from 'react-native';
import {Button, Draggable} from 'aurochs/app/components';
import styles from './Style';

const SPRING_CONFIG = {tension: 2, friction: 3};
/**
 * Main class
 */
class Main extends Component {
	/**
	 * The main view for the app
	 * @param props
	 * @param me
	 * @param store
	 */
	static propTypes = {
		age: PropTypes.number,
		counter: PropTypes.number,
		dispatch: PropTypes.func
	}
	constructor(props) {
		super(props);
		this.animatedValue = 0;
		this.food = (e) => {
			console.log('food', e);
			const age = this.props.age;
			this.props.dispatch({type: 'INCREMENT_AGE', age});
		}
		this.bounce = () => {
			this.animatedValue = 0;
			Animated.spring(
				this.animatedValue
			)
		}
		props.dispatch({type: 'INCREMENT_AGE', age: 20});
	}
	render () {
		const growStyle = () => {
			const a = this.props.age;
			const b = ("#" + ('000000' + this.props.counter.toString(16)).substr(-6, 6)).toString();
			return {
				height: a,
				width: a,
				borderRadius: a,
				backgroundColor: b
			}
		}
		return (
			<View style={styles.view}>
				<View style={growStyle()}></View>
				<Text style={{fontSize: 20}}>{("#" + ('000000' + this.props.counter.toString(16)).substr(-6, 6)).toString()}</Text>
				<Text style={styles.text}>{Math.round(this.props.age)}</Text>
				<Text>{this.props.age}</Text>
				<Draggable />
				<Button label="nothing"></Button>
				<Button style={styles.button} label="Add" onPress={(e) => this.food(e)} />
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	"use strict";
	const {counter, timer, age, multiplier} = state.test;
	return {
		counter,
		timer,
		age,
		multiplier
	}
}
export default connect(mapStateToProps)(Main)