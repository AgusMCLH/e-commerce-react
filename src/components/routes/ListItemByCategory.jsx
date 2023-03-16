import React, {useEffect, useState} from "react";
import Card from './../common/ProductCard/Card'
import Loader from './../common/cargador/cargador'
import { useParams } from "react-router";
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'


const ListItemByCategory =()=>{
    const [listaDeProductos, funcionAgrgarProducto] = useState([]);
    let {categ, type}=useParams()
    console.log(categ, type);
    

      useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        let q = conditional(itemsCollection)
        let list=[]
        
          getDocs(q).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => {
              
                list.push({
                  id: snapshot.id,
                  ...snapshot.data(),
                }) 
              
              
            });
            funcionAgrgarProducto(list);
            console.log(listaDeProductos);
          });
      }, [categ, type]);

      const conditional = (itemsCollection)=>{
        console.log(categ);
        if (type===undefined){
          return query(itemsCollection, where("category", "==", categ))
        }else{
          switch (type) {
            case '1':
              return query(itemsCollection, where("category", "==", `men's clothing` ));
              break;
              case '2':
                return query(itemsCollection, where("category", "==", `women's clothing` ));
              break;
          
            default:
              // return snapshot.category===`women's clothing` || snapshot.category===`men's clothing`;

          }
        }
      }

      


  if (listaDeProductos.length===0) {
    return <Loader></Loader>
  }
  return <Card productos={listaDeProductos} />;
};

export default ListItemByCategory;