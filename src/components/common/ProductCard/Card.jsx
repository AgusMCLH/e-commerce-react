import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css"



const Card =({productos})=>{
    return <div className="Card_el_container">
    {productos.map(({ id, title, price, variations_data }) => {
        let claves = Object.keys(variations_data)
        let thumbnail = variations_data[claves[0]].thumbnail;
        return (
            <Link key={id} to={`./item/${id}`}>
                <div  className="card_Container">
                    <img src={thumbnail} alt="" />
                    <p>Nombre: {title}</p>
                    <p className="card__precio">Precio: ${price}</p>
                </div>
            </Link>
        );
      })}</div>
}

export default Card