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
    areaInfo:{
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    infos:{
        width: "60%",
    },

    preco:{
        color: "#f27405",
        fontSize: 16,

    },
    btnArea:{
        height: "100%",
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    btnSolicitar:{
        height: 30,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        backgroundColor: "#f27405",
    },
    btnText:{
        color: "#f2f2f2",
    },

    endereco:{
        color: "#F2B279",
        fontSize: 14
    },
});

export default styles;