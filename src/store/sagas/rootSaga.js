import { all } from 'redux-saga/effects';
import {
  watchGetUserAsync,
  watchLoginUserAsync,
  watchLogoutUserAsync,
  watchRegistUserAsync,
  watchUpdateUserAsync
} from './userSaga';

import {
  watchGetTodosAsync,
  watchUpdateTodoAsync,
  watchDeleteTodoAsync
} from './tasksSaga';

export function* rootSaga() {
  yield all([
    watchGetUserAsync(),
    watchLoginUserAsync(),
    watchLogoutUserAsync(),
    watchRegistUserAsync(),
    watchUpdateUserAsync(),

    watchGetTodosAsync(),
    watchUpdateTodoAsync(),
    watchDeleteTodoAsync()
  ]);
}

