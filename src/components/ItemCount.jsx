import react,{ useEffect, useState } from "react";
import "../styles/Contador.css"

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrementar = () => {
        setCount(count - 1)
    }

    const incrementar = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return ( 
        <div className="contador">
            <button disabled={count <= 1} onClick={decrementar}>-</button>
            <span> {count} </span>
            <button disabled={count >= stock} onClick={incrementar}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(1)}>Agregar al carrito</button>
            </div>
        </div>
     );
}
 
export default ItemCount;