import {GestureResponderEvent} from 'react-native';

export interface IProps {
    cancel?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}