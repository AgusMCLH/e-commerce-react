import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css"

const Card =({productos})=>{
    return <div className="Card_el_container">
    {productos.map(({ id, title, price }) => {
        return (
            <Link key={id} to={`./item/${id}`}>
                <div  className="card_Container">
                    <p>Nombre: {title}</p>
                    <p>Precio: ${price}</p>
                </div>
            </Link>
        );
      })}</div>
}

export default Card