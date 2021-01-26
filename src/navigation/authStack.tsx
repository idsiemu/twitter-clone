import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Login from '~/screens/login';
import Signup from '~/screens/signup';

const {Navigator, Screen} = createStackNavigator();

const AuthStack : FC = () => {
    return (
        <Navigator>
            <Screen name="login" component={Login} options={{headerShown: false}}/>
            <Screen name="signup" component={Signup} options={{headerShown: false}}/>
        </Navigator>
    )
}

export default AuthStack