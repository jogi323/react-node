import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginAction';
import PropTypes from 'prop-types';

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
                  <input type="text" name = "email" className="form-control" value={this.state.email} onChange={this.inputChnaged}/>
              </div>
              <div className="form-group">
                  <label>Password: </label>
                  <input type="password" name = "password" className="form-control" value={this.state.password} onChange={this.inputChnaged}/>
              </div>
              <div>
                  <button className="btn btn-primary" onClick={this.login}>Submit</button>
              </div>
            </form>
            
        </div>
      </div>
    )
  }
}

 
const mapStateToProp = (state) =>{
  return {
    userDetails: state.login.userDetails
  }
  
};
export default connect(mapStateToProp,{login})(Login);
