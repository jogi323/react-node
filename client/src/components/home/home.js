import React, { Component } from 'react'
import Header from '../common/header';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';

class Home extends Component {
    constructor(props){
        super(props);
    }
  render() {
      console.log(this.props.match)
    return (
      <div>
        <Header urlParams={this.props.match}/>
        {this.props.children}
        {/* <Router> */}
            {/* <Route exact path={`${this.props.match.url}`} component={Login}/>
            <Route exact path={`${this.props.match.url}signup`} component={Signup}/>             */}
        {/* </Router> */}
      </div>
    )
  }
}

export default Home;
