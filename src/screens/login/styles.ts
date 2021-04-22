import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    middle: {
        flex : 1,
        flexDirection:'column',
        justifyContent:'center',
        marginHorizontal: 50
    },
    create: {
        paddingVertical: 12,
        borderRadius:22,
        marginTop: 20
    },
    createText: {
        textAlign:'center',
        fontSize:18,
        fontWeight:'500',
        color: 'white'
    },
    bottom: {
        flexDirection:'row', position:'absolute', bottom:0
    }
});

export default styles;