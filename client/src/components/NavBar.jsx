import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

import Footer from './Footer';
import logoV1 from '../assets/pcd_logo_v1.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar expand="lg" className="app-nav" style={{ borderBottom: '1px solid #ccc' }}>
        <NavbarBrand href="/">
          <img src={logoV1} className="nav-logo" alt="Pittsburgh Doors & Closets Logo" style={{ width: '220px', height: 'auto' }} />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar className="right-nav">
          <Nav className="me-auto" navbar>
            <NavItem style={{ marginLeft: '20px', marginRight: '20px' }}>
              <NavLink href="/why">Why Choose Us</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/closets">Closets</NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="/doors">Doors</NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="/entry">Entryway</NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="/garage">Garage Storage</NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="/living">Living Spaces</NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="/storage">Storage Solutions</NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="/workspace">Workspace</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem style={{ marginLeft: '20px', marginRight: '1px' }}>
              <NavLink href="/gallery">Gallery</NavLink>
            </NavItem>

            <NavItem style={{ marginLeft: '20px', marginRight: '5px' }}>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>

            <NavbarText
              className="phone-number"
              style={{
                marginRight: '30px',
                marginLeft: '20px',
                fontSize: '1.2rem',
              }}
            >
              Call (724) 201-6421
            </NavbarText>

            {/* Free Consultion Button */}

            <Button
              className="service-button"
              style={{
                backgroundColor: '#179d97',
                color: 'white',
                padding: '1px 1px',
              }}
            >
              <NavLink style={{ color: 'white' }} href="/consultation">
                Free Design Consultation
              </NavLink>
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="nav-spacer"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
