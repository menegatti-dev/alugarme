import React from 'react';
import {
    View,
    Text, 
    FlatList,
    Image,
    StatusBar
} from 'react-native';

import styles from './styles';
import userImage from '../../Assets/user.png';
import logo from '../../Assets/alugar.me.png';
import pinMap from '../../Assets/pinMap-black.png';

export default function Boletos() {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
            <View style={styles.appBar}>
                <Image style={styles.appBarImg} source={pinMap} />
                <Image style={styles.logo} source={logo} resizeMode="contain" />
                <Image style={styles.appBarImg} source={userImage} />
            </View>
        </View>
    );
}