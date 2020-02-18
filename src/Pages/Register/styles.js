import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
		flex: 1,
		backgroundColor: '#F2F2F2',
		flexDirection: "column",
    },
    header:{
        width: "100%",
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "#f27405"
    },
    logo:{
        height: 70,
        width: 200,
    },
    body:{
        alignItems: "center",
    },
    inputText:{
        width: "90%",
        height: 45,
        borderWidth: 0.001,
        borderRadius: 10,
        elevation: 1,
        margin: 5,
        padding: 10
    },
    title:{
        fontSize: 16,
        marginTop: 10,
        color: "#f27405",
        fontWeight: "bold"
    },
    input:{
        width: "45%",
        height: 45,
        borderWidth: 0.01,
        borderRadius: 10 ,
        elevation: 1,
        marginLeft: 0.5,
        marginBottom: 5,
        padding: 15,
    },
    inputGroup:{
        width: "91%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btn:{
        width: "90%",
        height: 45,
        backgroundColor: "#f27405",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 20,
    },
    btnText:{
        color: "#f2f2f2",
        fontSize: 16,
        fontWeight: "bold"
    },
    Picker:{
        height: 45,
        width: "90%",
        margin: 5,
        elevation: 2,
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
    },
    login:{
        marginTop: 15,
        marginBottom: 20,
		width: 350,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
    loginLink:{
		fontSize: 14,
		color: "#FF7C00",
		textAlign: "right"
	},
	loginText:{
		fontSize: 14,
		color: "#0D0D0D",
		textAlign: "right"
	}
});

export default styles;