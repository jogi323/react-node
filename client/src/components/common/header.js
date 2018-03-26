import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import '../../css/common/header.scss';

class Header extends Component {
  logout = () => {
    localStorage.clear();
  } 
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/dashboard">My App</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
         <NavItem key={1} componentClass="span">
           <NavLink activeClassName="active" to="">Settings</NavLink>
         </NavItem>
         <NavItem key={2} componentClass="span">
           <NavLink activeClassName="active" to="/" onClick={this.logout}>Logout</NavLink>
         </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header;
