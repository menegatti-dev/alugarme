import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import styles from './styles';


export default function NovaSolicitacao({ navigation }) {
    const date = new Date();
    const [diaInicio, setDiaInicio] = useState(date.getDate());
    const [diaFim, setDiaFim] = useState(date.getDate());

    const [mesInicio, setMesInicio] = useState(date.getMonth()+1);
    const [mesFim, setMesFim] = useState(date.getMonth()+1);

    const [anoInicio, setAnoInicio] = useState(date.getFullYear());
    const [anoFim, setAnoFim] = useState(date.getFullYear()+1);

    const [valor, setValor] = useState(null);
    const [dia, setDia] = useState(null);

    const params = navigation.state.params;
    const [position, setPosition] = useState({
        latitude: parseFloat(params.latitude),
        longitude: parseFloat(params.longitude),
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
    });

    async function solicitar() {
        const locatario = await AsyncStorage.getItem('id');
        let dias = [1,5,10,15,20,25,28];

        if(!dias.includes(parseInt(dia))){

            Alert.alert("Atenção", "Dia invalido");

        } else {

            const body = {

                imovel: parseInt(params.imovel),
                locatario : parseInt(locatario),
                inicio: `${diaInicio}/${mesInicio}/${anoInicio}`,
                termino : `${diaFim}/${mesFim}/${anoFim}`,
                valor: ((valor != null) ? (valor >= params.valor) ? parseInt(params.valor) : parseInt(valor):parseInt(params.valor)),
                dia_vencimento: ((dia != null)? parseInt(dia): 10)
            };

            await api.post('/locacao', body)
            .then((response)=>{
                Alert.alert("Atenção", response.data.message);
                navigation.navigate('App');
            }).catch((err) =>{
                Alert.alert("Erro", err.response.data.message);
    
            });

        }
    }

    return(
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView behavior="padding" enabled style={{alignItems: "center"}} >
                <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
                <View style={styles.containerMap}>
                    <MapView
                        style={styles.map}
                        region={position}
                        showsUserLocation={true}
                    >
                            <Marker
                            pinColor="#f27405"
                            coordinate={position}
                            title={`${params.descricao}`}
                            description={`R$${params.valor}`}

                            />
                    </MapView>
                </View>
                <View style={styles.fomulario}>
                    <Text style={styles.title}>Quando você deseja entrar no imovel?</Text>
                    <View style={styles.dataArea}>
                        <TextInput 
                                style={styles.data}
                                value={diaInicio.toString()}
                                placeholder="DIA INICIO" 
                                keyboardType="numeric"
                                onChangeText={text => setDiaInicio(text)}  
                        />
                        <TextInput 
                                style={styles.data} 
                                value={mesInicio.toString()}
                                placeholder="MÊS INICIO" 
                                keyboardType="numeric"
                                onChangeText={text => setMesInicio(text)}  
                        />
                        <TextInput 
                                style={styles.data} 
                                value={anoInicio.toString()}
                                placeholder="ANO INICIO" 
                                keyboardType="numeric"
                                onChangeText={text => setAnoInicio(text)}  
                        />
                    </View>
                    <Text style={styles.title}>Quando você deseja sair do imovel?</Text>
                    <View style={styles.dataArea}>
                        <TextInput 
                                style={styles.data} 
                                value={diaFim.toString()}
                                placeholder="DIA FIM" 
                                keyboardType="numeric"
                                onChangeText={text => setDiaFim(text)}  
                        />
                        <TextInput 
                                style={styles.data} 
                                value={mesFim.toString()}
                                placeholder="MÊS FIM" 
                                keyboardType="numeric"
                                onChangeText={text => setMesFim(text)}  
                        />
                        <TextInput 
                                style={styles.data} 
                                placeholder="ANO FIM" 
                                value={anoFim.toString()}
                                keyboardType="numeric"
                                onChangeText={text => setAnoFim(text)}  
                        />
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Valor contra-proposta" 
                        value={valor}
                        keyboardType="numeric"
                        onChangeText={value => setValor(value)} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Data vencimento (01, 05, 10, 15, 20, 25 ou 28)" 
                        keyboardType="numeric"
                        onChangeText={value => setDia(value)} 
                    />
                </View>
                <TouchableOpacity style={styles.btnSubmit} onPress={() => solicitar()}>
                    <Text style={styles.btnText}>SOLICITAR LOCAÇÃO</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}