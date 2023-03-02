import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css"



const Card =({productos})=>{
    return <div className="Card_el_container">
    {productos.map(({ id, title, price, image }) => {
        return (
            <Link key={id} to={`/item/${id}`}>
                <div  className="card_Container">
                    <div className="img_container">
                    <img src={image} alt="" />
                    </div>
                    <p>{title}</p>
                    <p className="card__precio">Precio: ${price}</p>
                </div>
            </Link>
        );
      })}</div>
}

export default Card;