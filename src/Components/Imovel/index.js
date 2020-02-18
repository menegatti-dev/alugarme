import React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity

} from "react-native";
import styles from './styles';

export default function Imovel({ navigation, data }) {

    function handleSolicitar() {
        navigation.navigate('NovaSolicitacao', {
            latitude: data.latitude,
            longitude: data.longitude,
            imovel: data.id, 
            descricao: data.descricao,
            valor: data.valor,
            distancia: data.distancia
        });
    }

    return(
        <View style={styles.imovelArea}>
            <Image style={styles.image} resizeMode="stretch" source={(data.foto != null)? {uri: data.foto} : require('../../Assets/sem-foto.png')} />
            
            <View style={styles.areaInfo}>
                <View style={styles.infos}>
                    <Text style={styles.preco}>{`R$${data.valor.toFixed(2)}`}</Text>
                    <Text style={styles.descricao}>{data.descricao}</Text>
                </View>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btnSolicitar} onPress={() => handleSolicitar()}>
                        <Text style={styles.btnText}>SOLICITAR RESERVA</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
           
        </View>
    );
}