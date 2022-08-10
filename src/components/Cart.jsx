import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import ItemCart from "./ItemCart";
import "../styles/Cart.css"
import { getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore"

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            nombre: "Mili",
            email: "abriferrin11@gmail.com",
            phone: "2994625734",
            direccion: "san martin 546"
        },
        items: cart.map(products => ({id: products.id, titulo:  products.titulo, precio: products.precio, quantity: products.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
        .then(({id}) => console.log(id))
    }

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
        <button onClick={handleClick}>Comprar</button>
        </>
     );
}
 
export default Cart;