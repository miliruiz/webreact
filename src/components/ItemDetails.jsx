import React from "react";
import ItemCount from "./ItemCount"

const ItemDetails = ({item, onAdd}) => {
    return ( 
        <>
         <div className="row row-cols-1 row-cols-md-2 g-4 cards">
            <div className="col">
                <div className="card">
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p>{item.descripcion}</p>
                        <p className="precio">${item.precio}</p>
                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
        
        </>
     );
}
 
export default ItemDetails;