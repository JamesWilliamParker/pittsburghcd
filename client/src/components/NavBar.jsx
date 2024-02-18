import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import Footer from "./Footer";
import logoV1 from "../assets/pcd_logo_v1.png";

const NavBar = () => {
  // This is behind the scenes
  // "isopen" is a value, and "setisopen" is a function that changes the value.
  // "usestate" is a way for react to respond to changes of the "isopen" value.
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // This is visible on screen - after the "return ("
  return (
    <>
      <Navbar expand="lg" className="app-nav">
        {/* <div className="left-nav"> */}
        <NavbarBrand href="/">
          <img
            src={logoV1}
            className="nav-logo"
            alt="Pittsburgh Doors & Closets Logo"
          />
        </NavbarBrand>
        {/* </div> */}

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar className="right-nav">
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/about">Why Choose Us</NavLink>
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

            <NavItem>
              <NavLink href="/gallery">Gallery</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>

            {/* <NavItem> */}
            <Button color="primary">
              <NavLink href="/consultation">Free Design Consultation</NavLink>
            </Button>
            {/* </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
