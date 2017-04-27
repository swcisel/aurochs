'use strict';

import React,{ Component } from 'react'
import { connect } from 'react-redux';
import styles from './Style';
import {
	StyleSheet,
	View,
	Text,
	PanResponder,
	Animated,
	Dimensions
} from 'react-native';

class Draggable extends Component {
	constructor (props) {
		super(props);

		this.state = {
			pan: new Animated.ValueXY()
		};

		this.panResponder = PanResponder.create({    //Step 2
			onStartShouldSetPanResponder : () => true,
			onPanResponderMove           : Animated.event([null,{ //Step 3
				dx : this.state.pan.x,
				dy : this.state.pan.y
			}]),
			onPanResponderRelease           : (e, gesture) => {
				Animated.spring(            //Step 1
					this.state.pan,         //Step 2
					{toValue:{x:0,y:0}}     //Step 3
				).start();
			},
		});
	}
	render() {
		return (
			<View style={styles.view}>
				<Animated.View
					style={[this.state.pan.getLayout(), styles.circle]}
					{...this.panResponder.panHandlers}
				>
				</Animated.View>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return (state);
}

export default connect(mapStateToProps)(Draggable);