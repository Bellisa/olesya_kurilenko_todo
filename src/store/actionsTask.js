export const SET_ALL_TASKS = 'Set all tasks';
export const SetAllTodos = tasks => ({ type: SET_ALL_TASKS, tasks });

export const ADD_TASK = 'Add new task';
export const AddTodo = task => ({ type: ADD_TASK, task });

export const ADD_TASK_ASYNC = 'Add new task async';
export const AddTodoAsync = task => ({ type: ADD_TASK_ASYNC, task });

export const UPDATE_TASK = 'Update new task';
export const UpdateTodo = task => ({ type: UPDATE_TASK, task });

export const UPDATE_TASK_ASYNC = 'Update task async';
export const UpdateTodoAsync = task => ({ type: UPDATE_TASK_ASYNC, task });

export const GET_ALL_TASKS_ASYNC = 'Get all tasks async';
export const GetAllTodosAsync = () => ({ type: GET_ALL_TASKS_ASYNC });

export const GET_TASK_BY_ID = 'Get task by id';
export const GetTodoById = id => ({ type: GET_TASK_BY_ID, id });

export const DELETE_TASK_BY_ID = 'Delete task by id';
export const DeleteTodoById = id => ({ type: DELETE_TASK_BY_ID, id });

export const DELETE_TASK_BY_ID_ASYNC = 'Delete task by id async';
export const DeleteTodoByIdAsync = id => ({ type: DELETE_TASK_BY_ID_ASYNC, id });
