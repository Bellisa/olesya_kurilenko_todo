import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_USER_ASYNC,
  SetUser,
  AUTH_USER_ASYNC,
  UpdateUser,
  RemoveUser,
  LOGOUT_USER_ASYNC,
  REGIST_USER_ASYNC,
  UPDATE_USER_ASYNC

} from '../actions';
import {
  checkUser,
  login,
  logOut,
  registration,
  updateUser
} from '../../services';

export function* getUser() {
  console.log(' ------------ getUser');
  const user = yield checkUser()
    .catch(err => console.log(err, ' getUser error'));
  if (user !== undefined) {
    yield put(SetUser(user));
  } else {
    yield put(SetUser(null));
  }
}
export function* watchGetUserAsync() {
  yield takeEvery(GET_USER_ASYNC, getUser);
}

export function* loginUser(data) {
  console.log(data, ' loginUser data');
  const user = yield login(data.data);
  console.log(user, ' loginUser ---- ');
  if (user !== undefined) {
    yield put(SetUser(user));
  }
}
export function* watchLoginUserAsync() {
  yield takeEvery(AUTH_USER_ASYNC, loginUser);
}

export function* logoutUser() {
  const user = yield logOut();
  console.log(user, 'logoutUser ');
  yield put(RemoveUser());
}
export function* watchLogoutUserAsync() {
  yield takeEvery(LOGOUT_USER_ASYNC, logoutUser);
}

export function* registUser(data) {
  const user = yield registration(data.data);
  console.log(user, 'registUser');
  if (user !== undefined) {
    yield put(SetUser(user));
  }
}
export function* watchRegistUserAsync() {
  yield takeEvery(REGIST_USER_ASYNC, registUser);
}

export function* updateUserAs(data) {
  const user = yield updateUser(data.data);
  console.log(user, 'updateUserAs');
  if (user !== undefined) {
    yield put(UpdateUser(user));
  }
}
export function* watchUpdateUserAsync() {
  yield takeEvery(UPDATE_USER_ASYNC, updateUserAs);
}
