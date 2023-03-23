import React, { useEffect} from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Loader from "../../common/cargador/cargador";
import Counter from "../../common/counter/Counter";
import "./css/Style.css"
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import AddButton from "./component/AddButton/AddButton";



const ItemContainer =()=>{

  let {id}=useParams()
  const [Producto, seleccionarProducto] = useState([]);

  
  
  
  useEffect(()=>{
    const db= getFirestore()
    const ItemRef = doc(db,'items',id)
    getDoc(ItemRef).then((snapshot)=>{
      const item = {
            id: snapshot.id,
            ...snapshot.data()
          }
        seleccionarProducto(item);
    })
},[id])
  if (Producto.length===0) {
    return <Loader></Loader>
  }
 

      return <div className="ItemWindow">
                <div className="product__Container">
                  <div className="product__container__img">
                    <img className="product__img" src={Producto.image} alt={`${Producto.title} - img`} />
                  </div>
                  <div className="product_der__panel">
                  <p className="product__title">{Producto.title}</p>
                  <p className="product__description">{Producto.description}</p>
                  <p className="product__price">${Producto.price}</p>
                  <div className="buttonContainer">
                  <Counter></Counter>
                  <AddButton></AddButton>
                  </div>
                  </div>
                </div>
              </div>;
}

export default ItemContainer