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
          <p>Latiendita</p>
        </div>
        <div className="header2">
          <Avatar />
          <ul>
            <li>
              <Link to={'./'}> Home</Link>
            </li>
            <li>
              <a href="#a"> Zapatillas</a>
              <ul>
                <li>
                  <a href="#a">Nike</a>
                </li>
                <li>
                  <a href="#a">Adidas</a>
                </li>
                <li>
                  <a href="#a">Ver Todas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#a"> Remeras</a>
              <ul>
                <li>
                  <a href="#a">Nike</a>
                </li>
                <li>
                  <a href="#a">Adidas</a>
                </li>
                <li>
                  <a href="#a">Ver Todas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#a"> Jeans</a>
              <ul>
                <li>
                  <a href="#a">Levi's</a>
                </li>

                <li>
                  <a href="#a">Ver Todas</a>
                </li>
              </ul>
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
