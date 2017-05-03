'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text,
	TextInput,
	Slider,
	Picker,
	Modal,
	SegmentedControlIOS,
	ActivityIndicator,
	TouchableHighlight
} from 'react-native'
import styles from './Style';

class Form extends Component {
	static navigationOptions = { title: 'Native Forms', };
	constructor(props) {
		super(props);
		this.state = {
			text: 'Placeholder',
			pickervalue: '1'
		}
	}
	render() {
		return (
			<View style={styles.view}>
				<View style={{width: '100%'}}>
					<TextInput
						style={styles.textfield}
						onChangeText={(text) => this.setState({text})}
						placeholder="First Name"
					/>
					<TextInput
						style={styles.textfield}
						onChangeText={(text) => this.setState({text})}
						placeholder="Last Name"
					/>
					<TextInput
						style={styles.textfield}
						onChangeText={(text) => this.setState({text})}
						placeholder="Email Address"
					/>
				</View>
				<Text style={styles.text}>{this.state.slidervalue}</Text>
				<Slider step={1} minimumValue={10} maximumValue={101} style={styles.slider} onValueChange={(v) => this.setState({slidervalue: v})}></Slider>
				<ActivityIndicator size="large" hidesWhenStopped={false} animating={true}></ActivityIndicator>
				<Picker style={styles.picker}
				        selectedValue={this.state.pickervalue}
					onValueChange={(v) => this.setState({pickervalue: v})}
				>
					<Picker.Item label="option 1" value="1" />
					<Picker.Item label="option 2" value="2" />
					<Picker.Item label="option 3" value="3" />
					<Picker.Item label="option 4" value="4" />
					<Picker.Item label="option 5" value="5" />
					<Picker.Item label="option 6" value="6" />
					<Picker.Item label="option 7" value="7" />
					<Picker.Item label="option 8" value="8" />
					<Picker.Item label="option 9" value="9" />
					<Picker.Item label="option 10" value="10" />
					<Picker.Item label="option 11" value="11" />
					<Picker.Item label="option 12" value="12" />
					<Picker.Item label="option 13" value="13" />
					<Picker.Item label="option 14" value="14" />
					<Picker.Item label="option 15" value="15" />
					<Picker.Item label="option 16" value="16" />
					<Picker.Item label="option 17" value="17" />
					<Picker.Item label="option 18" value="18" />
					<Picker.Item label="option 19" value="19" />
					<Picker.Item label="option 20" value="20" />
				</Picker>
				<SegmentedControlIOS
					style={styles.segmentedcontrolios}
					values={['One', 'Two']}
					selectedIndex={this.state.selectedIndex}
					onChange={(event) => { this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex}); }}
				/>

			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return (state);
}

export default connect(mapStateToProps)(Form)