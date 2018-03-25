import React from 'react';
import './header.scss';
import { Navigation } from '../Navigation/';
import { pages } from '../constants';

export const Header = () => (
  <header className="header">
    <Navigation pages={pages} />
  </header>
);
