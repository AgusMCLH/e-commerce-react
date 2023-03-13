import React, {useEffect, useState} from "react";
import Card from './../common/ProductCard/Card'
import Loader from './../common/cargador/cargador'
import { useParams } from "react-router";
import { getFirestore, getDocs, collection} from 'firebase/firestore'


const Category =()=>{
    const [listaDeProductos, funcionAgrgarProducto] = useState([]);
    let {categ, type}=useParams()
    console.log(categ, type);
    

      useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        let list=[]
        
          getDocs(itemsCollection).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => {
              console.log(conditional(snapshot.data));
              if (conditional(snapshot.data())) {
                list.push({
                  id: snapshot.id,
                  ...snapshot.data(),
                }) 
              }
              
            });
            funcionAgrgarProducto(list);
            console.log(listaDeProductos);
          });
      }, [categ, type]);


      const conditional = (snapshot)=>{
        if (type===undefined){
          // console.log(snapshot, ' - ', categ);
          return snapshot.category===categ
        }else{
          switch (type) {
            case '1':
              return snapshot.category===`men's clothing`;
              break;
            case '2':
              return snapshot.category===`women's clothing`;
              break;
          
            default:
              return snapshot.category===`women's clothing` || snapshot.category===`men's clothing`;

          }
        }
      }


  if (listaDeProductos.length===0) {
    return <Loader></Loader>
  }
  return <Card productos={listaDeProductos} />;
};

export default Category;