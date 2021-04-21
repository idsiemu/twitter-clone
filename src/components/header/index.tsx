import React, {FC} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styled from 'styled-components/native';
import globalStyle from '~/constants/globalStyle';
import { HeaderProps } from './type';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import * as Animatable from 'react-native-animatable';
import {fadeIn, fadeOut, defaultDuration} from '~/constants/aniOptions';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '~/reducers';
import {setLeft, setLeftIcon, setRight, setRightIcon} from '~/actions/header/index';

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

const Header: FC<HeaderProps> = ({isArrow}) => {
    const dispatch = useDispatch();
    const {left, leftIcon, right, rightIcon} = useSelector((state: RootState) => state.header);
    const onClickLeft = () => {
        if(leftIcon === '취소'){
            dispatch(setLeft(!left))
        }else{
            
        }
    }

    return (
        <HeaderView>
            <AnimatedView animation={left ? fadeIn : fadeOut} duration={defaultDuration} useNativeDriver={false}>
                {left &&
                    <TouchableOpacity onPress={onClickLeft}>
                        <Text style={[globalStyle.fontSize, globalStyle.blue]}>{leftIcon}</Text>
                    </TouchableOpacity>
                }
            </AnimatedView>
            <View>
                <HeaderIcon source={require('~/images/icons/twitter-48.png')} />
            </View>
        </HeaderView>
    );
};

export default Header;
