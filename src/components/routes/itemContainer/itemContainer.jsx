import React, { useEffect} from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Loader from "../../common/cargador/cargador";
import Counter from "../../common/counter/Counter";
import "./css/Style.css"
import carritoSVG from "./../../../img/cartSVG.svg"

const ItemContainer =()=>{
    let {id}=useParams()
    const [Producto, funcionAgrgarProducto] = useState([
        
      ]);
      useEffect(() => {
        
          fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>funcionAgrgarProducto(json))
      }, [id]);


      if (Producto.length===0) {
        return <Loader></Loader>
      }

      let {title, price, image}=Producto
      

      return <div className="ItemWindow">
                <div className="product__Container">
                  <div className="product__container__img">
                    <img className="product__img" src={image} alt={`${title} - img`} />
                  </div>
                  <div className="product_der__panel">
                  <p className="product__title">{title}</p>
                  <p className="product__price">${price}</p>
                  <div className="buttonContainer">
                  <Counter></Counter>
                  <div className="product_addToCart">
                    <div>
                      <img src={carritoSVG} alt="carrito icono" /><p>Add to cart</p>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>;
}

export default ItemContainer