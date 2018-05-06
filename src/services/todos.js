import { rest } from './rest';

export const getTodos = () => rest.get('tasks');

export const getTaskInfo = () => rest.get('info');

export const getTaskById = (id = 0) => rest.get(`tasks/${id}`);

export const updateTask = task => rest.put(
  `tasks/${task.id}`,
  task
);
export const addTask = (task = {}) => rest.post(
  'tasks',
  task
);

export const deleteTask = id => rest.delete(`tasks/${id}`);
