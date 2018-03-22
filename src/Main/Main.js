import React from 'react';
import './main.scss';
import { Aside } from '../Aside/';
import { Content } from '../Content/';

export const Main = () => (
    <div class='main'>
       <Aside />
       <Content />
    </div>
);