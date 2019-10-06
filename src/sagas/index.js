
import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from './../contants/typeAction';
import { usersApi } from './../ultils/usersApi';
import * as actions from './../actions';

function* registerUser(action) {
  try {
    const res = yield usersApi.registerUser(action.user);
    yield put(actions.registerSuccess(res.data));
    
  } catch (error) {
    yield put(actions.registerFailure(error));
  }

}

function * authorize(action){
  try {
    const res = yield usersApi.authorize(action.user);
    var token = res.data.token;
    yield put(actions.loginSuccess());
    yield put(actions.saveToken(token));
     
  } catch (error) {
    yield put(actions.loginFailure(error));
  }


}

function* watchRegisterUser() {
  yield takeLatest(types.REGISTER_REQUEST, registerUser);
}

function* watchAuthorize() {
  yield takeLatest(types.LOGIN_REQUEST, authorize);
}


export default function* rootSaga() {
  yield fork(watchRegisterUser);
  yield fork(watchAuthorize);
}