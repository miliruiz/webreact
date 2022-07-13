import React from "react";
import CartWidget from "./CartWidget";
import "../styles/Nav.css";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-conteiner">
        <ul className="nav items-conteiner">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default NavBar;
