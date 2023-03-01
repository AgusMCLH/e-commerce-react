import React, { useEffect} from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Loader from "../../common/cargador/cargador";
import Counter from "../../common/counter/Counter";
import "./css/Style.css"

const ItemContainer =()=>{
    let {id}=useParams()
    const [Producto, funcionAgrgarProducto] = useState([
        
      ]);
      useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}`)
          .then((res) => res.json())
          .then((res) => {
            funcionAgrgarProducto(res);
          });
      }, [id]);

      console.log(Producto);

      if (Producto.length===0) {
        return <Loader></Loader>
      }

      let {thumbnail, title, price}=Producto

      return <div className="ItemWindow">
                <div className="product__Container">
                  <div className="product__container__img">
                    <img className="product__img" src={thumbnail} alt={`${title} - img`} />
                  </div>
                  <div className="product_der__panel">
                  <p className="product__title">{title}</p>
                  <Counter></Counter>
                  </div>
                </div>
              </div>;
}

export default ItemContainer