import React, { useEffect} from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Loader from "../../common/cargador/cargador";

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

      return <p>Estas en ItemContainer con el id: {Producto.id}</p>
}

export default ItemContainer