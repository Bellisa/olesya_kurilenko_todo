import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_ALL_TASKS_ASYNC,
  UPDATE_TASK_ASYNC,
  DELETE_TASK_BY_ID_ASYNC,
  SetAllTodos,
  UpdateTodo,
  DeleteTodoById
} from '../actions';
import {
  getTodos,
  deleteTask,
  updateTask
} from '../../services';

export function* getTodosAsync() {
  const tasks = yield getTodos()
    .catch(err => console.log(err, ' get tasks error'));

  if (tasks !== undefined) {
    yield put(SetAllTodos(tasks));
  }
}
export function* watchGetTodosAsync() {
  yield takeEvery(GET_ALL_TASKS_ASYNC, getTodosAsync);
}

export function* updateTodosAsync(data) {
  const tasks = yield updateTask(data.task)
    .catch(err => console.log(err, ' update tasks error'));
  if (tasks !== undefined) {
    yield put(UpdateTodo(tasks));
  }
}
export function* watchUpdateTodoAsync() {
  yield takeEvery(UPDATE_TASK_ASYNC, updateTodosAsync);
}

export function* deleteTodosAsync(data) {
  const tasks = yield deleteTask(data.id)
    .catch(err => console.log(err, ' deletes tasks error'));
  if (tasks !== undefined) {
    yield put(DeleteTodoById(tasks.id));
  }
}
export function* watchDeleteTodoAsync() {
  yield takeEvery(DELETE_TASK_BY_ID_ASYNC, deleteTodosAsync);
}
