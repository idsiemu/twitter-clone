import { StackScreenProps } from "@react-navigation/stack"
import React, { FC, useEffect, useState } from "react"
import { CodeProps } from './type'
import Container from "~/components/container"
import { View, Text, TextInput, ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from 'styled-components/native';
import globalStyle from '~/constants/globalStyle';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface BarProps {
  isBottom : boolean
}

const ViewBar = styled.View<BarProps>`
  align-items: center;
  border-bottom-color: ${props => props.isBottom ? `${globalStyle.blue.color}` : `lightgray`};
  border-bottom-width: 2px;
  width:32px;
`
const ANumber = styled.Text`
  font-size: 24px;
`

const Code: FC<StackScreenProps<any, any>> = ({navigation, route}) => {
  const { name, phone, birth } = route.params as CodeProps

  const [loading, setLoading] = useState(true)
  const [number, setNumber] = useState('')
  const [result, setResult] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null)

  const onChangeNumber = (text: string) => {
    if(text.length < 7){
      setNumber(text)
    }
  }
  useEffect(() => {
    auth().signInWithPhoneNumber(`+82${phone.substr(1)}`, false)
      .then((res) => {
        setResult(res)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if(number.length === 6){
      if(result){
        result.confirm(number)
          .then(res => {
            if(res){
              res.user.updateProfile({displayName: name})
              const userInfo = {
                user_id : res.user.uid,
                birth_date : birth,
                created_at : Date.now()
            }
            firestore().collection('user_infos').add(userInfo)
            }
          })
      }
    }
  }, [number])

  return (
    <Container>
      <SafeAreaView style={{justifyContent:'center', alignItems:'center'}}>
        {loading ?
          <View style={{display:'flex', height:'100%', justifyContent:'center'}}>
            <ActivityIndicator size="large"/>
          </View>
        :
          <React.Fragment>
            <Text style={{fontSize:30, paddingTop:60, paddingBottom:40}}>코드를 보내 드렸습니다</Text>
            <Text style={{fontSize:18, color:'gray', paddingBottom:70}}>{phone} 인증을 위해 아래에 입력하세요</Text>
            <TextInput autoFocus={!loading} style={{display:'none'}} keyboardType="numeric" value={number} onChangeText={onChangeNumber}/>
            <View style={{display:'flex', width:'70%', flexDirection:'row', justifyContent:'space-between', height:40}}>
              <ViewBar isBottom={number[0] ? true : false}><ANumber>{number[0]}</ANumber></ViewBar>
              <ViewBar isBottom={number[1] ? true : false}><ANumber>{number[1]}</ANumber></ViewBar>
              <ViewBar isBottom={number[2] ? true : false}><ANumber>{number[2]}</ANumber></ViewBar>
              <ViewBar isBottom={number[3] ? true : false}><ANumber>{number[3]}</ANumber></ViewBar>
              <ViewBar isBottom={number[4] ? true : false}><ANumber>{number[4]}</ANumber></ViewBar>
              <ViewBar isBottom={number[5] ? true : false}><ANumber>{number[5]}</ANumber></ViewBar>
            </View>
          </React.Fragment>
        }
      </SafeAreaView>
    </Container>
  )
}

export default Code