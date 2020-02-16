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
        marginHorizontal: 5,
    },
    listFeed:{
        flex:1,
        backgroundColor: "#ffffff",
    },



    raio:{
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 10,
        justifyContent: 'space-between'
    }

});

export default styles;