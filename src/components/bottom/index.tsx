import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
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

const Bottom = ({moongu, btnName, hamsu, disabled, loading}: BProps) => {
    return (
        <BottomTopLine>
            <BottomContainer>
                <TouchableOpacity>
                    <Text style={globalStyle.blue}>{moongu}</Text>
                </TouchableOpacity>
                {loading ?
                    <TouchableOpacity style={[{alignItems:'center', justifyContent:'center', borderRadius: 22, height:35, width: 70}, disabled ? globalStyle.disabledColor : globalStyle.blueBackground]} onPress={hamsu} disabled={disabled}>
                        <ActivityIndicator size="small" color='white'/>
                    </TouchableOpacity>
                :
                    <TouchableOpacity style={[{alignItems:'center', justifyContent:'center', borderRadius: 22, height:35, width: 70}, disabled ?globalStyle.disabledColor : globalStyle.blueBackground]} onPress={hamsu} disabled={disabled}>
                        <Text style={{color: 'white', fontSize:18}}>{btnName}</Text>
                    </TouchableOpacity>
                }
            </BottomContainer>
        </BottomTopLine>
    );
};

export default Bottom;
