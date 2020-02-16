import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    imovelArea:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "center",
        height: 267,
        margin: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 4,
    },
    image:{
        width: "100%",
        height: 195,
        borderTopLeftRadius: 5,
        borderTopRightRadius:5,
        marginBottom: 3
    },
    infos:{
        flex: 1,
        paddingHorizontal: 10,
    },
    preco:{
        color: "#f27405",
        fontSize: 16,

    },
    descricao:{
        color: "#0D0D0D",
        fontSize: 15
    },
    endereco:{
        color: "#F2B279",
        fontSize: 14
    },
});

export default styles;