export const SET_USER = 'Make plus one year';
export const UPDATE_USER = 'Make minus one year';
export const REMOVE_USER = 'Make minus one year';
export const SetUser = data => ({ type: SET_USER, data });
export const UpdateUser = data => ({ type: UPDATE_USER, data });
export const RemoveUser = () => ({ type: REMOVE_USER });

export const ADD_TASK = 'Add new task';
export const addTodo = task => ({ type: ADD_TASK, task });
