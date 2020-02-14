import React from 'react';
import {
	View,
	Image,
	TextInput,
} from 'react-native';

import styles from './styles';

export default function InputText({description, img}) {
	return(
		<View style={styles.inputArea}>
			<Image style={styles.inputImage} source={img}/>
			<TextInput style={styles.inputText} placeholder={description} onChangeText={() => {}}/>
		</View>
	);
}