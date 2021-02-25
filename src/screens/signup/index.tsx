import React, {FC, useRef} from 'react';
import {Text, Animated, TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Header from '~/components/header';
import KeyBoardArea from '~/components/keyBoardArea';
import globalStyle from '~/constants/globalStyle';
import * as Animatable from 'react-native-animatable';
import {fadeIn, fadeOut, defaultDuration} from '~/constants/aniOptions';

const SignUpContainer = styled.SafeAreaView`
    display: flex;
    flex: 1;
`;

const AnimatedView = Animatable.createAnimatableComponent(styled.View`
    display: flex;
    flex: 1;
    margin-horizontal: 20px
    padding-top: 90px;
`);

const Signup: FC<StackScreenProps<any, 'login'>> = ({navigation}) => {
    return (
        <SignUpContainer>
            <Header cancel={true} onPress={() => navigation.goBack()} />
            <KeyBoardArea>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <AnimatedView>
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
