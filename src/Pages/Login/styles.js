import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#F2F2F2',
		flexDirection: "column",
	},

	body:{
		width: "100%",
		height: "70%",
		backgroundColor: '#F2F2F2',
		marginHorizontal: 30,
		alignItems: "stretch",
		justifyContent: "center"
	},

	forgotPassword: {
		textAlign: "right",
		width: 350,
		color: "#F2B279"
	},
	btnSubmit:{
		width: 350,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#f27405",
		borderRadius: 25,
		elevation: 6,
		marginVertical: 80,
	}, btnText:{
		color: "#f2f2f2",
		fontSize: 18,
		fontWeight: "bold"
	},
	register:{
		width: 350,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	registerLink:{
		fontSize: 14,
		color: "#FF7C00",
		textAlign: "right"
	},
	registerText:{
		fontSize: 14,
		color: "#0D0D0D",
		textAlign: "right"
	}
});

export default styles;