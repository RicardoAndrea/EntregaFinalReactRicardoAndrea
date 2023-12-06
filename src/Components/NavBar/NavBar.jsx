import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className='main'>
          <Navbar.Brand to= "/"> <Logo/> </Navbar.Brand>
          <Nav.Item className="justify-content-center">
            <Link to="/" className='pestaña'>   Home    </Link>
            <Link to="/category/Bancos" className='pestaña'>   Bancos   </Link>
            <Link to="/category/Bebederos" className='pestaña'>   Bebederos    </Link>
            <Link to="/category/Bicicleteros" className='pestaña'   >Bicicleteros   </Link>
          </Nav.Item>
          <Link to="/cart"> <CartWidget/></Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;