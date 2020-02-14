import React from 'react';
import { 
    View,
    Image,
    Text
} from "react-native";

import styles from './styles';

export default function Header({page, logo}) {
	return(
		<View style={styles.header}>
			<Image source={logo} style={styles.logo} />
			<View style={styles.pageNameArea}>
				<Text style={styles.pageName}>{page}</Text>
			</View>
		</View>
	);
}