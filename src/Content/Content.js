import React from 'react';
import './content.scss';
import { ComNumList } from '../Components/ComNumList';
import { ComUsersGridList } from '../Components/ComUsersGridList';
import { users } from '../constants';

export const Content = () => (
  <div className="my-3 p-3 col-md-9 bg-white rounded box-shadow min-height">
    <h4>Content</h4>
    <ComNumList from={5} to={9} even />
    <h3>Users</h3>
    <ComUsersGridList users={users} />
  </div>
);
