import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {CProps} from './type';

const KeyBoardArea = ({children}: CProps) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1, marginTop: 90}}>
            {children}
        </KeyboardAvoidingView>
    );
};

export default KeyBoardArea;
