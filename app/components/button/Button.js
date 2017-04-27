'use strict';

import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import styles from './Style'
import LinearGradient from 'react-native-linear-gradient';
import {
	View,
	TouchableHighlight,
	Text
} from 'react-native'

class Button extends Component {
	static propTypes = {
		...TouchableHighlight.propTypes,
		allowFontScaling: Text.propTypes.allowFontScaling,
		containerStyle: View.propTypes.style,
		disabled: PropTypes.bool,
		style: Text.propTypes.style,
		styleDisabled: Text.propTypes.style
	}
	constructor(props) {
		super(props);
		console.log('blah', this, styles.button.padding);
		this.k = this.props.children;
	}

	render() {
		return (
			<View style={styles.view}>
				{this.k}
				<LinearGradient colors={['#FDD', '#FCC']} start={{x:.4, y:.1}} style={styles.linearGradient}>
					<TouchableHighlight
						style={styles.button}
						onPress={this.props.onPress}
						underlayColor="#FCC"
					>
						<Text style={styles.label}>{this.props.label.toUpperCase()}</Text>
					</TouchableHighlight>
				</LinearGradient>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return (state);
}

export default connect(mapStateToProps)(Button);