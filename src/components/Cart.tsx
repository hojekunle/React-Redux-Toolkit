import {Card, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
  //state.cart gets cart from configureStore which is a ref to cartSlice containing products added via its add reducer method. see NavBarPanel for explanation
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    //dispatch a remove action
    dispatch(remove(id));
  };

  const cards = products.map(product => (
    <div className="col-md-12" style={{ marginBottom: '10px' }}>
      <Card key={product.id} className='h-100'>
      <div className='text-center'>
        <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          USD {product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{background: 'white'}}>
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
        </Card.Footer>
    </Card>
    </div>
    
  ))

  return (
    <div>
      <h1>Cart</h1>
      {/*{JSON.stringify(productCart)}*/}
      <div className='row'>
        {cards}
      </div>
      
    </div>
  )
}

export default Cart
