import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import MapView, {Marker} from 'react-native-maps';
import api from '../../services/api';

import styles from './styles';
import logout from '../../Assets/logout.png';
import logo from '../../Assets/alugar.me.png';
import pinMap from '../../Assets/pinMap-black.png';

export default function Add({ navigation }) {
    const [position, setPosition] = useState({
        latitude: -17.8487964,
        longitude: -41.4927896,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
    });
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState(0);

    async function logoutUser() {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    async function cadastrar() {
        let locador = parseInt(await AsyncStorage.getItem('id'));
        try {
            if (valor <= 0) {
                return Alert.alert("Atenção","Valor não pode ser menor ou igual a 0");
            }
            await api.post('imovel', {
                descricao: descricao,
                valor:  parseInt(valor),
                latitude: position.latitude.toString(),
                longitude: position.longitude.toString(),
                locador: locador
            });
            setDescricao('');
            setValor(0);
        } catch (error) {
            Alert.alert("Atenção","Erro ao Cadastrar Imovel");
        }
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
            <View style={styles.containerMap}>
                <MapView
                    style={styles.map}
                    region={position}
                    showsUserLocation={true}
                    
                    onPress={e =>
                    setPosition({
                        ...position,
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    })
                    }>
                        <Marker
                        pinColor="#f27405"
                        style={{height: 3, width: 3}}
                        coordinate={position}
                        title={'Marcador'}
                        description={'Testando o marcador no mapa'}
                        />
                </MapView>
            </View>
            <View style={styles.infos}>
            <TextInput 
                    style={styles.descricao} 
                    value={descricao} 
                    placeholder="Descrição do imovel" 
                    onChangeText={text => setDescricao(text)}  
                />
                <TextInput 
                    style={styles.descricao} 
                    value={valor.toString()} 
                    placeholder="Valor desejado" 
                    keyboardType="numeric"
                    onChangeText={value => setValor(value)} 
                />
                <TouchableOpacity style={styles.btnSubmit} onPress={() => cadastrar()}>
					<Text style={styles.btnText}>CADASTRAR LOCAL</Text>
				</TouchableOpacity>
            </View>
        </View>
    );
}