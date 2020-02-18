import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container:{

		flex: 1,
		backgroundColor: '#F2F2F2',
		flexDirection: "column",
	},
	body:{
		flex: 1,
		width: '90%',
		height: "90%",
		backgroundColor: '#F2F2F2',
		marginHorizontal: 30,
		alignItems: "center",
		justifyContent: "center"
	},
	inputArea:{
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 25,
		elevation: 6,
		width: '90%',
		height: 50,
		marginVertical: 10
	},

	inputImage: {
		width: 20,
		height: 20,
		marginHorizontal: 20
	},

	inputText: {
		flex: 1,
		width: 'auto'
	},

	forgotPassword: {
		textAlign: "right",
		width: '90%',
		color: "#F2B279"
	},
	btnSubmit:{
		width: '90%',
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
		width: '90%',
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