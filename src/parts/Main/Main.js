import React from 'react';
import { Content } from '../Content';
import './main.scss';

export const Main = props => (
  <React.Fragment>
    <main className="main">
      <Content />
      <button onClick={() => props.history.push('/tasks')} />
    </main>
  </React.Fragment>
);
