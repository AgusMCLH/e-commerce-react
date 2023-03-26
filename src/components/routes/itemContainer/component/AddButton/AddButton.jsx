import React, {useContext} from "react";
import { CartContext } from "../../../../../contexts/CartContext";
import './css/styles.css'
import BotonCarrito from "../../../../common/BotonCarrito/BotonCarrito";


const AddButton = ({id, Producto}) =>{
    const {cartContextValue, setCartContext} = useContext(CartContext)
    const onClickHandler = () =>{
        if (cartContextValue[0].title===undefined) {
          //En caso de que el carrito este vacio agrega el elemento al carrito sin mas
          setCartContext([
            {
            id,
            price: Producto.price,
            title: Producto.title,
            image: Producto.image,
            quantity: Number(document.getElementById('productquantity').innerText)}]
            )
        }else{
          //Si no esta vacio, verifica que el elemento que esta intentando ser agregado no se encuentre en el carrito
          let index=cartContextValue.findIndex((el)=> el.id===id);
          if (index!==-1) {
            //Si lo cumple solo agrega la cantidad del spinner a la cantidad del producto en el carrito
            let ArrayAuxiliar = cartContextValue;
            ArrayAuxiliar[index].quantity+=Number(document.getElementById('productquantity').innerText)
            setCartContext([...ArrayAuxiliar]);
          }else{
            // Si no lo encuentra, lo agrega
            setCartContext([
              ...cartContextValue,
              {
                id,
                price: Producto.price,
                title: Producto.title,
                image: Producto.image,
                quantity: Number(document.getElementById('productquantity').innerText)}]
                )
          }
        }
      }

    return <div className="product_addToCart" >
    <div onClick={onClickHandler}>
      <BotonCarrito></BotonCarrito>
    </div>
  </div>
}
export default AddButton