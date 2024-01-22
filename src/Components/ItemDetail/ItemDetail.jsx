import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({item}) {
  
  const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }
  return (
    <div className='row'>
        <div className='col-md-4 lifset-md-4'>
            <img src={item.img} className='card-img-topimg-fluid' alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p> $ {item.price}</p>
            <p>Cantidad: {item.stock}</p>

        </div>
        <div>
         {goToCart ? <Link className="btn btn-primary" to='/cart'>Ir al carrito</Link> : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
        </div>
    </div>
  )
}

export default ItemDetail