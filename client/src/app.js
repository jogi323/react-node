import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom';
// Alerts
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
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
        <Alert stack={{limit: 3}} timeout={5000} />
      </div>
    )
  }
}

export default App;