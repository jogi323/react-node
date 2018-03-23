import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom';

import Login from './components/home/login';
import Signup from './components/home/signup';
import Dashboard from './components/dashboard/dashboard';

import Header from './components/common/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>          
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route  path='/signup' component={Signup}/>          
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </div>
    )
  }
}

export default App;