import {combineReducers} from 'redux';
import user from './user';
import header from './header';
// (이전상태, 액션) => 다음상태
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({
        user,
        header
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
