import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import {connect} from 'react-redux';

import '../../css/home/signup.scss';
import {signUp} from '../../actions/SignupAction';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      lastname:"",
      email: "",
      password: "",
      mobile: "",
      image: []
    };
  }
  inputChnaged = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  signup = (e) => {
    e.preventDefault();
    var payload = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      mobile: this.state.mobile,
      image: this.state.image.base64,
      email: this.state.email,
      password: this.state.password
    }
    console.log(payload);
    this.props.signUp(payload,this.props);
  };

   // Callback~ 
  getFiles = (files) =>{
    this.setState({ image: files });
  }

  render() {
    return (
      <React.Fragment>
        <div className="register">
          <form className="col-md-6 col-md-offset-3">
            <h2>Here you can signup!!!</h2>
            <div className="form-group row">
              <div className="col-md-6 no-padding">
                <label>Firstname: </label>
                <input type="text" name = "firstname" className="form-control" value={this.state.firstname} onChange={this.inputChnaged} autoComplete='firstname'/>
              </div>
              <div className="col-md-6 no-padding">
                <label>Lastname: </label>
                <input type="text" name = "lastname" className="form-control" value={this.state.lastname} onChange={this.inputChnaged} autoComplete='lastname'/>
              </div>
            </div>
            <div className="form-group">
              <label>Mobile number: </label>
              <input type="text" name = "mobile" className="form-control" value={this.state.mobile} onChange={this.inputChnaged} autoComplete='mobile'/>
            </div>
            <div className="form-group">
              <label>Email-ID: </label>
              <input type="text" name = "email" className="form-control" value={this.state.email} onChange={this.inputChnaged} autoComplete='email'/>
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input type="password" name = "password" className="form-control" value={this.state.password} onChange={this.inputChnaged} autoComplete='password'/>
            </div>
            <div className="form-group">
              <label>Image: </label>
              <FileBase64 multiple={false} onDone={this.getFiles} />
            </div>
            <div>
              <button className="btn btn-primary" onClick={this.signup}>Signup</button>
              <span>
                Already have account??<span><Link to="/">Login</Link></span>
              </span>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null,{signUp})(Signup);
