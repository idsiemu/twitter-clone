import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Board from '~/screens/board';

const {Navigator, Screen} = createStackNavigator();

const AppStack : FC = () => {
    return (
        <Navigator>
            <Screen name="board" component={Board}/>
        </Navigator>
    )
}

export default AppStack