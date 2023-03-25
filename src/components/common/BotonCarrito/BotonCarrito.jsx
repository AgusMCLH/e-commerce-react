import React, { useEffect, useState } from "react";
import './css/style.css'
import tickicon from './../../../img/cheque.png'
import preguntaicon from './../../../img/pregunta.png'
import carticon from './../../../img/cartSVG.svg'

const BotonCarrito = ()=>{
    const [boton,setBoton]=useState()
    useEffect(()=>{
        setBoton(document.getElementById('BotonConfirmarCarrito')) 
    },[])

    const onClickHandler=()=>{
        
            boton.classList.add('confirm')
            document.getElementById('BotonConfirmarCarrito__text').innerText='Agregado'
        
    }

    const onBlurHandler = ()=>{
        if (boton.classList.contains('confirm') || boton.classList.contains('done')) {
            setTimeout(()=>{
                boton.classList.remove('confirm')
                boton.classList.remove('done')
                document.getElementById('BotonConfirmarCarrito__text').innerText='Agregar al carrito'
            }, 1500)
        }
    }
    
    

    return<>
    <button className="BotonCarrito_fancy" id="BotonConfirmarCarrito" onClick={()=>onClickHandler()} onMouseOut={(()=>onBlurHandler())}>
        <div className='icon'>
            <img src={carticon} className='fa fa-trash-o'></img>
            <img src={tickicon} className='fa fa-question'></img>

        </div>
        <div className='text'>
            <span ><p id="BotonConfirmarCarrito__text">Agregar al Carrito</p></span>
        </div>
  </button></>
}

export default BotonCarrito