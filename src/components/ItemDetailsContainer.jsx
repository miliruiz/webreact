import React, {useState,useEffect} from "react";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import { products } from "../data";

const ItemDetailsCointainer = () => {
    const [data, setData] = useState ({});

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
        <ItemDetails data={data}/>
        </>
     );
}
 
export default ItemDetailsCointainer;