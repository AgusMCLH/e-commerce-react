import React, {useContext, useEffect, useState } from 'react';
import './carrito.css';
import carrito from './../../../img/cartSVG.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';

const CarritoIcon = () => {
  let [cantidad, setCantidad] = useState();
  const {cartContextValue, setCartMenuActive} = useContext(CartContext)
  useEffect(() => {
    if (cartContextValue[0].title===undefined) {
      setCantidad(0)
    }else{
      setCantidad(cartContextValue.length);
    }
  }, [cartContextValue]);

  const onClickHandler = () =>{
    setCartMenuActive(true)
  }

  return <div className="navbar_carrito-container" onClick={onClickHandler}>
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
