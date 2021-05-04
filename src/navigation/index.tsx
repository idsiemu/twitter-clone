import React, { FC, useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './appStack';
import AuthStack from './authStack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~/reducers';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { setUser } from '~/actions/user';
import SplashScreen from 'react-native-splash-screen';


const Navigation : FC = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(
        (state: RootState) => state.user,
    );

    const onAuthStateChanged = (user : FirebaseAuthTypes.User | null) => {
        if(user){
            dispatch(setUser(
                {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    emailVerified : user.emailVerified,
                    phoneNumber : user.phoneNumber,
                    updateProfile: (args: object) => user.updateProfile(args),
                }
            ))
        }
        SplashScreen.hide()
      }
    useEffect(() => {
        const subscriber = auth().onUserChanged(onAuthStateChanged);
        return subscriber;
    }, [])
    return (
        <NavigationContainer>
            {user ?
                <AppStack {...user}/>
            :
                <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Navigation