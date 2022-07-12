import React from "react";
import CartWidget from "/home/milagros/Escritorio/react/clase 1/miweb/src/components/CartWidget.jsx"
import "/home/milagros/Escritorio/react/clase 1/miweb/src/styles/Nav.css"


const NavBar = () => {
    return (
        <div>
            
            <nav className="nav-conteiner">
            
                <ul className="nav items-conteiner">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    );
}

export default NavBar;
