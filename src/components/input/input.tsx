import React, {FC} from 'react';
import { TextInput } from "react-native"
import globalStyle from "~/constants/globalStyle"
import { InputProps } from './type'

const Input: FC<InputProps | any> = ({placeholder, autoFocus, secureTextEntry, onChangeText, value, onFocus, bottomColor}, ...props) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[
          {
              fontSize: 18,
              borderBottomWidth: 1,
              borderBottomColor: bottomColor ? bottomColor : 'lightgray',
              height: 50,
          },
          globalStyle.blue,
      ]}
      autoFocus={autoFocus}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      onFocus={onFocus}
    />
  )
}

export default Input