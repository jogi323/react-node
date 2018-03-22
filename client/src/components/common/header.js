import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">My App</Link>
            {/* to={`${this.props.urlParams.url}`} */}
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1}>
            <Link to="/">Login</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/signup">Sign up</Link>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header;
