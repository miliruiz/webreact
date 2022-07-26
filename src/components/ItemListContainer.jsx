import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { products } from "../data";

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(products => products.categoria === categoriaId)));
        } else {
            getData.then(res => setData(res))
        }
    }, [categoriaId])

    return (
        <div>
            <h2>{greeting}</h2>

            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;