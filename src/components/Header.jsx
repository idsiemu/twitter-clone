import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Animated.View style={[{position:'absolute', zIndex: 1, left: 20, opacity: fadeAnim}]}>
                <TouchableOpacity onPress={toggleLogin}>
                    <Text style={[globalStyle.fontSize, globalStyle.blue]}>취소</Text>
                </TouchableOpacity>
            </Animated.View>
            <View>
                <Image style={styles.logoImage} source={require('~/images/icons/twitter-100.png')}/>
            </View>
        </View>
    )
}