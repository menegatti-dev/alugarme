import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    solicitacaoArea:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        height: 167,
        margin: 10,
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 4,
    },
    title:{
        color: "#F2B279",
        // color: "#f27405",
        // color: "#0D0D0D",
        fontSize: 13,
    },
    text:{
        color: "#0D0D0D",
        fontSize: 15
    },
    infos:{
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    periodo:{
        justifyContent: 'flex-start',
        marginRight: 50
    },
    valor:{
        justifyContent: 'flex-end',
    },
    btnArea:{
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-around',
        marginVertical: 10
    },
    btnAceitar:{
		width: 150,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#28a745",
		borderRadius: 25,
		elevation: 6,
    },
    btnRejeitar:{
		width: 150,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#dc3545",
		borderRadius: 25,
		elevation: 6,
    },
    btnText:{
        color: "#f2f2f2"
    },
    

});

export default styles;