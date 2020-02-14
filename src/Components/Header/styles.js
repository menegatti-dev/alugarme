import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header:{
		width: "100%",
		height: "30%",
		backgroundColor: '#f27405',
		borderBottomLeftRadius: 100,
		marginBottom: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	logo:{
		height: 90,
		width: 90,
		margin: 15,

	},

	pageNameArea:{
		width: "100%",
		alignItems: "flex-end",
		marginRight: 50,
		marginTop: 0
		
	},

	pageName:{
		color: "#f2f2f2",
		fontSize: 18,
		fontWeight: "500",
	},
});

export default styles;