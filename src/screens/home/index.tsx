import React, {FC, useEffect, useState} from 'react'
import { Text, View, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { setUser } from '~/actions/user';
import { useDispatch, useSelector } from 'react-redux'
import Container from '~/components/container';
import { SafeAreaView } from "react-native-safe-area-context"
// import { getLanguages } from 'react-native-i18n';
import { SearchBar } from 'react-native-elements';
import { RootState } from '~/reducers';


const Home: FC = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => state.user);
    const [search, setSearch] = useState('')
    const logOut = () => {
        auth().signOut()
        dispatch(setUser(null))
    }

    useEffect(() => {
        
    })
    // useEffect(() => {
    //     getLanguages().then(languages => {
    //         console.log(languages);
    //     });
    // }, [])

    return (
        <Container>
            <SafeAreaView>
                <SearchBar
                    platform={Platform.OS === 'ios' ? 'ios' : 'android'}
                    placeholder="Type Here..."
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
            </SafeAreaView>
        </Container>
    )
}

export default Home;