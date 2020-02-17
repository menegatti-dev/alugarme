import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appBar: {
        height: 50,
        width: "100%",
        backgroundColor: "#f2f2f2",
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo:{
        height: 35,
        width: 150,
    },
    appBarImg:{
        width: 30,
        height: 30,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    containerMap: {
        width: "95%",
        height: 250,
        margin: 10,
      },
      map: {
        height: '100%',
        width: '100%',
      },
      infos:{
          justifyContent: 'center',
          marginHorizontal: 10
      },
      descricao:{
        width: "100%",
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 0.01,
        marginVertical: 8,
        elevation: 1
      },
      btnSubmit:{
		width: "100%",
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
});

export default styles;