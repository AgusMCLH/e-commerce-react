import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import './css/style.css'
import { Link } from 'react-router-dom';
import xButtonImage from './../../img/xbutton.png'

const CartMenu = ()=>{
    const {cartContextValue, setCartContext, cartMenuActive, setCartMenuActive} = useContext(CartContext)

    const onClickHandlerDesactivarMenu = () =>{
        setCartMenuActive(false)
    }

    const onClickHandlerEliminarProducto = (id)=>{ 
        let index=cartContextValue.findIndex((el)=> el.id===id);
        let ArrayAuxiliar = [...cartContextValue];
        ArrayAuxiliar.splice(index,1);
        if (index===0&&cartContextValue.length===1) {
            setCartContext([{}])
        }else{
            setCartContext([...ArrayAuxiliar]);
        }

        

    }
    let [subTotalPrecio, setSubTotalPrecio] = useState(0)
    useEffect(()=>{
        if (cartContextValue[0].hasOwnProperty('id')){
            let precioAux = 0;
            cartContextValue.map((el)=>precioAux+=el.price*el.quantity)
            setSubTotalPrecio(precioAux)
        }else{
            setSubTotalPrecio(0);
        }
        
    },[cartContextValue])
    


    return <div className={cartMenuActive?"CartMenu_Window CartMenu_active":"CartMenu_Window CartMenu_unactive"}>
        <div className="head">
            <div className="Cart_CloseButton">
                <div href="#" className="close" onClick={()=>onClickHandlerDesactivarMenu()}/>
            </div>
            <div className="CartTitle">
                <p>Carrito</p>
            </div>
        </div>
            <div className="productModal_Container">
                    {cartContextValue[0].hasOwnProperty('id')?<>
                        <div className="CartProduct_list">
                            {cartContextValue.map((el)=>{
                                return <div key={el.id} className='cartProduct_Container'>
                                            <div className="cartImage_Container"><img src={el.image} alt={el.title} /></div>
                                            <p className="CartTitle">{el.title}</p>
                                            <div className="CartPriceQuant_Container">
                                                <div className="Cart_Price">
                                                    <p >$<span className="Price_Hook">{el.price}</span></p>
                                                </div>
                                                <div className="Cart_Quantity">
                                                    <p>x{el.quantity}</p>
                                                </div>
                                            </div>
                                                <div className="CartDeleteButton_Container" onClick={()=>onClickHandlerEliminarProducto(el.id)}>
                                                    <img src={xButtonImage} alt="Cruz" />
                                                </div>
                                        </div>
                            
                            })}
                        </div>
                        <div className="CartSubtotal_Container">
                            <div className="SubTotal_Text"><p>Subtotal: ${Math.round(subTotalPrecio)}</p></div>
                        </div>
                    </>
                    : <div className="NoneProductCart"><h2>No hay productos</h2></div>}
            </div>
            {cartContextValue[0].hasOwnProperty('id')?<div className="CartButton_Container"><Link to={'/checkout'}>Checkout</Link></div>:''}
        
    </div>
}

export default CartMenu