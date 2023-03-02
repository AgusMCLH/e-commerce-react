import React, { useEffect} from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Loader from "../../common/cargador/cargador";
import Counter from "../../common/counter/Counter";
import "./css/Style.css"
import carritoSVG from "./../../../img/cartSVG.svg"

const ItemContainer =()=>{
    let {id}=useParams()
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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

      let {title, price, image, description}=Producto

      const estaEnElCarrito = (id)=>{
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        if (carrito.map((el)=>{
          console.log(el.id+' '+ id);
          if (el.id===id){
            console.log('retorna true');
            return true;
          }
          return false
        })===true) {
          return true
        }
        return false

        // carrito.map((el)=>{
        //   console.log(el.id+' '+ id);
        //   if (el.id===id){
        //     console.log('retorna true');
        //     return true;
        //   }
        //   return false
        // })
      }

      const onClickHandler = ()=>{
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let productoCart = {}
        if (carrito.length!==0) {
          carrito.map((el)=>{
            if (estaEnElCarrito(Producto.id)===true){
              el.quantity += 1;
              console.log('a');
              console.log(carrito);
            }else{
              console.log('No estaba y se agrego uno');
              productoCart = {
                id: Producto.id,
                price: Producto.price,
                quantity: 1
              }
              carrito.push(productoCart);
            }
          })
        }if (carrito.length===0) {
          console.log('estaba vacio y se agrego uno');
          productoCart = {
            id: Producto.id,
            price: Producto.price,
            quantity: 1
          }
          carrito.push(productoCart);
          
        }
        
        // console.log(carrito);
        // if (carrito.length===0) {
        //   productoCart = {
        //     id: Producto.id,
        //     price: Producto.price,
        //     quantity: 1
        //   }
        //   carrito.push(productoCart);
        // }else{
        //   carrito.map((el)=>{if (el.id===Producto.id) {
        //     el.quantity += 1;
        //   }else{
        //     productoCart = {
        //       id: Producto.id,
        //       price: Producto.price,
        //       quantity: 1
        //     }
        //   }
        // })
        // }
        // console.log(carrito.length!=0);
        localStorage.setItem('carrito', JSON.stringify(carrito));
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