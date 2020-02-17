import React from 'react';
import { 
    View,
    Text,
    Image, 
    TouchableOpacity

} from "react-native";
import styles from './styles';
import arrow from '../../Assets/right-arrow.png';

export default function Locais({data}) {
    
    return(
        <View style={styles.container}>
            <View style={styles.header} >
                <View style={[styles.status, ((data.status === 0)? {backgroundColor: "#F2B279"}: (data.status === 1) ? {backgroundColor: "#28a745",} : {backgroundColor: "#dc3545",}) ]}>
                    <Text style={styles.textStatus}>{(data.status === 0)? 'LIVRE': (data.status === 1) ? 'ALUGADO' : 'REPROVADO'}</Text>
                </View>
                <TouchableOpacity>
                    <Image source={arrow} resizeMode="stretch" style={styles.img} />
                </TouchableOpacity>
            </View>
            <View style={styles.imovel} >
                <Text style={styles.title}>Imovel</Text>
                <Text style={styles.text} >{data.descricao.toUpperCase()}</Text>
            </View>
            <View style={styles.infos}>
                
                <View style={styles.valor}>
                    <Text style={styles.title}>Valor</Text>
                    <Text style={styles.text} >{`R$${data.valor},00`}</Text>
                </View>
            </View>
            
        </View>
    );
}