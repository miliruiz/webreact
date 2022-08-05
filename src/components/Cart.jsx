import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import ItemCart from "./ItemCart";
import "../styles/Cart.css"

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p className="vacio">No hay elementos en el carrito</p> 
                <Link to='/'>Hacer compras</Link>
            
            </>
        )
    }


    return ( 
        <>
        {
            cart.map(products => <ItemCart key={products.id} products={products} />)
        }
        <p className="total">
            total: ${totalPrice()}
        </p>
        </>
     );
}
 
export default Cart;