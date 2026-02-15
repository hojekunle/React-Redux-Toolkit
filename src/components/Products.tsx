import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  //const[products, getProducts] = useState([]);

  //use alias products for data, call productSlice via store.tsx to get updated data
  const {data: products} = useSelector(state => state.products);

  useEffect(() =>{
    //dispatch an action for fetchProducts()
    dispatch(getProducts());

    // fetch("https://fakestoreapi.com/products")
    // .then(data => data.json())
    // .then(result => getProducts(result))

  }, [])

  const addToCart = (product) => {
    //dispatch an action
    dispatch(add(product));
  }

  const cards = products.map(product => (
    <div className="col-md-3" style={{ marginBottom: '10px' }}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
        </Card.Footer>
    </Card>
    </div>
    
  ))

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className='row'>
        {cards}
      </div>
      
    </>
  )
}

export default Products
