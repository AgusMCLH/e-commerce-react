import React, {useEffect} from "react";
// import List from "../list/List";

const Consultarcarrito = ({cartsaved}) =>{
    let ides = cartsaved.map((el)=>{return el.id});
    useEffect(()=>{
        let productos = []
        for (let i = 0; i < ides.length; i++) {
            fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>{
                for (let i = 0; i < ides.length; i++) {
                    for (let j = 0; j < json.length; j++) {
                        if (ides[i]===json[j].id) {
                            productos.push(json[j])
                        }
                        
                    }
                    
                }

            })    
        }
    },[ides])

    return <></>
}



export default Consultarcarrito



