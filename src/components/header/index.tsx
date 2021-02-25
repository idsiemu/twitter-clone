import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styled from 'styled-components/native';
import globalStyle from '~/constants/globalStyle';
import {IProps} from './type';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import * as Animatable from 'react-native-animatable';
import {fadeIn, fadeOut, defaultDuration} from '~/constants/aniOptions';

const HeaderView = styled.View`
    position: absolute;
    width: 100%;
    justify-content: center;
    align-items: center;
    top: ${getStatusBarHeight()}px;
`;

const AnimatedView = Animatable.createAnimatableComponent(styled.View`
    position: absolute;
    z-index: 1;
    left: 20px;
`);

const HeaderIcon = styled.Image``;

const Header = ({cancel, onPress}: IProps) => {
    return (
        <HeaderView>
            <AnimatedView animation={cancel ? fadeIn : fadeOut} duration={defaultDuration} useNativeDriver={false}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={[globalStyle.fontSize, globalStyle.blue]}>취소</Text>
                </TouchableOpacity>
            </AnimatedView>
            <View>
                <HeaderIcon source={require('~/images/icons/twitter-48.png')} />
            </View>
        </HeaderView>
    );
};

export default Header;
