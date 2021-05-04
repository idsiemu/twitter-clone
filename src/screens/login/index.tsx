import React, {FC, useState, useCallback, useEffect} from 'react';
import {Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';
import styles from './styles';
import globalStyle from '~/constants/globalStyle';
import auth from '@react-native-firebase/auth';
import Bottom from '~/components/bottom';
import KeyBoardArea from '~/components/keyBoardArea';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import {fadeIn, fadeOut, defaultDuration} from '~/constants/aniOptions';
import { useDispatch, useSelector } from 'react-redux';
import { setLeft, setLeftIcon } from '~/actions/header';
import { RootState } from '~/reducers';
import Container from '~/components/container';


const AnimatedView = Animatable.createAnimatableComponent(styled.View`
    display: flex;
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 90px;
`);

const Login: FC<StackScreenProps<any, any>> = ({navigation}) => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const dispatch = useDispatch()
    const [isLogin, setIslogin] = useState(false)
    const left = useSelector((state: RootState) => state.header.left);
    const goToLogin = useCallback(() => {
        dispatch(setLeft(!left))
        setIslogin(!isLogin)
    }, [isLogin]);

    const login = useCallback(async () => {
        try {
            await auth().signInWithEmailAndPassword(id, pw);
        } catch (e) {
            
        }
    }, [id, pw]);

    useEffect(() => {
        if(!left){
            setIslogin(left)
        }
    }, [left])

    const onClickSignUp = () => {
        // dispatch(setLeft(true))
        // dispatch(setLeftIcon(true))
        navigation.navigate('signup')
    }

    return (
        <Container>
            {isLogin ? (
                <KeyBoardArea>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <AnimatedView animation={left ? fadeIn : fadeOut} duration={defaultDuration}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 26,
                                    marginBottom: 30,
                                }}>
                                뚜위터에 로그인하기
                            </Text>
                            <TextInput
                                placeholder="이메일"
                                style={[
                                    {
                                        fontSize: 18,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        height: 50,
                                    },
                                    globalStyle.blue,
                                ]}
                                autoFocus={true}
                                onChangeText={(text) => setId(text)}
                                value={id}
                            />
                            <TextInput
                                placeholder="비밀번호"
                                style={[
                                    globalStyle.blue,
                                    {
                                        fontSize: 18,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        height: 50,
                                    },
                                ]}
                                secureTextEntry={true}
                                onChangeText={(text) => setPw(text)}
                                value={pw}
                            />
                        </AnimatedView>
                    </TouchableWithoutFeedback>
                    <Bottom moongu={'비밀번호를 잊으셧나요?'} btnName={'로그인'} hamsu={login} disabled={id === '' && pw === '' ? true : false} />
                </KeyBoardArea>
            ) : (
                <View style={styles.middle}>
                    <View>
                        <Text style={{fontSize: 30}}>여러분 주위에 무슨일이 일어나고 있는지 알아보세요.</Text>
                        <TouchableOpacity style={[styles.create, globalStyle.blueBackground]} onPress={onClickSignUp}>
                            <Text style={styles.createText}>계정 생성하기</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        <Text>이미 계정이 있으신가요?</Text>
                        <TouchableOpacity onPress={goToLogin}>
                            <Text style={globalStyle.blue}>로그인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Container>
    );
};

export default Login;
