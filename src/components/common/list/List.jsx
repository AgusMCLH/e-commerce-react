import React from "react";
import './css/Style.css'

const List = ({productos, name})=>{
    console.log(productos);
    return <div className="ListContainer"><p>{name}</p>
        <div className="List__contentcontainer">
            {productos.map((producto)=>{
                return <div className="Content" key={producto.id}>
                            <p>{producto.title}</p>
                        </div>
            })}
            <div className="Content">

            </div>
            
        </div>
    </div>
}

export default List