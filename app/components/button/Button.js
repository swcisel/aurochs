'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Style'
import LinearGradient from 'react-native-linear-gradient';
import {
	View,
	TouchableHighlight,
	Text,
	StyleSheet,
	ActivityIndicator
} from 'react-native'

class Button extends Component {
	render() {
		return (
			<View style={this.props.style}>
				<LinearGradient colors={['#FDD', '#FCC']} start={{x:.4, y:.1}} style={styles.linearGradient}>
					<TouchableHighlight
						style={[styles.button, this.props.style]}
						onPress={this.props.onPress}
						underlayColor="#FCC"
					>
						<Text style={styles.label}>{this.props.label.toUpperCase()}</Text>
					</TouchableHighlight>
					<ActivityIndicator animating={false} style={styles.activity}></ActivityIndicator>
				</LinearGradient>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return (state);
}

export default connect(mapStateToProps)(Button);