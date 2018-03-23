import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class SideNavbar extends Component {

  render() {
    return (
      <div>
        <Nav>
            <NavItem componentClass="div">
                <NavLink activeClassName="active" to={`${this.props.urlParams.url}/userdetails`}>
                 Profile
                </NavLink>
            </NavItem>
            <NavItem componentClass="div">
                <NavLink activeClassName="active" to={`${this.props.urlParams.url}/allusers`}>
                All users
                </NavLink>
            </NavItem>
        </Nav>
      </div>
    )
  }
}

export default SideNavbar;
