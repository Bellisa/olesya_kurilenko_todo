import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_ALL_TASKS_ASYNC,
  UPDATE_TASK_ASYNC,
  DELETE_TASK_BY_ID_ASYNC,
  SetAllTodos,
  UpdateTodo,
  DeleteTodoById
} from '../actionsTask';
import {
  getTodos,
  deleteTask,
  updateTask
} from '../../services';

export function* getTodosAsync() {
  try {
    const tasks = yield getTodos();
    yield put(SetAllTodos(tasks));
  } catch (err) { }
}
export function* watchGetTodosAsync() {
  yield takeEvery(GET_ALL_TASKS_ASYNC, getTodosAsync);
}

export function* updateTodosAsync(data) {
  try {
    const tasks = yield updateTask(data.task);
    yield put(UpdateTodo(tasks));
  } catch (err) { }
}
export function* watchUpdateTodoAsync() {
  yield takeEvery(UPDATE_TASK_ASYNC, updateTodosAsync);
}

export function* deleteTodosAsync(data) {
  try {
    const tasks = yield deleteTask(data.id);
    yield put(DeleteTodoById(tasks.id));
  } catch (err) { }
}
export function* watchDeleteTodoAsync() {
  yield takeEvery(DELETE_TASK_BY_ID_ASYNC, deleteTodosAsync);
}
