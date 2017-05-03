import {StyleSheet} from 'react-native';
export default StyleSheet.create({
	view: {
		justifyContent: 'space-around',
		//	backgroundColor: '#fad393',
		alignItems: 'center',
		flexDirection: 'column',
		flex: 1
	},
	text: {
		color: '#0fc207',
		fontSize: 40
	},
	textfield: {
		height: 40,
	//	borderWidth: 1,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '50%'
	//backgroundColor: 'red'
	},
	slider: {
		width: '50%'
	},
	segmentedcontrolios: {
		width: '50%'
	},
	picker: {
		width: '50%',
		borderWidth: 1,
		backgroundColor: 'white'
	},
	modal: {
		width: '50%',
		height: '40%'
	},
	circle: {
		height: 100,
		width: 100,
		borderRadius: 100,
		backgroundColor: 'red'
	},
	scrollview: {
		height: '10%',
		overflow: 'hidden'
	},
	settingsButton: {
		position: 'absolute',
		padding: 0,
		borderWidth: 0,
		top: 10,
		right: 0,
		width: 100
	},
	bottomBar: {
		flexDirection: 'row'
	}
})