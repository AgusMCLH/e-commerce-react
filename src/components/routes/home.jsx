import React, {useEffect, useState} from "react";
import Card from './../common/ProductCard/Card'
import Loader from './../common/cargador/cargador'

const Home =()=>{
    const [listaDeProductos, funcionAgrgarProducto] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>funcionAgrgarProducto(json))
  }, []);
  if (listaDeProductos.length===0) {
    return <Loader></Loader>
  }
  return <Card productos={listaDeProductos} />;
};

export default Home;