import React from "react";
import CartWidget from "./CartWidget";
import "../styles/Nav.css";

const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <h3 className="titulo">CASES</h3>
        <ul className="ul">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href=""><CartWidget /></a>
        </ul>
      </div>

    </div>
  );
};

export default NavBar;
