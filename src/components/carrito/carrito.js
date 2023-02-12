import React from 'react';
import './carrito.css';
import carrito from './../../img/cartSVG.svg';

const Carrito = () => {
  return (
    <div className="navbar_carrito-container">
      <div className="navbar_carrito">
        <img src={carrito} alt="Carrito sin mas" />
        <div className="puntito"></div>
      </div>
    </div>
  );
};

export default Carrito;
