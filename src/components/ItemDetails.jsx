import React, { useState } from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import "../styles/ItemDetails.css"
import { useCartContext } from "./context/CartContext";

const ItemDetails = ({ data, item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity)
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4 cards">
                <div className="col">
                    <div className="card"> 
                        <div className="card-body">
                            <h5 className="card-title">{item.titulo}</h5> 
                            <img src={item.img} className="card-img-top" alt="..." />
                            
                            <p>{item.descripcion}</p>
                            <p className="precio">${item.precio}</p>
                            {
                                goToCart
                                    ? <Link to='/cart'><button>Finalizar compra</button></Link>
                                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetails;