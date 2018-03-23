import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './app';
import store from './store/store';

const root = document.getElementById('root');

render(
    <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,root
);