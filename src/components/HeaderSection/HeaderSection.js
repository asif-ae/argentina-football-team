import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './HeaderSection.css';
import logo from '../../logo.svg';

const brandName = "Argentina National Football Team";

const HeaderSection = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header bg-primary container-fluid">
        {/* NavBar Using ReactBootstrap */}
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/" className="brand-logo-style text-white">
            <img src={logo} alt={brandName} /><span className="d-none d-md-inline-block">{brandName}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/players">Players</Nav.Link>
              <Nav.Link href="/schedule">Schedule</Nav.Link>
              <NavDropdown title="Videos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/video">Video Hub</NavDropdown.Item>
                <NavDropdown.Item href="/highlights">Highlights</NavDropdown.Item>
                <NavDropdown.Item href="/special">Special Goals</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/press-conferences">Press Conferences</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link eventKey={2} href="more">More</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      {/* /Header Section */}
    </div>
  );
};

export default HeaderSection;