import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { login } from '../../actions/LoginAction';
import '../../css/home/login.scss';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  inputChnaged = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = (e) => {
    e.preventDefault();
    var payload = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(payload,this.props);
  };

  render() {
    return (
      <div>
        <div className="login">
          <form className="col-md-6 col-md-offset-3">
            <h2>Here you can login!!!</h2>
            <div className="form-group">
                <label>User name: </label>
                <input type="text" name = "email" className="form-control" value={this.state.email} onChange={this.inputChnaged} autoComplete ="email"/>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input type="password" name = "password" className="form-control" value={this.state.password} onChange={this.inputChnaged} autoComplete ="password"/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={this.login}>Login</button>
                <span>
                  Don't have account yet??<span><Link to="/signup">Signup</Link></span>
                </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Login.propTypes  = {
  email: PropTypes.string,
  password: PropTypes.string
}
 
const mapStateToProp = (state) =>{
  return {
    userDetails: state.login.userDetails
  }
  
};
export default connect(mapStateToProp,{login})(Login);
