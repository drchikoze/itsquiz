import React, {Component} from 'react'
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar fixedTop={false}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> its quiz test </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        <LinkContainer to="/movies">
          <NavItem eventKey={1}>Movies</NavItem>
        </LinkContainer>
        <LinkContainer to="/addMovie">
          <NavItem eventKey={1}>Add new movie</NavItem>
        </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}
