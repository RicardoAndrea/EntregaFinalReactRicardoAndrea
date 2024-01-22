import React from 'react';
import { useCartContext } from '../Context/CartContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className="d-flex align-items-start justify-content-center mt-3" >
        <Card key={product.id} style={{ width: '50rem' }} className="d-flex flex-row mb-3">
          <Card.Img variant="top" src={product.img} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <ListGroup className="list-group-flush mt-4">
              <ListGroup.Item>Cantidad: {product.quantity}</ListGroup.Item>
              <ListGroup.Item>Precio unitario: ${product.price}</ListGroup.Item>
              <ListGroup.Item>Subtotal: ${product.quantity * product.price}</ListGroup.Item>
            </ListGroup>
            <button
              className="btn btn-primary mt-5"
              onClick={() => removeProduct(product.id)}> Eliminar
            </button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default ItemCart;