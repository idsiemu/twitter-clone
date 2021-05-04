import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Board from '~/screens/board';
import Home from '~/screens/home';
import Verify from '~/screens/verify';
import { UserObject } from '~/actions/user/interface';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyle from '~/constants/globalStyle';
import Left from '~/components/header/left';
const {Navigator, Screen} = createStackNavigator();

const AppStack : FC<UserObject> = (props) => {
    return (
        <Navigator>
            {(props.emailVerified || props.phoneNumber) ?
                (
                    <React.Fragment>
                        <Screen name="home" component={Home} options={{
                            title: '',
                            headerTransparent:true,
                            headerTitle: () => <Icon name="twitter" size={48} color={globalStyle.blue.color} style={{zIndex: 10}}/>,
                            headerTitleAlign: 'center',
                            headerLeft: (props) => <Left {...props}/>
                        }}/>
                        <Screen name="board" component={Board}/>
                    </React.Fragment>
                )
            :
                (
                    <Screen name="verifiy" component={Verify} options={{
                        title: '',
                        headerTransparent:true,
                        headerTitle: () => <Icon name="twitter" size={48} color={globalStyle.blue.color} style={{zIndex: 10}}/>,
                        headerTitleAlign: 'center'
                    }}/>
                )
            }
        </Navigator>
    )
}

export default AppStack