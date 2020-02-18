import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert,
    PermissionsAndroid
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import api from '../../services/api';

import styles from './styles';
import logout from '../../Assets/logout.png';
import logo from '../../Assets/alugar.me.png';
import pinMap from '../../Assets/pinMap-black.png';

export default function Add({ navigation }) {
       

    async function requestLocationPermission() {

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'alugar.me',
                    'message': 'alugar.me quer usar sua localização'
                }
            )
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                alert("O acesso a localização foi negado!");
            }
        } catch (err) {
            console.warn(err)
        }

    }

    async function loadMap() {
        await requestLocationPermission();

        Geolocation.getCurrentPosition((info) => {

            setPosition({
                ...position, 
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,

            });

        },(error) => {
            Alert.alert("Erro:", error);
        },{
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 10000
        }
        
        );
    }

    useEffect(()=>{

        loadMap();

    }, []);
    
    

    const [position, setPosition] = useState({
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
    });
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    async function logoutUser() {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    async function cadastrar() {
        let locador = parseInt(await AsyncStorage.getItem('id'));
            if (valor <= 0) {
                return Alert.alert("Atenção","Valor não pode ser menor ou igual a 0");
            }
            await api.post('imovel', {
                descricao: descricao,
                valor:  parseInt(valor),
                latitude: position.latitude.toString(),
                longitude: position.longitude.toString(),
                locador: locador
            }).then((response)=>{

                Alert.alert("Atenção", response.data.message);
                setDescricao('');
                setValor('');

            }).catch((err)=>{

                Alert.alert("Erro", err.response.data.message);

            });
            
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
                        title={'Local atual'}
                        description={'Selecione o local do imovel!'}
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