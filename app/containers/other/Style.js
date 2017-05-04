import { StyleSheet} from 'react-native';

export default StyleSheet.create({
	mainView: {
		flex: 1,
		flexDirection: 'column'
	},
	view: {
		justifyContent: 'space-around',
		backgroundColor: '#6E108E',
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: '#F77',
		//	backgroundColor: '#fad393',
		alignItems: 'center',
		flexDirection: 'row',
		flex: 1
	},
	text: {
		color: '#FFF',
		width: 'auto',
		fontSize: 15,
		textAlign: 'center'
	}
})