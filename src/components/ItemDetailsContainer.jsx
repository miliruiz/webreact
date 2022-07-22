import React, {useState,useEffect} from "react";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";

const products = [
    { id: 1, img: "img/silicone-case.jpeg", titulo: "Silicone Case", precio: 1000, descripcion: "Funda de silicona. Se adapta perfectamente a los botones de volumen, el botón lateral y las curvas del teléfono.", categoria: "fundas" },
    { id: 2, img: "img/transparente-reforzada.jpeg", titulo: "Transparente Reforzada", precio: 700, descripcion: "Esquinas reforzadas que absorven golpes e impactos.", categoria: "fundas" },
    { id: 3, img: "img/auriculares.jpeg", titulo: "Auriculares lightning", precio: 1200, descripcion: "Los EarPods de Apple con conector de audífonos de 3,5 mm funcionan con los modelos de iPhone, iPad y iPod.", categoria: "accesorios" },
    { id: 4, img: "img/straps.jpeg", titulo: "Phone Straps", precio: 700, descripcion: "Correa en forma de pulsera, que te permite usar tu celular o cámara de fotos", categoria: "accesorios" },
];

const ItemDetailsCointainer = () => {
    const [item, setData] = useState ({});

    const { detalleId } = useParams()

    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });

        getItem.then(res => setData(res.find(products => products.id === parseInt(detalleId))))

    }, [])

    return ( 
        <>
        <ItemDetails item={item}/>
        </>
     );
}
 
export default ItemDetailsCointainer;