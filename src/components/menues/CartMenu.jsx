import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import './css/style.css'
import { Link } from 'react-router-dom';
import xButtonImage from './../../img/xbutton.png'

const CartMenu = ()=>{
    const {cartContextValue, cartMenuActive, setCartMenuActive} = useContext(CartContext)
    const onClickHandler = () =>{
        setCartMenuActive(false)
    }

console.log(cartContextValue);

    return <div className={cartMenuActive?"CartMenu_Window CartMenu_active":"CartMenu_Window CartMenu_unactive"}>
        <div className="head">
            <div className="Cart_CloseButton">
                <div href="#" className="close" onClick={onClickHandler}/>
            </div>
            <div className="CartTitle">
                <p>Carrito</p>
            </div>
        </div>
            <div className="productModal_Container">
                <div className="CartProduct_list">
                    {cartContextValue[0].title!==undefined?
                    cartContextValue.map((el)=>{
                        console.log(el);
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
                                <div className="CartDeleteButton_Container">
                                    <img src={xButtonImage} alt="Cruz" />
                                </div>
                        </div>
                    }): ''}
                </div>
            </div>
        <div className="CartButton_Container"><Link to={'./'}>Checkout</Link></div>
    </div>
}

export default CartMenu