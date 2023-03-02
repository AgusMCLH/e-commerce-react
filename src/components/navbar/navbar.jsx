import React from 'react';
import './navbar.css';
import Carrito from './../carrito/carrito';
import Avatar from './../avatar/Avatar';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header>
        <div className="brandname">
          <Link to={'./'}><p>La tiendita</p></Link>
        </div>
        <div className="header2">
          <Avatar />
          <ul>
            <li>
              <Link to={'./'}> Home</Link>
            </li>
            <li>
              <p> Ropa</p>
              <ul>
                <li>
                  <Link to={'./clothes/1'}>Hombre</Link>
                </li>
                <li>
                  <Link to={'./clothes/2'}>Mujer</Link>
                </li>
                <li>
                  <Link to={'./clothes/3'}>Ver Todas</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={'./electronics'}>Electrotecnia</Link>
            </li>
            <li>
              <Link to={'./jewlery'}> Joyeria</Link>
            </li>
            <li>
              <a href="#a"> Sobre Nosotros</a>
            </li>
          </ul>
          <Carrito />
        </div>
      </header>
    </>
  );
};

export default Navbar;
