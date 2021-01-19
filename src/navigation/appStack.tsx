import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '~/screens/home';

const {Navigator, Screen} = createStackNavigator();

const AppStack : FC = () => {
    return (
        <Navigator>
            <Screen name="home" component={Home}/>
        </Navigator>
    )
}

export default AppStack