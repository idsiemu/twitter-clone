import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '~/screens/login';
import Signup from '~/screens/signup';
import Left from '~/components/header/left';
import globalStyle from '~/constants/globalStyle';
import Icon from 'react-native-vector-icons/FontAwesome';


const {Navigator, Screen} = createStackNavigator();

const AuthStack: FC = () => {
    return (
        <Navigator>
            <Screen name="login" component={Login} options={{
                title: '',
                headerTransparent:true,
                headerTitle: () => <Icon name="twitter" size={48} color={globalStyle.blue.color} style={{zIndex: 10}}/>,
                headerTitleAlign: 'center',
                headerLeft: (props) => <Left {...props}/>
            }}/>
            <Screen name="signup" component={Signup} options={{
                title: '',
                headerTransparent:true,
                headerTitle: () => <Icon name="twitter" size={48} color={globalStyle.blue.color} style={{zIndex: 10}}/>,
                headerTitleAlign: 'center',
                headerLeft: (props) => <Left {...props}/>
            }}/>
        </Navigator>
    );
};

export default AuthStack;
