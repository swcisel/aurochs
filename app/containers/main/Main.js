import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Text,
	View,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import {Button, Draggable} from 'aurochs/app/components';
import KeepAwake from 'react-native-keep-awake';
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
	static navigationOptions = {
		title: 'Main',
		header: null
	}

	constructor(props) {
		super(props);
		if (props.keepAwake === true) {
			KeepAwake.activate();
		}
		this.starve = (e) => {
			const age = this.props.age;
			this.props.dispatch({type: 'RESET_AGE', age});
		}
		this.food = (e) => {
			console.log('food', .001 * Math.pow(Math.log(this.props.counter+2), 2));
			const age = this.props.age;
			this.props.dispatch({type: 'INCREMENT_AGE', age});
		}
	}
	render () {
		const { navigate } = this.props.navigation;
		const growStyle = () => {
			const a = this.props.age;
			const b = ("#" + ('000000' + this.props.counter.toString(16)).substr(-6, 6)).toString();
			const o = 1 - ((a-30)/100);
			return {
				height: a,
				width: a,
				borderRadius: a,
				backgroundColor: b,
				position: 'absolute',
				// opacity: o,
				top: 70
			}
		}
		return (
			<View style={styles.view}>
				<Text style={{fontSize: 20}}>{("#" + ('000000' + this.props.counter.toString(16)).substr(-6, 6)).toString()}</Text>
				<Text style={styles.text}>{Math.round(this.props.age)}</Text>
				<Text>{this.props.age}</Text>
				<Draggable />
				<View style={styles.bottomBar}>
					<Button label="nothing" onPress={(e) => this.starve(e)}></Button>
					<Button style={styles.button} label="Add" onPress={(e) => this.food(e)} />
				</View>
				<View style={styles.settingsButton}><Icon.Button name="gear" size={25} color='#F99' backgroundColor='transparent' iconStyle={{padding: 'auto', margin: 'auto'}} onPress={() => navigate('Settings')} title="bubu" />
				</View>
				<View style={growStyle()}></View>
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