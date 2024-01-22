import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
const Item = ({item}) => {

  return (
    <Link to={'/item/' + item.id}className='text-decoration-none'>
      <div>
        <Card.Img variant="top" src={item.img} alt={item.title}/>
           <Card.Body className='bg-light text-center'>
             <Card.Title>{item.title}</Card.Title>
             <Card.Text>$ {item.price}</Card.Text>
               {/* <Card.Text><strong>Stock:</strong>{" "}
                  {isNaN(producto.stock) ? "Nos quedamos sin Stock" : item.stock}</Card.Text> */}
            </Card.Body>    
      </div>
    </Link>
  )
}

export default Item