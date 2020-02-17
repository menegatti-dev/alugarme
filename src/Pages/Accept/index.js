import React, { useState ,useEffect} from 'react';
import {
    View,
    Text, 
    FlatList,
    Image,
    StatusBar,
    Alert
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import Solicitacao from '../../Components/Solicitacao';

import styles from './styles';
import userImage from '../../Assets/user.png';
import logo from '../../Assets/alugar.me.png';
import pinMap from '../../Assets/pinMap-black.png';

export default function Accept() {

    const [solicitacoes, setSolicitacoes] = useState([]);
    useEffect(() => {
        getSolicitacoes();
    }, []);

    async function getSolicitacoes() {
        const pessoa = await AsyncStorage.getItem('id');
        try {
            const response = await api.get('/locacao/', {
                params:{
                    pessoa: parseInt(pessoa),
                }
            });
            if (response.data) {
                setSolicitacoes(response.data);
            } else {
                setSolicitacoes([])
            }
        } catch (error) {
            setSolicitacoes([]);  
            Alert.alert('Atenção','Não foi encontrados solicitações pendentes');
        }
    };
    
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
            <View style={styles.appBar}>
                <Image style={styles.appBarImg} source={pinMap} />
                <Image style={styles.logo} source={logo} resizeMode="contain" />
                <Image style={styles.appBarImg} source={userImage} />
            </View>
            <View>
                <FlatList
                    data={solicitacoes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => {
                        return(solicitacoes != []? <Solicitacao data={item} reload={getSolicitacoes}/>: '');
                    }}
                />
            </View>
        </View>
    );
}