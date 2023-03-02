import React, {useEffect, useState} from "react";
import Card from './../common/ProductCard/Card'
import Loader from './../common/cargador/cargador'
import { useParams } from "react-router";

const Clothes =()=>{
    const [listaDeProductos, funcionAgrgarProducto] = useState([]);
    let {type}=useParams()
    useEffect(() => {
      let list = [];
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              if (type==='1') {
                // eslint-disable-next-line
                json.map((el)=>{if (el.category==="men's clothing") {
                  list.push(el);
                  return '';
                }})
              }
              if (type==='2') {
                // eslint-disable-next-line
                json.map((el)=>{if (el.category==="women's clothing") {
                  list.push(el);
                  return '';
                }})
              }
              if (type==='3') {
                // eslint-disable-next-line
                json.map((el)=>{if (el.category==="men's clothing" || el.category==="women's clothing") {
                  list.push(el);
                  return '';
                }})
              }
              funcionAgrgarProducto(list);
            })
          }, [type]);
  if (listaDeProductos.length===0) {
    return <Loader></Loader>
  }
  return <Card productos={listaDeProductos} />;
};

export default Clothes;