import React from "react";
import { useCartContext } from "./context/CartContext";
import "../styles/ItemCart.css"

const ItemCart = ({products}) => {
     const {removeProduct} = useCartContext();

    return ( 
        <div className="itemcart">
            <img src={products.img} alt={products.titulo}/>
            <div>
                <p>{products.titulo}</p>
                <p>Cantidad: {products.quantity}</p>
                <p>Precio .u: ${products.precio}</p>
                <p>Subtotal: ${products.quantity * products.precio}</p>
                <button onClick={() => removeProduct(products.id)}>Eliminar del carrito</button>
            </div>

        </div>
     );
}
 
export default ItemCart;