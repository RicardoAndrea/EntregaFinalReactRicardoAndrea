import { BsCart2 } from "react-icons/bs"
import { useCartContext } from '../Context/CartContext';

const CartWidget = () => {
    const { totalProducts, cart } = useCartContext();
  return (
    <div >
      
      <button > 
        <BsCart2 />
        <span className="posicion-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalProducts() || cart}
        </span>
       </button >
    </div>
  )
}

export default CartWidget