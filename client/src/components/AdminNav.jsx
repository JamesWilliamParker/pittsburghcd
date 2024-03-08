import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="app-nav admin" style={{ borderBottom: '1px solid #ccc' }}>
        <Nav className="me-auto" navbar>
          <NavItem style={{ marginLeft: '20px', marginRight: '20px' }}>
            <NavLink href="/register">Register New Users</NavLink>
          </NavItem>

          <NavItem style={{ marginLeft: '20px', marginRight: '20px' }}>
            <NavLink href="/blog-configuration">Manage Blogs</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="spacer"></div>
    </>
  );
};

export default NavBar;
