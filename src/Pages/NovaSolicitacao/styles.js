import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',        
        height: 'auto',
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
      formulario:{
          width: '90%',
          alignItems: "center",
          justifyContent: 'center',
          marginHorizontal: 10,
      },
      title:{
          fontSize: 16,
          textAlign: "center",
          color: "#f27405",
          fontWeight: "bold"
      },
      dataArea:{
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: 'space-between',
      },
      data:{
        width: '28%',
        height: 40,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 0.01,
        marginVertical: 8,
        elevation: 1
      },
      input:{
        width: "100%",
        height: 40,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 0.01,
        marginVertical: 8,
        elevation: 1
      },
      btnSubmit:{
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f27405",
        borderRadius: 25,
        elevation: 6,
        marginTop: 10,
      }, btnText:{
        color: "#f2f2f2",
        fontSize: 18,
        fontWeight: "bold"
      },
});

export default styles;