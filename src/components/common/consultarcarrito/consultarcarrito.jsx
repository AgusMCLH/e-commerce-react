import React, {useEffect, useState} from "react";
import List from "../list/List";

const Consultarcarrito = ()=>{
    let [carrito, crearcarrito] = useState([])
    useEffect(()=>{
        let carritotemporal = JSON.parse(localStorage.getItem('carrito')) || ''
        let auxlist = [];
        carritotemporal.map((el)=>{
            fetch(`https://fakestoreapi.com/products/${el.id}`)
            .then(res=>res.json())
            .then(json=>auxlist.push(json))
        })
        crearcarrito(auxlist)
    },[])
    return <><List productos={carrito} name={'Productos'}></List></>
}

export default Consultarcarrito