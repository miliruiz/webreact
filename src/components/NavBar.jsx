import React from "react";
import CartWidget from "./CartWidget";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <h3 className="titulo">CASES</h3>
        <ul className="ul">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/categoria/fundas'>Fundas</NavLink>
          <NavLink to='/categoria/accesorios'>Accesorios</NavLink>
          <NavLink to='/cart'><CartWidget /></NavLink>
        </ul>
      </div>

    </div>
  );
};

export default NavBar;
