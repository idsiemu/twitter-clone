import {StyleSheet} from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    header: {
        position:'absolute',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        height: 50,
        top: getStatusBarHeight()
    },
    logoImage: {
        width: 50,
        height: 50
    },
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