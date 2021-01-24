import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Board from '~/screens/board';
import Home from '~/screens/home';

const {Navigator, Screen} = createStackNavigator();

const AppStack : FC = () => {
    return (
        <Navigator>
            <Screen name="home" component={Home}/>
            <Screen name="board" component={Board}/>
        </Navigator>
    )
}

export default AppStack