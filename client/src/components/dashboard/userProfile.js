import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';

import {login} from '../../actions/loginAction';
import '../../css/dashboard/UserProfile.scss';

class UserProfile extends Component {
  constructor (props){
    super(props);
    this.state = {
      userDetails : {}
    }
  }

  componentWillMount(){
   this.state.userDetails = JSON.parse(localStorage.getItem("userDetails"));
  };

  render() {
    return (
      this.state.userDetails ?
      <div className="user-details">
        <div className="user-image">
          <img src={this.state.userDetails.image}/>
        </div>
        <div className="user-name">
          <label>Name: </label>
          <span>{this.state.userDetails.firstname+ ' '+ this.state.userDetails.lastname}</span>
        </div>
        <div className="user-email">
          <label>Email-ID: </label>
          <span>{this.state.userDetails.email}</span>
        </div>
        <div className="user-mobile">
          <label>Mobile number: </label>
          <span>{this.state.userDetails.mobile}</span>
        </div>
      </div>:
      <div className="no-details">
        <h3>User details are not found.</h3>
      </div>
    )
  }
}

export default UserProfile;
