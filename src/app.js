import React from 'react';
import ReactDom from 'react-dom';
import { Navigation } from './Navigation/';

const Time = () => <time>{String(new Date())}</time>

const component = (
    <React.Fragment>
        <h1>Hello</h1>
        <Navigation />
        <Time/>
    </React.Fragment>
);
ReactDom.render(component, document.getElementById('app'));

