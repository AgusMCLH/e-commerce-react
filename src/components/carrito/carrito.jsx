import React, { useEffect, useState } from 'react';
import './carrito.css';
import carrito from './../../img/cartSVG.svg';
import { Link } from 'react-router-dom';

const Carrito = () => {
  let [cantidad, setCantidad] = useState();
  useEffect(() => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCantidad(carrito.length);
    // eslint-disable-next-line
  }, []);
  if (!cantidad) {
    return (
      <div className="navbar_carrito-container">
        <Link to={'/checkout'}>
        <div className="navbar_carrito">
          <img src={carrito} alt="Carrito sin mas" />
          <div className="puntito unactive" id="cartdot">
            <div className="Numbercontainer">
              <p id="cartProductNumber"> {cantidad}</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="navbar_carrito-container">
        <Link to={'/checkout'}>
        <div className="navbar_carrito">
          <img src={carrito} alt="Carrito sin mas" />
          <div className="puntito active" id="cartdot">
            <div className="Numbercontainer">
              <p id="cartProductNumber"> {cantidad}</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  }
};

export default Carrito;
