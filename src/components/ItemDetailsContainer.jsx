import React, {useState,useEffect} from "react";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import { products } from "../data";

const ItemDetailsCointainer = () => {
    const [item, setData] = useState ({});

    const { detalleId } = useParams()

    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
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