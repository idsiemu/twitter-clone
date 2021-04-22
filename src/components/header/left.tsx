import React, {FC} from 'react';
import globalStyle from '~/constants/globalStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '~/reducers';
import { Text, TouchableOpacity } from 'react-native';
import { setLeft } from '~/actions/header';


const ViewIcon = styled.View`
    height: 48px;
    display:flex;
    justify-content:center;
    left: 20px;
`;

const Left: FC<any> = (props) => {
  const isOnPress = props.onPress
  const canGoBack = props.canGoBack
  const { left, leftIcon } = useSelector((state: RootState) => state.header);
  const dispatch = useDispatch()

  const onPress = () => {
    if(isOnPress){
      isOnPress()
    }else{
      dispatch(setLeft(!left))
    }
  }

  return (
    <ViewIcon>
      {
        canGoBack ?
          (
            <Icon name="chevron-left" size={24} color={globalStyle.blue.color} onPress={onPress}/>
          )
        :
          (
            left &&
            <TouchableOpacity onPress={onPress}>
              <Text style={[globalStyle.fontSize, globalStyle.blue]}>취소</Text>
            </TouchableOpacity>
          )
      }
    </ViewIcon>
  );
};

export default Left;
