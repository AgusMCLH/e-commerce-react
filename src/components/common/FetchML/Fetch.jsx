import React, { useEffect, useState } from 'react';
import Card from './../ProductCard/Card';
import Loader from '../cargador/cargador';

const Call = () => {
  const [listaDeProductos, funcionAgrgarProducto] = useState([]);
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLU/search?q=remeras+nike#json')
      .then((res) => res.json())
      .then((res) => {
        funcionAgrgarProducto(res.results);
      });
  }, []);
  if (listaDeProductos.length===0) {
    return <Loader></Loader>
  }
  return <Card productos={listaDeProductos} />;
};

export default Call;
