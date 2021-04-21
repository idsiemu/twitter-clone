import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import globalStyle from '~/constants/globalStyle';
import styled from 'styled-components/native';
import {BProps} from './type';

const BottomTopLine = styled.View`
    padding-top: 8px;
    padding-bottom: 8px;
    border-top-width: 1px;
    border-top-color: lightgray;
`;

const BottomContainer = styled.View`
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Bottom = ({moongu, hamsu, disabled}: BProps) => {
    return (
        <BottomTopLine>
            <BottomContainer>
                <TouchableOpacity>
                    <Text style={globalStyle.blue}>{moongu}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{borderRadius: 22, padding: 8}, globalStyle.blueBackground]} onPress={hamsu} disabled={disabled}>
                    <Text style={{color: 'white'}}>로그인</Text>
                </TouchableOpacity>
            </BottomContainer>
        </BottomTopLine>
    );
};

export default Bottom;
