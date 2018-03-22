import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './app';
import Home from './src/components/home/home';
import Login from './src/components/home/login';
import Signup from './src/components/home/signup';
import Dashboard from './src/components/dashboard/dashboard';
import UserProfile from './src/components/dashboard/userProfile';
import AllUsers from './src/components/dashboard/allUsers';
import NoMatch from './src/components/common/noMatch';

const root = document.getElementById('root');

render(
    <Router>
        <Switch> 
            <App>
                <Route exact path='/' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                <Route  path='/user' component={UserProfile}/>
                <Route  path='/allusers' component={AllUsers}/>
            </App> 
        </Switch>
    </Router>,
    root
);