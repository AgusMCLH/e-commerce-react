import React from "react";
import './css/style.css'
import { Link } from 'react-router-dom';

const CartMenu = ()=>{

    return <div className="CartMenu_Window">
        <div className="head">
            <div className="Cart_CloseButton">
                <div href="#" className="close"/>
            </div>
            <div className="CartTitle">
                <p>Carrito</p>
            </div>
        </div>
            <div className="productModal_Container"></div>
        <div className="CartButton_Container"><Link to={'./'}>Checkout</Link></div>
    </div>
}

export default CartMenu