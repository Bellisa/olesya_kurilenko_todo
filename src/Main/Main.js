import React from 'react';
import './main.scss';
import { Aside } from '../Aside/';
import { Content } from '../Content/';

export const Main = () => (
  <React.Fragment>
    <div className="main">
      <Aside />
      <Content />
    </div>
  </React.Fragment>
);
