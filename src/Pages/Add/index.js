import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import api from '../../services/api';

import styles from './styles';
import logout from '../../Assets/logout.png';
import logo from '../../Assets/alugar.me.png';
import pinMap from '../../Assets/pinMap-black.png';
import { ScrollView } from 'react-native-gesture-handler';

export default function Add({ navigation }) {
       
    useEffect(()=>{
        
        Geolocation.getCurrentPosition(

            (pos) => {

                const currentLongitude = pos.coords.longitude;
                const currentLatitude  = pos.coords.latitude;

                setPosition({

                    ...position,
                    latitude: currentLatitude,
                    longitude: currentLongitude

                });
                
            },
            (error) => Alert.alert("Erro", error.message),
            { 

                enableHighAccuracy: false, timeout: 120000, maximumAge: 1000 
               
            }
         );        

    },[]);
       
    
    const [position, setPosition] = useState({
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
    });
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState();

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
                navigation.navigate('Feed');

            }).catch((err)=>{

                Alert.alert("Erro", err.response.data.message);

            });
            
    }
    return(

        <ScrollView>
            <KeyboardAvoidingView style={styles.container}>
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
                        value={valor} 
                        placeholder="Valor desejado" 
                        keyboardType="decimal-pad"
                        onChangeText={value => setValor(value)} 
                    />
                    <TouchableOpacity style={styles.btnSubmit} onPress={() => cadastrar()}>
                        <Text style={styles.btnText}>CADASTRAR LOCAL</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}