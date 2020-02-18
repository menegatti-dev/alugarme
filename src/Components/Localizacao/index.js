import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
    PermissionsAndroid,
} from "react-native";

export default async function requestLocationPermission() {

    const [coords, setCoords] = useState([]);

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
        } else {

            let infoCoords = {};

            Geolocation.getCurrentPosition(
                (info) => {
                    
                    setCoords(info.coords)
            
                },(error) => {
                    Alert.alert("Erro:", error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 10000
                }
            
            );

            console.log(coords);

        }
    } catch (err) {
        console.warn(err)
    }

    return null;

}