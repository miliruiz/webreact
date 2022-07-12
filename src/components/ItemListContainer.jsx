import React from "react";
import ItemCount from "./ItemCount"

const ItemListContainer = ({ texto }) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    );
}

export default ItemListContainer;