import React, {FC, useEffect} from 'react';
import {Text, TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';
import KeyBoardArea from '~/components/keyBoardArea';
import globalStyle from '~/constants/globalStyle';
import * as Animatable from 'react-native-animatable';
import {fadeIn, defaultDuration} from '~/constants/aniOptions';
import { useDispatch } from 'react-redux';
import { setLeft, setLeftIcon } from '~/actions/header';

const SignUpContainer = styled.SafeAreaView`
    display: flex;
    flex: 1;
`;

const AnimatedView = Animatable.createAnimatableComponent(styled.View`
    display: flex;
    flex: 1;
    margin-right: 20px;
    margin-left: 20px;
    padding-top: 90px;
`);

const Signup: FC<StackScreenProps<any, 'login'>> = ({navigation}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLeft(true))
        dispatch(setLeftIcon('<'))
        return () => {
            dispatch(setLeft(false))
            dispatch(setLeftIcon('취소'))
        }
    }, [])
    return (
        <SignUpContainer>
            <KeyBoardArea>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <AnimatedView animation={fadeIn} duration={defaultDuration}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 26,
                                marginBottom: 30,
                            }}>
                            계정을 생성하세요
                        </Text>
                        <TextInput
                            placeholder="이름"
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
                        />
                        <TextInput
                            placeholder="휴대폰 번호 또는 이메일 주소"
                            style={[
                                globalStyle.blue,
                                {
                                    fontSize: 18,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'lightgray',
                                    height: 50,
                                },
                            ]}
                        />
                    </AnimatedView>
                </TouchableWithoutFeedback>
            </KeyBoardArea>
        </SignUpContainer>
    );
};

export default Signup;
