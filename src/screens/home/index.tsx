import React, {FC, useEffect} from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { setUser } from '~/actions/user';
import { useDispatch } from 'react-redux'
// import { getLanguages } from 'react-native-i18n';

const Home: FC = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        auth().signOut()
        dispatch(setUser(null))
    }

    // useEffect(() => {
    //     getLanguages().then(languages => {
    //         console.log(languages);
    //     });
    // }, [])

    return (
        <View>
            <TouchableOpacity onPress={logOut}>
                <Text>home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;