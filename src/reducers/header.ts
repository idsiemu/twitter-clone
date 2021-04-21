import produce from 'immer';
import { HeaderActionType } from '~/actions/header/type';
import { header } from '~/types'

interface HeaderReducer {
    left: boolean;
    leftIcon: string;
    right: boolean;
    rightIcon: string;
}

export const initialState : HeaderReducer = {
    left: false,
    leftIcon: '취소',
    right: false,
    rightIcon: ''
}


const reducer = (state = initialState, action: HeaderActionType) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case header.SETLEFT: {
                draft.left = action.data
                break;
            }
            case header.SETLEFTICON: {
                draft.leftIcon = action.data
                break;
            }
            case header.SETRIGHT: {
                draft.right = action.data
                break;
            }
            case header.SETRIGHTICON: {
                draft.rightIcon = action.data
                break;
            }
            default: {
                break;
            }
        }
    });
  };
  
  export default reducer;