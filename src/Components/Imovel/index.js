import React from 'react';
import { 
    View,
    Text,
    Image,

} from "react-native";
import styles from './styles';

export default function Imovel({data}) {
    return(
        <View style={styles.imovelArea}>
            <Image style={styles.image} resizeMode="stretch" source={require('../../Assets/sem-foto.png')} />
            
            <View style={styles.infos}>
                <Text style={styles.preco}>{`R$${data.valor.toFixed(2)}`}</Text>
                <Text style={styles.descricao}>{data.descricao}</Text>
                <Text style={styles.endereco}>Endereço completo</Text>
            </View>
        </View>
    );
}