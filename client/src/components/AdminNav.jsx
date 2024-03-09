import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
  return (
    <>
      <Navbar expand="xs" className="app-nav admin" style={{ borderBottom: '1px solid #ccc' }}>
        <Nav className="me-auto" navbar>
          <NavItem style={{ marginLeft: '20px', marginRight: '20px' }}>
            <NavLink href="/login">LogIn</NavLink>
          </NavItem>

          <NavItem style={{ marginLeft: '20px', marginRight: '20px' }}>
            <NavLink href="/register" className="d-none d-sm-flex">
              Register New Users
            </NavLink>
            <NavLink href="/register" className="d-flex d-sm-none">
              Register
            </NavLink>
          </NavItem>

          <NavItem style={{ marginLeft: '20px', marginRight: '20px' }}>
            <NavLink href="/blog-configuration" className="d-none d-sm-flex">
              Manage Blogs
            </NavLink>
            <NavLink href="/blog-configuration" className="d-flex d-sm-none">
              Blogs
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="nav-spacer"></div>
    </>
  );
};

export default NavBar;
