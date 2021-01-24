import React, {FC, useRef, useState, useCallback } from 'react'
import { Text, View, Image, Animated, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Button } from 'react-native';
import { TextInput, TouchableOpacity} from 'react-native-gesture-handler'
import styles from './styles'
import globalStyle from '~/constants/globalStyle'

const Login: FC = () => {
    const [isLogin, setIsLogin] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const login = useCallback(() => {
        setIsLogin(true)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    },[isLogin])

    const cancel = useCallback(() => {
        setIsLogin(false)
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isLogin])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Animated.View style={[{position:'absolute', zIndex: 1, left: 20, opacity: fadeAnim}]}>
                    <TouchableOpacity onPress={cancel}>
                        <Text style={[globalStyle.fontSize, globalStyle.blue]}>취소</Text>
                    </TouchableOpacity>
                </Animated.View>
                <View>
                    <Image style={styles.logoImage} source={require('~/images/icons/twitter-100.png')}/>
                </View>
            </View>
            {isLogin ? (
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1, marginTop:90}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Animated.View style={[{flex: 1, marginHorizontal: 20, paddingTop:90}, {opacity: fadeAnim}]}>
                            <Text style={{textAlign:'center', fontSize:26, marginBottom:30}}>뚜위터에 로그인하기</Text>
                            <TextInput placeholder="전화, 이메일 또는 사용자 아이디" style={[{fontSize:18, borderBottomWidth: 1, borderBottomColor: 'darkgray', height: 50}, globalStyle.blue]} autoFocus={true}/>
                            <TextInput placeholder="비밀번호" style={[globalStyle.blue, {fontSize:18, borderBottomWidth: 1, borderBottomColor:'darkgray', height: 50}]} secureTextEntry={true}/>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <View style={{paddingVertical: 8, borderTopWidth: 1, borderTopColor:'darkgray'}}>
                        <View style={{marginHorizontal:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <TouchableOpacity>
                                <Text style={globalStyle.blue}>비밀번호를 잊으셧나요?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{borderRadius:22, padding:8}, globalStyle.blueBackground]}>
                                <Text style={{color:'white'}}>로그인</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            ) : (
                <View style={styles.middle}>
                    <View>
                        <Text style={{fontSize:30}}>여러분 주위에 무슨일이 일어나고 있는지 알아보세요.</Text>
                        <TouchableOpacity style={[styles.create, globalStyle.blueBackground]}>
                            <Text style={styles.createText}>계정 생성하기</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        <Text>이미 계정이 있으신가요?</Text>
                        <TouchableOpacity onPress={login}>
                            <Text style={globalStyle.blue}>로그인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Login;