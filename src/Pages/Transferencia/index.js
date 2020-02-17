import React, {useState, useEffect} from 'react';
import {
    View,
    Text, 
    FlatList,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import Locais from '../../Components/Locais';

import styles from './styles';
import saque from '../../Assets/saque.png';
import logout from '../../Assets/logout.png';

export default function Transferencia({ navigation }) {

    const [locais, setLocais] = useState([]);
    const [saldo, setSaldo] = useState(0.0);

    useEffect(() => {
        getLocais();
        getSaldo();
    }, []);

    async function getSaldo() {
        try {
            const id = await AsyncStorage.getItem('id');
            const response = await api.get(`/caixa/saldo/${id}`);
            setSaldo(response.data[0].saldo);
        } catch (error) {
            
        }
    }

    async function logoutUser() {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    async function getLocais(){
        
        try {
            const id = await AsyncStorage.getItem('id');
            const response = await api.get(`/locacao/locador/1`);
            setLocais(response.data);
        } catch (error) {
            
        }
        
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
            <View style={styles.appBar}>
                <Image style={styles.appBarImg} source={saque} />
                <View style={styles.saldoArea}>
                    <Text style={styles.title}>Meu saldo</Text>
                    <Text style={styles.saldo}>{`R$${saldo.toFixed(2)}`}</Text>
                </View>
                <TouchableOpacity onPress={() => logoutUser()}>
                    <Image style={styles.appBarImg} source={logout} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={locais}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                    return(<Locais data={item}/>);
                }}
            />
        </View>
    );
}