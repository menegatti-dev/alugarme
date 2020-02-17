import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Alert

} from "react-native";
import styles from './styles';
import api from '../../services/api';

export default function Solicitacao({data, reload}) {

    async function handleRejeitar() {
        try {
            const response = await api.put('locacao/reprovar', {
                locacao: data.id
            });
            alert(response.data.message);
            reload();
            
        } catch (error) {
            Alert.alert('Atenção', 'Ocorreu um erro na solicitação');
        } finally{
            
            reload();
        }
    }
    async function handleAprovar() {
        try {
            const response = await api.put('locacao/aprovar', {
                locacao: data.id
            });
            Alert.alert('Atenção', response.data.message);
        } catch (error) {
            Alert.alert('Atenção', 'Ocorreu um erro na solicitação');
        } finally{
            
            reload();
        }

    }
    return(
        <View style={styles.solicitacaoArea}>
            <View style={styles.locatario} >
                <Text style={styles.title}>Solicitante</Text>
                <Text style={styles.text} >{data.solicitante}</Text>
            </View>
            <View style={styles.infos}>
                <View style={styles.periodo}>
                    <Text style={styles.title}>Periodo</Text>
                    <Text style={styles.text} >{`${data.dataInicioPrevista} até ${data.dataTerminoPrevista}`}</Text>
                </View>
                <View style={styles.valor}>
                    <Text style={styles.title}>Valor Proposto</Text>
                    <Text style={styles.text} >{`R$${data.valorProposto},00`}</Text>
                </View>
            </View>
            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btnAceitar} onPress={()=> handleAprovar()}>
                    <Text style={styles.btnText}>ACEITAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRejeitar} onPress={()=> handleRejeitar()}>
                    <Text style={styles.btnText}>REJEITAR</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}