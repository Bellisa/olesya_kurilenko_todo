export const SET_USER = 'Make plus one year';
export const UPDATE_USER = 'Make minus one year';
export const REMOVE_USER = 'Make minus one year';
export const SetUser = data => ({ type: SET_USER, data });
export const UpdateUser = data => ({ type: UPDATE_USER, data });
export const RemoveUser = () => ({ type: REMOVE_USER });

export const ADD_TASK = 'Add new task';
export const AddTodo = task => ({ type: ADD_TASK, task });

export const UPDATE_TASK = 'Update new task';
export const UpdateTodo = task => ({ type: UPDATE_TASK, task });

export const GET_ALL_TASKS = 'Get all tasks';
export const GetAllTodos = () => ({ type: GET_ALL_TASKS });

export const SET_ALL_TASKS = 'Set all tasks';
export const SetAllTodos = tasks => ({ type: SET_ALL_TASKS, tasks });

export const GET_TASK_BY_ID = 'Get task by id';
export const GetTodoById = id => ({ type: GET_TASK_BY_ID, id });

export const DELETE_TASK_BY_ID = 'Delete task by id';
export const DeleteTodoById = id => ({ type: DELETE_TASK_BY_ID, id });
