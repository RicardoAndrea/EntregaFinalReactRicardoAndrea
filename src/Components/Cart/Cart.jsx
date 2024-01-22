import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const cartHeight = cart.length > 2 ? '100%' : '94vh';

  if (cart.length === 0) {
    return (
      <div className='d-flex flex-column align-items-center justify-content-start bg-success' style={{ height: cartHeight }}>
        <p className='mt-5 text-white fs-4' >No hay elementos en el carrito</p> 
        <Link className="btn btn-primary mt-3 " to="/">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-start bg-success' style={{ height: cartHeight }}>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className='fs-4 text-white'>Total: $ {totalPrice()}</p>

      {/* <Link to="/checkout">
        {' '}
        <button className="btn btn-primary mb-4">Terminar Compra</button>
      </Link> */}
    </div>
  );
};

export default Cart;