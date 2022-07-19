import React,{useState, useEffect} from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const products = [
    {id: 1, img: "img/silicone-case.jpeg", titulo: "Silicone Case", precio: 1000, descripcion: "Funda de silicona. Se adapta perfectamente a los botones de volumen, el botón lateral y las curvas del teléfono." },
    {id: 2, img: "img/transparente-reforzada.jpeg", titulo: "Transparente Reforzada", precio: 700, descripcion: "Esquinas reforzadas que absorven golpes e impactos." },
    {id: 3, img: "img/auriculares.jpeg", titulo: "Auriculares lightning", precio: 1200, descripcion: "Los EarPods de Apple con conector de audífonos de 3,5 mm funcionan con los modelos de iPhone, iPad y iPod." },
    {id: 4, img: "img/straps.jpeg", titulo: "Phone Straps", precio: 700, descripcion: "Correa en forma de pulsera, que te permite usar tu celular o cámara de fotos" },
];

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });
        getData.then(res => setData(res))


    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;