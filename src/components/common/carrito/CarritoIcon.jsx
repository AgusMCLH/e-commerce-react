import React, { useEffect, useState } from 'react';
import './carrito.css';
import carrito from './../../../img/cartSVG.svg';
import { Link } from 'react-router-dom';

const CarritoIcon = () => {
  let [cantidad, setCantidad] = useState();
  useEffect(() => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCantidad(carrito.length);
  }, []);

  return <div className="navbar_carrito-container">
          <Link>
            <div className="navbar_carrito">
              <img src={carrito} alt="Carrito sin mas" />
              <div  className={!cantidad?"puntito unactive":"puntito active"} id="cartdot">
                <div className="Numbercontainer">
                  <p id="cartProductNumber"> {cantidad}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
};

export default CarritoIcon;
