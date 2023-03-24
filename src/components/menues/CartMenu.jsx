import React, { useContext } from "react";
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
        console.log(index);
        let ArrayAuxiliar = cartContextValue;
        ArrayAuxiliar.splice(index,1);
        if (index!==0) {
            setCartContext([...ArrayAuxiliar]);
        }else{
            setCartContext([{}])
        }
    }

console.log(cartContextValue);

    return <div className={cartMenuActive?"CartMenu_Window CartMenu_active":"CartMenu_Window CartMenu_unactive"}>
        <div className="head">
            <div className="Cart_CloseButton">
                <div href="#" className="close" onClick={onClickHandlerDesactivarMenu}/>
            </div>
            <div className="CartTitle">
                <p>Carrito</p>
            </div>
        </div>
            <div className="productModal_Container">
                <div className="CartProduct_list">
                    {console.log([cartContextValue[0]])}
                    {cartContextValue[0].hasOwnProperty('id')?
                    cartContextValue.map((el)=>{
                        return <div key={el.id} className='cartProduct_Container'>
                            <div className="cartImage_Container"><img src={el.image} alt={el.title} /></div>
                            <p className="CartTitle">{el.title}</p>
                            <div className="CartPriceQuant_Container">
                                <div className="Cart_Price">
                                    <p>${el.price}</p>
                                </div>
                                <div className="Cart_Quantity">
                                    <p>${el.quantity}</p>
                                </div>
                            </div>
                                <div className="CartDeleteButton_Container" onClick={()=>onClickHandlerEliminarProducto(el.id)}>
                                    <img src={xButtonImage} alt="Cruz" />
                                </div>
                        </div>
                    }): ''}
                </div>
            </div>
        <div className="CartButton_Container"><Link to={'/checkout'}>Checkout</Link></div>
    </div>
}

export default CartMenu