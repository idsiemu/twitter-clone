import produce from 'immer';
import { UserActionType } from '~/actions/user/type';
import { user } from '~/types';

interface UserReducer {
    loading: boolean;
    user: object|null;
}

export const initialState : UserReducer = {
    loading: true,
    user: null
}


const reducer = (state = initialState, action: UserActionType) => {
    return produce(state, (draft) => {
      switch (action.type) {
        case user.SETLOADING: {
          draft.loading = action.data
          break;
        }
        case user.SETUSER: {
            draft.user = action.data
            break;
        }
        default: {
          break;
        }
      }
    });
  };
  
  export default reducer;