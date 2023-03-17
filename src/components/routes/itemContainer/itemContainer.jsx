import React, { useEffect} from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Loader from "../../common/cargador/cargador";
import Counter from "../../common/counter/Counter";
import "./css/Style.css"
import carritoSVG from "./../../../img/cartSVG.svg"
import { getFirestore, doc, getDoc} from 'firebase/firestore'


const ItemContainer =()=>{
    let {id}=useParams()
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const [Producto, funcionAgrgarProducto] = useState([]);


      useEffect(()=>{
        const db= getFirestore()
        const ItemRef = doc(db,'items',id)
        getDoc(ItemRef).then((snapshot)=>{
            const item = {
                id: snapshot.id,
                ...snapshot.data()
            }
            funcionAgrgarProducto(item);
        })
    },[id])


      if (Producto.length===0) {
        return <Loader></Loader>
      }

      let {title, price, image, description}=Producto

      const estaEnElCarrito = (id)=>{
        carrito = JSON.parse(localStorage.getItem('carrito')) || '';
        for (let i = 0; i < carrito.length; i++) {
          if (carrito[i].id===id) {
            return i
          }
        }
        return false
      }

      const cartintercator = ()=>{
        let number = JSON.parse(localStorage.getItem('carrito')).length
        let cartdot = document.getElementById("cartdot");
        let cartnumber = document.getElementById("cartProductNumber");
        if (cartdot.classList.contains('active')) {
          cartnumber.innerText=number
        }else{
          cartdot.classList.remove('unactive')
          cartdot.classList.add('active')
          cartnumber.innerText=number
        }

      }
      
      
      const onClickHandler = ()=>{
        let quantityCounter = Number(document.getElementById('productquantity').innerText);
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let productoCart = {}
        if (carrito.length!==0) {
            if (estaEnElCarrito(Producto.id)!==false) {
              let index = estaEnElCarrito(Producto.id)
              carrito[index].quantity += quantityCounter;
            }else{
              productoCart = {
                id: Producto.id,
                price: Producto.price,
                quantity: 1
              }
              carrito.push(productoCart);
            }
        }
        if (carrito.length===0) {
          productoCart = {
            id: Producto.id,
            price: Producto.price,
            quantity: 1
          }
          carrito.push(productoCart);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        cartintercator(carrito.length)

        
      }
      

      return <div className="ItemWindow">
                <div className="product__Container">
                  <div className="product__container__img">
                    <img className="product__img" src={image} alt={`${title} - img`} />
                  </div>
                  <div className="product_der__panel">
                  <p className="product__title">{title}</p>
                  <p className="product__description">{description}</p>
                  <p className="product__price">${price}</p>
                  <div className="buttonContainer">
                  <Counter></Counter>
                  <div className="product_addToCart" onClick={onClickHandler}>
                    <div >
                      <img src={carritoSVG} alt="carrito icono" /><p>Add to cart</p>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>;
}

export default ItemContainer