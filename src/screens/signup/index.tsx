import React, {FC, useState, useEffect, useRef} from 'react';
import {Text, TouchableWithoutFeedback, Keyboard, TextInput, View, Alert } from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';
import KeyBoardArea from '~/components/keyBoardArea';
import globalStyle from '~/constants/globalStyle';
import * as Animatable from 'react-native-animatable';
import {fadeIn, defaultDuration} from '~/constants/aniOptions';
import { useDispatch } from 'react-redux';
import { setLeft, setLeftIcon } from '~/actions/header';
import DatePicker from '@react-native-community/datetimepicker'
import RBSheet from "react-native-raw-bottom-sheet";
import moment from 'moment';
import Bottom from '~/components/bottom';
import Container from '~/components/container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const AnimatedView = Animatable.createAnimatableComponent(styled.View`
    display: flex;
    flex: 1;
    margin-right: 20px;
    margin-left: 20px;
    padding-top: 90px;
`);

const Signup: FC<StackScreenProps<any, any>> = ({navigation}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState(new Date())
    const [dateString, setDateString] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [validate, setValidate] = useState({
        name : -1,
        email : -1,
        date : -1,
        password : -1
    })
    const [regSort, setRegSort] = useState('email')
    const [isSubmit, setIsSubmit] = useState(false)
    const refRBSheet = useRef<RBSheet>(null);
    const nameRef = useRef<TextInput>(null);
    const onChangeDate = (e: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setDate(currentDate)
        setValidate((prev) => ({
            ...prev,
            date : 1
        }))
        setDateString(moment(currentDate).format('YYYY년 MM월 DD일'))
    }

    const onChangeName = (text: string) => {
        if(text){
            setValidate((prev) => ({
                ...prev,
                name: 1
            }))
        }else{
            setValidate((prev) => ({
                ...prev,
                name: 0
            }))
        }
        setName(text)
    }

    const onChangeEmail = (text: string) => {
        const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const phoneReg = /^[0-9]{3}[0-9]{4}[0-9]{4}$/
        if(text){
            if(emailReg.test(text)){
                setValidate((prev) => ({
                    ...prev,
                    email: 1
                }))
                setRegSort('email')
            }else{
                if(phoneReg.test(text)){
                    setValidate((prev) => ({
                        ...prev,
                        email: 1
                    }))
                    setRegSort('phone')
                }else{
                    setValidate((prev) => ({
                        ...prev,
                        email: 0
                    }))
                    setRegSort('email')
                }
            }
        }else{
            setValidate((prev) => ({
                ...prev,
                email: 0
            }))
        }
        setEmail(text)
    }

    const onclickDate = () => {
        refRBSheet.current?.open()
    }

    const dateFocusOut = () => {
        nameRef.current?.focus()
        Keyboard.dismiss()
    }

    const nameFocus =  () => {
        setTimeout(() => {
            nameRef.current?.focus()
        }, 300);
    }

    const onChangeConfirm = (text:string) => {
        if(password === text){
            if(password === ''){
                setValidate((prev) => ({
                    ...prev,
                    password : -1
                }))
            }else{
                setValidate((prev) => ({
                    ...prev,
                    password : 1
                }))
            }
        }else{
            setValidate((prev) => ({
                ...prev,
                password : 0
            }))
        }
        setConfirm(text)
    }

    const onClickSignUp = async() => {
        if(regSort === 'email'){
            setIsSubmit(true)
            try{
                const account = await auth().createUserWithEmailAndPassword(email, password)
                account.user.updateProfile({displayName: name})
                const userInfo = {
                    user_id : account.user.uid,
                    birth_date : dateString,
                    created_at : Date.now()
                }
                firestore().collection('user_infos').add(userInfo)
            }catch(e) {
                const error = e.toString()
                setIsSubmit(false)
                if(error.indexOf('auth/weak-password') !== -1){
                    Alert.alert(
                        "비밀번호 오류",
                        "6자리 이상 입력해주세요.",
                        [
                            {
                                text: "확인",
                            }
                        ]
                    );
                }else if(error.indexOf('email-already-in-use') !== -1){
                    Alert.alert(
                        "이미 사용중인 이메일입니다.",
                        "",
                        [
                            {
                                text: "확인",
                            }
                        ]
                    );
                }
            }
        }else{
            try{
                refRBSheet.current?.close()
                // const confirm = await auth().signInWithPhoneNumber(email, true)
                navigation.navigate('code', {
                    name: name,
                    phone: email,
                    birth: dateString
                })
            }catch(e) {
                setIsSubmit(false)
                Alert.alert(
                    "네트워크 에러.",
                    "",
                    [
                        {
                            text: "확인",
                        }
                    ]
                );
            }
        }
    }

    const setYear = ():Date => {
        const date = new Date()
        date.setFullYear( date.getFullYear() - 18 );
        return date
    }

    useEffect(() => {
        return () => {
            dispatch(setLeft(false))
            dispatch(setLeftIcon(false))
        }
    }, [])

    return (
        <Container>
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
                        <ScrollView>
                            <View style={{position:'relative', justifyContent:'center'}}>
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
                                    value={name}
                                    onChangeText={onChangeName}
                                    autoFocus={true}
                                />
                                {validate.name === 1 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="limegreen"/>}
                                {validate.name === 0 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="red"/>}
                            </View>
                            <View style={{position:'relative', justifyContent:'center'}}>
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
                                    value={email}
                                    onChangeText={onChangeEmail}
                                />
                                {validate.email === 1 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="limegreen"/>}
                                {validate.email === 0 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="red"/>}
                            </View>
                            <View style={{position:'relative', justifyContent:'center'}}>
                                <TextInput
                                    placeholder="생년월일"
                                    style={[
                                        globalStyle.blue,
                                        {
                                            fontSize: 18,
                                            borderBottomWidth: 1,
                                            borderBottomColor: 'lightgray',
                                            height: 50,
                                        },
                                    ]}
                                    value={dateString}
                                    onFocus={onclickDate}
                                />
                                {validate.date === 1 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="limegreen"/>}
                            </View>
                            {regSort === 'email' && (
                                <React.Fragment>
                                    <View style={{position:'relative', justifyContent:'center'}}>
                                        <TextInput
                                            ref={nameRef}
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
                                            value={password}
                                            onChangeText={(text) => setPassword(text)}
                                        />
                                        {validate.password === 1 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="limegreen"/>}
                                        {validate.password === 0 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="red"/>}
                                    </View>
                                    <View style={{position:'relative', justifyContent:'center'}}>
                                        <TextInput
                                            placeholder="비밀번호 확인"
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
                                            value={confirm}
                                            onChangeText={onChangeConfirm}
                                        />
                                        {validate.password === 1 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="limegreen"/>}
                                        {validate.password === 0 && <Icon style={{position:'absolute', right:0}} name="check-circle" size={24} color="red"/>}
                                    </View>
                                </React.Fragment>
                            )}
                        </ScrollView>
                    </AnimatedView>
                </TouchableWithoutFeedback>
                <Bottom moongu={''} btnName={'가입'} hamsu={onClickSignUp} loading={isSubmit} disabled={
                    regSort === 'email' ?
                        ((validate.date + validate.email + validate.name + validate.password) !== 4)
                    : 
                        ((validate.date + validate.email + validate.name) !== 3)
                    }
                />
            </KeyBoardArea>
            <RBSheet
                ref={refRBSheet}
                animationType={'slide'}
                closeOnPressMask={true}
                closeOnPressBack={true}
                openDuration={200}
                closeDuration={0}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent",
                        zIndex: -1
                    }
                }}
                onOpen={dateFocusOut}
                onClose={nameFocus}
            >
                <Bottom moongu={''} btnName={'가입'} hamsu={onClickSignUp} loading={isSubmit} disabled={
                    regSort === 'email' ?
                        ((validate.date + validate.email + validate.name + validate.password) !== 4)
                    :
                        ((validate.date + validate.email + validate.name) !== 3)
                    }
                />
                <DatePicker mode="date" value={date} display="spinner" locale="ko-KR" onChange={(e, date) => onChangeDate(e, date)} neutralButtonLabel="clear" maximumDate={setYear()} />
            </RBSheet>
        </Container>
    );
};

export default Signup;
