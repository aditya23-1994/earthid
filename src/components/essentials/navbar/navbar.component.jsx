import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import earthid_logo from '../../../assest/Home/earth-id_logo.png';
import './navbar.styles.scss';

export const NavBar = () => (
  <div className='navbar-main'>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top'>
      <Navbar.Brand href='#home'>
        <img src={earthid_logo} alt='logo' className='brand-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/Resources/blogs'>blogs</Nav.Link>
          <NavDropdown title='Solutions' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/solution/products'>Products</NavDropdown.Item>
            <NavDropdown.Item href='/solution/use-case'>Use Cases</NavDropdown.Item>
            <NavDropdown.Item href='/solution/industries'>Industries</NavDropdown.Item>
            <NavDropdown.Item href='/solution/compliance'>Compliance</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/solution/3.4'>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
