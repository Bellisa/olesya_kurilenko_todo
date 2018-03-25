import React from 'react';
import './navigation.scss';
import { ComNavMenu } from '../Components/ComNavMenu';
import { ComWelcomInfo } from '../Components/ComWelcomInfo';

export const Navigation = ({ pages }) => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-nav">
    <a className="navbar-brand font-italic " href="/" title="Olesya Kurilenko : ToDo">
      O.K. ToDo
    </a>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ComNavMenu pages={pages} />
    </div>
    <div className="flex-row ml-md-auto d-none d-md-flex text-white">
      <ComWelcomInfo time={new Date().getHours()} name="Ilia" />
    </div>
  </nav>
);
