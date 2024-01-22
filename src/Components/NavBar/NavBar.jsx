import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <>
       <Navbar bg="light" data-bs-theme="light">
        <Container className='main'>
          <NavLink  to= "/" className="navbar-brand"> <Logo/> </NavLink>
          <Navbar.Toggle aria-controls="navbar-nav"/>
          <Navbar.Collapse id="navbar-nav">
           <Nav className="me-auto">
            <NavLink exact to="/" className='nav-link'>   Home    </NavLink>
            <NavLink to="/category/Bancos" className='nav-link'>   Bancos   </NavLink>
            <NavLink to="/category/Bebederos" className='nav-link'>   Bebederos    </NavLink>
            <NavLink to="/category/Bicicleteros" className='nav-link'>Bicicleteros   </NavLink>
           </Nav>
           <nav>
            <NavLink to="/cart"> <CartWidget/></NavLink>
           </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;