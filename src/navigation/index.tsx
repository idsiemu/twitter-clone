import React, { FC, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './appStack';
import AuthStack from './authStack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~/reducers';
import auth from '@react-native-firebase/auth';
import { setLoading, setUser } from '~/actions/user';
import { Text, View, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    loading :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});

const Navigation : FC = () => {
    const dispatch = useDispatch();
    const {loading, user} = useSelector(
        (state: RootState) => state.user,
    );
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if(user){
                dispatch(setUser(
                    {
                        uid: user.uid,
                        displayName: user.displayName,
                        updateProfile: (args: object) => user.updateProfile(args),
                    }
                ))
            }
            if(loading){
                dispatch(setLoading(false))
            }

        })
    }, [])
    return (
        <>
            {loading ? 
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>loading...</Text>
                </View>
            : 
                <NavigationContainer>
                    {user ? 
                        <AppStack />
                    :
                        <AuthStack />
                    }
                </NavigationContainer>
            }
        </>
    )
}

export default Navigation