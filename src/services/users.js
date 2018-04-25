import { rest } from './rest';

export const login = (data = {}) => rest.post(
  'public/login',
  data
);

export const checkUser = () => rest.get('public/checkUser');

export const logOut = () => rest.get('public/logout');
