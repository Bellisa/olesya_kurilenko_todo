import React from 'react';
import 'bootstrap';
import './main.scss';
import { Aside } from '../Aside/';
import { Content } from '../Content/';

export const Main = () => (
  <main role="main" className="container container-padding">
    <div className="row ">
      <Aside />
      <Content />
    </div>
  </main>
);
