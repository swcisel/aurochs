import React from 'react';
import { StyleSheet} from 'react-native';

export default StyleSheet.create({
	view: {
		justifyContent: 'center',
		borderWidth: 0,
		padding: 0,
		borderColor: 'pink',
		alignItems: 'center',
		borderRadius: 5,
	},
	label: {
		color: '#CA90F0',
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	},
	activity: {
		position: 'absolute',
		right: 0,
		height: '100%'
	},
	button: {
		justifyContent: 'center',
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'pink',
		alignItems: 'center',
		borderRadius: 5,
		padding: 20
	},
	linearGradient: {
		borderRadius: 5
	}
})