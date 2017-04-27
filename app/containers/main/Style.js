import { StyleSheet} from 'react-native';

export default StyleSheet.create({
	view: {
		justifyContent: 'space-around',
		backgroundColor: '#FDDA99',
	//	backgroundColor: '#fad393',
		alignItems: 'center',
		flexDirection: 'column',
		flex: 10
	},
	text: {
		margin: 10,
		fontSize: 60,
		color: '#6d6',
		textAlign: 'center'
	},
	circle: {
		height: 100,
		width: 100,
		borderRadius: 100,
		backgroundColor: 'red'
	}
})