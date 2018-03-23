import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import AllUsers from './allUsers';
import UserProfile from './userProfile';
import SideNavbar from '../common/sideNavbar';

import '../../css/dashboard/dashboard.scss';

class  Dashboard extends Component {
  render() {
    return (
      <React.Fragment> 
        <div className="row">
          <div className="col-md-3">
            <SideNavbar urlParams={this.props.match}/>
          </div>
          <div className="col-md-9">
            <Route path={`${this.props.match.url}/userdetails`} component={UserProfile} />
            <Route path={`${this.props.match.url}/allusers`} component={AllUsers} />        
            <Route exact path={this.props.match.url} component={UserProfile} /> 
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;