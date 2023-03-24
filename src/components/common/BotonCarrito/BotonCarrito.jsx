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
        if(boton.classList.contains('confirm')){
            boton.classList.add('done')
            document.getElementById('BotonConfirmarCarrito__text').innerText='Agregado'
            console.log(document.getElementById('BotonConfirmarCarrito__text'));
        } else {
            boton.classList.add('confirm')
            document.getElementById('BotonConfirmarCarrito__text').innerText='Esta Seguro?'
        }
    }

    const onBlurHandler = ()=>{
        if (boton.classList.contains('confirm') || boton.classList.contains('done')) {
            setTimeout(()=>{
                boton.classList.remove('confirm')
                boton.classList.remove('done')
                document.getElementById('BotonConfirmarCarrito__text').innerText='Agregar al carrito'
            }, 3000)
        }
    }
    
    

    return<>
    <button className="BotonCarrito_fancy" id="BotonConfirmarCarrito" onClick={()=>onClickHandler()} onBlur={(()=>onBlurHandler())}>
        <div className='icon'>
            <img src={carticon} className='fa fa-trash-o'></img>
            <img src={preguntaicon} className='fa fa-question'></img>
            <img src={tickicon} className='fa fa-check'></img>
        </div>
        <div className='text'>
            <span ><p id="BotonConfirmarCarrito__text">Agregar al Carrito</p></span>
        </div>
  </button></>
}

export default BotonCarrito