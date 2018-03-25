import React from 'react';
import 'bootstrap';
import './main.scss';
import { Aside } from '../Aside/';
import { Content } from '../Content/';

export const Main = () => (
  <main role="main" className="container container-padding">
    <div className="container-flex">
      <div className="row ">
        <Aside />
        <Content />
      </div>
    </div>
  </main>
);
