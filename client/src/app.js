import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom';

import Login from './components/home/Login';
import Signup from './components/home/Signup';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
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