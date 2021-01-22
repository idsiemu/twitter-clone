import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column'
    },
    logo: {
        position:'absolute',
        flex :1,
        justifyContent:'center',
        alignItems:'center',
        left: 0,
        right: 0,
        top : 40
    },
    logoImage: {
        width: 50,
        height: 50
    },
    middle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%'
    },
    bottom: {
        position: 'absolute',
        bottom: 30,
        flex: 1,
        flexDirection: 'row',
    }
});

export default styles;