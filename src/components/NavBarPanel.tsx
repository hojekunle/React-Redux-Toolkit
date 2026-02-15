import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  /*
  read state from the cartSlice denoted state.cart
  'state' is the whole object from the reducer in configureStore with a refence to cartSlice: { cart: [...] }
  using .push(), your state for this specific slice is an Array.
  The state inside our cartSlice reducer refers only to that specific slice's data (e.g., the array of products in the cart pushed from Products.tsx)
  */
  const cartProducts = useSelector(state => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>My Cart {cartProducts.length}</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default NavBar
