import {
  SET_USER, UPDATE_USER, REMOVE_USER,
  GET_TASK_BY_ID, ADD_TASK, UPDATE_TASK, DELETE_TASK_BY_ID, SET_ALL_TASKS,
  SET_ERROR

} from './actions';

export const user = (state = false, { type, data }) => {
  switch (type) {
    case SET_USER:
    case UPDATE_USER: {
      return data;
    }

    case REMOVE_USER:
      return null;
  }

  return state;
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newState = [...state, action.task];
      return newState;
    }
    case DELETE_TASK_BY_ID: {
      const newState = state.map(day => day.filter(e => e.id !== action.id));
      return newState;
    }
    case UPDATE_TASK: {
      const newState = state.map(day => day.map(ts => (ts.id === action.task.id ? { ...action.task } : { ...ts })));
      return newState;
    }
    case GET_TASK_BY_ID: {
      const newState = state.map(day => day.filter(e => e.id === action.id));
      return newState;
    }
    case SET_ALL_TASKS: {
      const newState = [...action.tasks];
      return newState;
    }
  }
  return state;
};

export const error = (state = '', { type, data = '' }) => {
  switch (type) {
    case SET_ERROR:
      return data;
  }

  return state;
};
