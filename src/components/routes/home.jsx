import React, {useEffect, useState} from "react";
import Card from './../common/ProductCard/Card'
import Loader from './../common/cargador/cargador'
import { getFirestore, getDocs, collection} from 'firebase/firestore'


const Home =()=>{
    const [listaDeProductos, funcionAgrgarProducto] = useState([]);
    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items');
  
      getDocs(itemsCollection).then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        funcionAgrgarProducto(docs);
      });
    }, []);
  if (listaDeProductos.length===0) {
    return <Loader></Loader>
  }
  return <Card productos={listaDeProductos} />;
};

export default Home;