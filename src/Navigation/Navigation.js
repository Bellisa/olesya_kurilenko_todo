import React from 'react';
import './navigation.scss';

export const Navigation = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-nav">
    <a className="navbar-brand font-italic " href="/" title="Olesya Kurilenko">
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
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
      </ul>
    </div>
  </nav>

);
/*  <nav className="main-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        {
          props.isLogin && <li><a href="user">User</a></li>
        }
      </ul>
    </nav> */
