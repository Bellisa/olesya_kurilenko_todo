export const SET_USER = 'Set user state';
export const UPDATE_USER = 'Update user state';
export const REMOVE_USER = 'Remove user in state';
export const SetUser = data => ({ type: SET_USER, data });
export const UpdateUser = data => ({ type: UPDATE_USER, data });
export const RemoveUser = () => ({ type: REMOVE_USER });

export const GET_USER_ASYNC = 'Get user async';
export const getUserAsync = () => ({ type: GET_USER_ASYNC });

export const LOGOUT_USER_ASYNC = 'Logout user async';
export const logOutUserAsync = () => ({ type: LOGOUT_USER_ASYNC });

export const AUTH_USER_ASYNC = 'Authentication user async';
export const authUserAsync = data => ({ type: AUTH_USER_ASYNC, data });

export const REGIST_USER_ASYNC = 'Registration user async';
export const registUserAsync = data => ({ type: REGIST_USER_ASYNC, data });

export const UPDATE_USER_ASYNC = 'Update user async';
export const updateUserAsync = data => ({ type: UPDATE_USER_ASYNC, data });

// ////////////////////////// TASKS ///////////////////////////////////
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

// ///////////// ERROR //////////////////////////////////////
export const SET_ERROR = 'Set error';
export const setError = data => ({ type: SET_ERROR, data });
