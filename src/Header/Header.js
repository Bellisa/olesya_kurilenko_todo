import React from 'react';
import './header.scss';
import { Navigation } from '../Navigation/';

export const Header = () => (
  <header className="header">
    <Navigation isLogin />
  </header>
);
