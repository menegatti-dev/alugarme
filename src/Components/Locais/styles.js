import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        height: 167,
        margin: 10,
        padding: 15,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 4,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    status:{
        height: 30,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    img:{ 
        width: 20,
        height: 20,
        marginLeft: '70%',
     },
    textStatus:{
        color: "#f2f2f2",
        fontSize: 13
    },
    imovel:{
        marginVertical: 15,
    }, 
    title:{
        color: "#F2B279",
        // color: "#0D0D0D",
        fontSize: 13,
    },
    text:{
        color: "#0D0D0D",
        fontSize: 15
    },
    infos:{
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
    

});

export default styles;