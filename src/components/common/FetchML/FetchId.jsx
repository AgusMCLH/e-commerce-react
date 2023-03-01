import React, { useEffect, useState } from 'react';

const FetchId = ({id}) => {
  const [listaDeProductos, funcionAgrgarProducto] = useState([
    { },
  ]);
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((res) => res.json())
      .then((res) => {
        funcionAgrgarProducto(res);
      });
  }, [id]);
  return <p>Estas en ItemContainer con el id: {listaDeProductos.id}</p>;
};

export default FetchId;