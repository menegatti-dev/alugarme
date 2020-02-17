import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import styles from './styles';
import logout from '../../Assets/logout.png';
import logo from '../../Assets/alugar.me.png';
import pinMap from '../../Assets/pinMap-black.png';
import Alugados from '../../Components/Alugados';

export default function Boletos({ navigation }) {

    const [locais, setLocais] = useState([]);

    useEffect(() => {
        getLocais();
    }, []);

     async function getLocais(){
        const id = await AsyncStorage.getItem('id');
        try {
            const response = await api.get(`/locacao/locatario/${id}`);
            setLocais(response.data);
        } catch (error) {
            
        }
        
    }

    async function logoutUser() {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
            <View style={styles.appBar}>
                <Image style={styles.appBarImg} source={pinMap} />
                <Image style={styles.logo} source={logo} resizeMode="contain" />
                <TouchableOpacity onPress={() => logoutUser()}>
                    <Image style={styles.appBarImg} source={logout} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={locais}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                    return(<Alugados data={item} />);
                }}
            />
        </View>
    );
}