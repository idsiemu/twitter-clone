import React, {FC} from 'react'
import { Text, View } from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

const Signup: FC<StackScreenProps<any, 'login'>> = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.goBack()}>
                signup
            </Text>
        </View>
    )
}

export default Signup;