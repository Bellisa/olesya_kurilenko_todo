import React from 'react';
import ReactDom from 'react-dom';
import { Header } from './Header/';
import { Main } from './Main/';
import { Footer } from './Footer/';
 
const component = (
    <React.Fragment >
        <Header />
        <Main />
        <Footer />
    </React.Fragment >
);
ReactDom.render( component, document.getElementById('app') );

