import react from "react";
import { Link } from "react-router-dom";

import "../styles/Item.css"

const Item = ({ info }) => {
    return (
        
        <div className="row row-cols-1 row-cols-md-2 g-4 cards">
            <div className="col">
                <div className="card">
                    <img src={info.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{info.titulo}</h5>
                        <p className="card-text">{info.descripcion}</p>
                        <p className="precio">${info.precio}</p>
                        <Link to={`/detalle/${info.id}`}><button>Ver Detalle</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;