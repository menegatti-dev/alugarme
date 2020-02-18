import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    FlatList,
    PermissionsAndroid,
    Alert
} from "react-native";

import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import Geolocation from '@react-native-community/geolocation';

import styles from './styles';
import Imovel from '../../Components/Imovel';
import logout from '../../Assets/logout.png';
import logo from '../../Assets/alugar.me.png';
import pinMap from '../../Assets/pinMap-black.png';



export default function Feed({ navigation }) {

    async function requestLocationPermission() 
    {
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

    const [latitude, setLatitude] = useState(0.0);
    const [longitude, setLongitude] = useState(0.0);
    const [raio, setRaio] = useState(10);
    const [locais, setLocais] = useState();

    useEffect(() => {
        async function loadMap(){

            await api.get('/imovel', {
                params:{
                    latitude: parseFloat(latitude),
                    longitude: parseFloat(longitude),
                    raio: parseInt(raio),
                }
            }).then((response)=>{

                setLocais(response.data);

            }).catch((error)=>{

                setLocais([]); 

            });
            
        }
        if(latitude != 0 && longitude != 0 && raio > 0){ 
            
            loadMap();
        
        }
   },[latitude, longitude, raio]);
   
   useEffect(() => {
       loadLocais();
   }, []);
    

    async function loadLocais() {
        await requestLocationPermission();
        Geolocation.getCurrentPosition((info) => {
            setLatitude(info.coords.latitude);
            setLongitude(info.coords.longitude);

        },(error) => {
            Alert.alert("Erro:", error);
        },{
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 10000
        }
        
        );
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
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        return (<Imovel data={item} navigation={navigation}/>);
                    }}
                />
            <View style={styles.raio}>
                <Slider
                    style={{width: "90%", height: 40}}
                    minimumValue={1}
                    maximumValue={20}
                    value={raio}
                    onValueChange={value => setRaio(value)}
                    minimumTrackTintColor="#F2B279"
                    step={1}
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#f27405"
                />
                <Text>{`${raio}KM`}</Text>
            </View>
        </View>
    );
}