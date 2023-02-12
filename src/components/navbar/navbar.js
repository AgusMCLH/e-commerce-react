import React from 'react';
import './navbar.css';
import carrito from './../../img/cartSVG.svg';
import Avatar from './../avatar/Avatar';
const Navbar = () => {
  return (
    <>
      <header>
        <Avatar />
        <ul>
          <li>
            <a href="#a"> Elemento #1</a>
          </li>
          <li>
            <a href="#a"> Elemento #2</a>
          </li>
          <li>
            <a href="#a"> Elemento #3</a>
          </li>
          <li>
            <a href="#a"> Elemento #4</a>
          </li>
          <li>
            <a href="#a"> Elemento #5</a>
          </li>
        </ul>
        <div className="navbar_carrito-container">
          <div className="navbar_carrito">
            <img src={carrito} alt="Carrito sin mas" />
            <div className="puntito"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
