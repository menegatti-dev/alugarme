import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    FlatList
} from "react-native";

import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import styles from './styles';
import Imovel from '../../Components/Imovel';
import logout from '../../Assets/logout.png';
import logo from '../../Assets/alugar.me.png';
import pinMap from '../../Assets/pinMap-black.png';

export default function Feed({ navigation }) {

    const [latitude, setLatitude] = useState(0.0);
    const [longitude, setLongitude] = useState(0.0);
    const [raio, setRaio] = useState(10);
    const [locais, setLocais] = useState();

    useEffect(() => {
         loadLocais();
    },[]);


    // useEffect(()=>{
    //     setLocais(loadLocais());
    // },[raio]);

    async function loadLocais() {
        const response = await api.get('/imovel', {
            params:{
                latitude: -17.8487964,
                longitude: -41.4827896,
                raio: 10,
            }
        });
        setLocais(response.data);
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
                        return (<Imovel data={item}/>);
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