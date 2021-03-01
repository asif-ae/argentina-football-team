import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './HeaderSection.css';
import logo from '../../logo.svg';

const brandName = "Argentina National Football Team";

const HeaderSection = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header bg-primary">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#home" className="brand-logo-style text-white">
            <img src={logo} alt={brandName} /><span className="d-none d-md-inline-block">{brandName}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      {/* /Header Section */}
    </div>
  );
};

export default HeaderSection;