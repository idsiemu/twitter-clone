import React, {FC} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles'

const Home: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('~/images/icons/twitter-100.png')}/>
            </View>
            <View style={styles.middle}>
                <Text>여러분 주위에 무슨일이 일어나고있는지 알아보세요</Text>
                <TouchableOpacity>
                    <Text>계정 생성하기</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Text>이미 계정이 있으신가요?</Text>
                <Text>로그인</Text>
            </View>
        </View>
    )
}

export default Home;