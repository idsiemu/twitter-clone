import produce from 'immer';
import { UserObject } from '~/actions/user/interface';
import { UserActionType } from '~/actions/user/type';
import { user } from '~/types';

interface UserReducer {
    user: UserObject | null;
}

export const initialState : UserReducer = {
    user: null
}


const reducer = (state = initialState, action: UserActionType) => {
    return produce(state, (draft) => {
      switch (action.type) {
        case user.SETUSER: {
            draft.user = action.data
            break;
        }
        case user.SETEMAILVERIFY: {
          if(draft.user){
            draft.user.emailVerified = action.data
          }
          break;
      }
        default: {
          break;
        }
      }
    });
  };
  
  export default reducer;