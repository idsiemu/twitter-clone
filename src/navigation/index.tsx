import React, { FC, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './appStack';
import AuthStack from './authStack';
import { authService } from '~/constants/firebase'


const Navigation : FC = () => {
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            // console.log(user)
        })
    }, [])
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

export default Navigation