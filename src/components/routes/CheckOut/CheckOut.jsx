import React from "react";
import './css/Style.css'
import Consultarcarrito from "../../common/consultarcarrito/consultarcarrito";

const CheckOut = ()=>{
    let cart=JSON.parse(localStorage.getItem('carrito')) || ''
return <> <Consultarcarrito cartsaved={cart}></Consultarcarrito></>
}

export default CheckOut;