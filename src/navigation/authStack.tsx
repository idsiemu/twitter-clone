import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '~/screens/home';
import Login from '~/screens/login';
import Signup from '~/screens/signup';

const {Navigator, Screen} = createStackNavigator();

const AuthStack : FC = () => {
    return (
        <Navigator>
            <Screen name="login" component={Login}/>
            <Screen name="signup" component={Signup}/>
        </Navigator>
    )
}

export default AuthStack