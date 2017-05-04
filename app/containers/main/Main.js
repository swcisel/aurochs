import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Text,
	View,
	TouchableHighlight,
	ProgressViewIOS,
	ProgressBarAndroid
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';
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
	state = {
		progress: 0
	}
	componentDidMount(){
		this.setState({progress: 0});
		setInterval( () => {
			const {age, growers, laps} = this.props;
			var progress = (this.state.progress + (0.001 * growers)) % 1;
			if (progress >= (1 - (0.001 * growers))) {
				console.log('laplap', progress, (1-(0.001 * growers)));
				this.props.dispatch({type: 'INCREMENT_LAPS', laps: laps});
				this.props.dispatch({type: 'INCREMENT_AGE', age: age});
			}
			this.setState({progress: progress}); }, 50 );
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
			console.log('food', .001 * Math.pow(Math.log(this.props.taps) + Math.log(this.props.counter+2), 2));
			const {age, taps, counter} = this.props
			this.props.dispatch({type: 'INCREMENT_TAPS', taps});
			this.props.dispatch({type: 'INCREMENT_AGE', age});
		}
		this.buyGrower = () => {
			const {age, growers, growerCost} = this.props;
			if (age > growerCost) {
				console.log('buyGrower');
				this.props.dispatch ({type: 'BUY_GROWER', age, growers, growerCost});
			}
		}
	}
	render () {
		const { navigate } = this.props.navigation;
		const growStyle = () => {
			const a = this.props.age;
			const b = ("#" + ('000000' + this.props.counter.toString(16)).substr(-6, 6)).toString();
			const o = 1 - ((a-30)/100);
			return {
				width: '100%',
				height: 'auto',
				backgroundColor: b,
				marginTop: 50,
				shadowColor: 'black',
				borderTopWidth: 1,
				shadowOffset: {width: 1, height: 5},
				shadowOpacity: .5
				//right: 40,
				// opacity: o,
			}
		}
		return (
			<View style={styles.view}>
				<LinearGradient colors={['#6E108E', 'transparent', 'transparent', '#6E108E']} start={{x:.5, y:.01}} style={[styles.view, styles.gradient]}>
				<View style={growStyle()}>
					<Text style={[styles.text]}>{Math.round(this.props.age)}</Text>
				</View>
				<Text style={{fontSize: 20, marginTop: 15, backgroundColor: 'transparent'}}>{("#" + ('000000' + this.props.counter.toString(16)).substr(-6, 6)).toString()}</Text>
				<Text style={{ backgroundColor: 'transparent' }}>{this.props.age}</Text>
				<Draggable />
				<View style={{width: '80%', backgroundColor: '#DDFF00', borderRadius: 3}}>
					<ProgressViewIOS progress={this.state.progress} progressTintColor='red' style={{height: 20 }} />
					<Button label={"Buy Grower:        " + this.props.growerCost.toString()} onPress={(e) => this.buyGrower()}></Button>
				</View>
				<TouchableHighlight style={[styles.button, styles.circle]}
				                    onPress={(e) => this.food(e)}
				                    underlayColor="#7E108E"
				>
					<Text></Text>{/*<Text style={{fontSize: 20, color: '#FACCE0', fontWeight: 'bold'}}>ADD</Text>*/}
				</TouchableHighlight>
				{/*<View style={styles.bottomBar}>*/}
					{/*<Button label="nothing" onPress={(e) => this.starve(e)}></Button>*/}
				{/*</View>*/}
				<View style={styles.settingsButton}><Icon.Button name="gear" size={25} color='#F99' backgroundColor='transparent' iconStyle={{padding: 'auto', margin: 'auto'}} onPress={() => navigate('Settings')} title="bubu" />
				</View>
				</LinearGradient>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	"use strict";
	const {counter, timer, age, multiplier, taps, laps, growers, growerCost} = state.test;
	const progress = state.progress
	return {
		counter,
		timer,
		age,
		multiplier,
		taps,
		laps,
		growers,
		growerCost,
		progress
	}
}
export default connect(mapStateToProps)(Main)