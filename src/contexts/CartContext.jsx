import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({children})=>{
    const [cartContextValue, setCartContext] = useState([{}]);
    const [cartMenuActive, setCartMenuActive] = useState(false) 


    return (<CartContext.Provider value={{ cartContextValue, setCartContext, cartMenuActive, setCartMenuActive }}>
        {children}
    </CartContext.Provider>)
}

export {CartContext, CartProvider};