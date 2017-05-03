import {
	StackNavigator
} from 'react-navigation';
import React from 'react'
import {
	TouchableOpacity,
	Text
} from 'react-native'
import Form from '../containers/form/Form'
import Main from '../containers/main/Main'
import Settings from '../containers/settings/Settings'
import WeeklyAd from '../containers/weeklyad/WeeklyAd'
const Nav = StackNavigator({
	Main: {screen: Main},
	Form: {screen: Form},
	Settings: {screen: Settings},
	WeeklyAd: {screen: WeeklyAd}
},
	{
		initialRouteName: 'Main',
		headerMode: 'screen'
	}
);

export default Nav;