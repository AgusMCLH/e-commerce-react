import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({children})=>{
    const [cartContextValue, setCartContext] = useState([{ title: undefined }]);


    return (<CartContext.Provider value={{ cartContextValue, setCartContext }}>
        {children}
    </CartContext.Provider>)
}

export {CartContext, CartProvider};