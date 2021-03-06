import React, { Component } from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom';

import Login from './login';
import Signup from './signup';

class Home extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        <Route exact path='/' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
      </div>
    )
  }
}

export default Home;
