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
	text: {
		margin: 10,
		fontSize: 60,
		color: '#FCF',
		textAlign: 'center'
	},
	circle: {
		height: 100,
		width: 100,
		borderRadius: 100,
		backgroundColor: 'red'
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
	}
})