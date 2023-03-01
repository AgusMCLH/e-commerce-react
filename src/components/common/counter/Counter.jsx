import React, { useEffect, useState } from "react";
import "./Style.css"

const Counter =()=>{

    let [valor, setvalor]=useState()
    useEffect(()=>{
        setvalor(1);
    },[])
    
    const restarNumero = ()=>{
        if (valor!=1) {
            setvalor(valor-1)
        }
    }
    const sumarNumero = ()=>{
        setvalor(valor+1)
    }

    return <div className="Counter">
        <div className="mas" onClick={sumarNumero}>+</div>
        <div className="number"><p id="number">{valor}</p></div>
        <div className="menos" onClick={restarNumero}>-</div>
    </div>
}
export default Counter