import { put, getContext, take, call, all, takeEvery, fork } from 'redux-saga/effects'
import { LOGIN } from '~/actions/user/interface'

function* watchUserSaga() {
    // yield all([fork(loginSaga)]);

}

// function* loginSaga(action: LOGIN) {
//     const { data } = action;
//     yield call()
// }

export default watchUserSaga