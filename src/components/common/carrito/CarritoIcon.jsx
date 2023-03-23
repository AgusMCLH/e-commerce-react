import React, {useContext, useEffect, useState } from 'react';
import './carrito.css';
import carrito from './../../../img/cartSVG.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';

const CarritoIcon = () => {
  let [cantidad, setCantidad] = useState();
  const {cartContextValue} = useContext(CartContext)
  useEffect(() => {
    if (cartContextValue[0].title===undefined) {
      setCantidad(0)
    }else{
      setCantidad(cartContextValue.length);
    }
  }, [cartContextValue]);

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
