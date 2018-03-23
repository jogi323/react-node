import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">My App</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
         <NavItem key={1} componentClass="span">
           <NavLink activeClassName="active" to="/">Login</NavLink>
         </NavItem>
         <NavItem key={2} componentClass="span">
           <NavLink activeClassName="active" to="/signup">Signup</NavLink>
         </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header;
