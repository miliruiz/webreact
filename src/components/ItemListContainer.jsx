import React from "react";

const Item = (props) => {

    return (
        <button className="boton"> {props.greeting}</button>
    );
}

export default Item;