import { StackScreenProps } from "@react-navigation/stack"
import React, { FC, useEffect, useState } from "react"
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import Container from "~/components/container"
import globalStyle from '~/constants/globalStyle';
import auth from '@react-native-firebase/auth';
import { setUser } from '~/actions/user';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "~/reducers";

const Code: FC<StackScreenProps<any, any>> = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [trigger, setTrigger] = useState<NodeJS.Timeout|null>(null);
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const sendEmail = () => {
    setError(false)
    const currentUser = auth().currentUser
    if(currentUser){
      currentUser.sendEmailVerification()
        .then(() => {
          const interval = setInterval(async() => {
            if(currentUser){
              if(currentUser.emailVerified){
                clearInterval(interval)
              }else{
                currentUser.reload();
              }
            }
          }, 3000);
          setTrigger(interval)
        })
        .catch((error) => {
          setError(true)
        })
    }
  }

  useEffect(() => {
    sendEmail()
  }, [])

  useEffect(() => {
    return () => {
      if(trigger){
        clearInterval(trigger)
      }
    }
  }, [trigger])

  const onClickSignOut = () => {
    auth().signOut()
    dispatch(setUser(null))
  }
  return (
    <Container>
      <View  style={{flex:1, alignItems:"center", justifyContent:'flex-end'}}>
        <Text
            style={{
                fontSize: 26,
                marginBottom: 10
            }}>
            {user?.email}
        </Text>
        <Text
            style={{
                fontSize: 26,
            }}>
              {error ?
                '이메일 인증에러'
              :
                '이메일 인증을 해주세용'
              }
        </Text>
      </View>
      <View style={{flex:1, alignItems:"center", justifyContent:'center'}}>
        {error ?
          <TouchableOpacity style={[{borderRadius: 22, padding: 14, width: "30%", marginBottom:40, alignItems:'center'}, globalStyle.blueBackground]} onPress={sendEmail}>
            <Text style={{color: 'white', fontSize: 18}}>다시 보내기</Text>
          </TouchableOpacity>
        :
          <ActivityIndicator size="large"/>
        }
      </View>
      <View style={{flex:1, alignItems:"center", justifyContent:'flex-end'}}>
        <TouchableOpacity style={[{borderRadius: 22, padding: 14, width: "70%", marginBottom:40, alignItems:'center'}, globalStyle.blueBackground]} onPress={onClickSignOut}>
            <Text style={{color: 'white', fontSize: 18}}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

export default Code