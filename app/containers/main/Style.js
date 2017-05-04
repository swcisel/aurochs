import { StyleSheet} from 'react-native';

export default StyleSheet.create({
	view: {
		justifyContent: 'space-around',
		// backgroundColor: '#FDDA99',
		// backgroundColor: '#00F0D0',
		backgroundColor: '#00FECE',
		alignItems: 'center',
		flexDirection: 'column',
		flex: 10
	},
	button: {
		backgroundColor: 'transparent',
		justifyContent: 'center',
		padding: 0,
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: '#9E108E',
		borderWidth: 0,
		shadowColor: 'black',
		shadowOffset: {width: 1, height: 5},
		shadowOpacity: .5
	},
	text: {
		fontSize: 60,
		backgroundColor: 'transparent',
		color: '#FCF',
		textAlign: 'center',
		height: 'auto',
		textAlignVertical: 'center'
	},
	circle: {
		height: 100,
		width: 100,
		borderRadius: 100
	},
	settingsButton: {
		alignItems: 'center',
		justifyContent: 'space-around',
		position: 'absolute',
		top: 0,
		right: 0,
		padding: 0,
		marginTop: 15,
		borderWidth: 0,
	},
	bottomBar: {
		flexDirection: 'row'
	},
	gradient: {
		width: '100%',
		height: '100%'
	}
	// linearGradient: {
	// 	width: '100%',
	// 	height: '100%'
	// }
})