import React from "react";

const ItemDetails = ({item}) => {
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
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ItemDetails;