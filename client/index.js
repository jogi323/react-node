import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './app';
import Login from './src/components/login';
import Dashboard from './src/components/dashboard';

const root = document.getElementById('root');
render(
    <Router>
        <Switch>
            <App>
                <Route exact path='/' component={Login}/>
                <Route exact path='/dashboard' component={Dashboard}/>
            </App>
        </Switch>
    </Router>,
    root
);