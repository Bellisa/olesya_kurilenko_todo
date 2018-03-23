import React from 'react';
import './navigation.scss';

export const Navigation = props => (
  <nav className="main-nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      {
        props.isLogin && <li><a href="user">User</a></li>
      }
    </ul>
  </nav>);

