import React, { useState } from 'react'
import { db } from '../Sevices/firebase'
import { useEffect } from 'react'
import { getDocs,collection } from 'firebase/firestore'


const Dashbord = () => {
  const [product,setproduct]=useState([]);
  const fetchdatafromfirebasestore = () => {
    getDocs(collection(db,"product"))
    .then((res)=>{
      let filterdata=res.docs.map((el)=>({...el.data(),id: el.id}));
      console.log(filterdata);
      setproduct(filterdata);
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  useEffect(()=>{
   fetchdatafromfirebasestore()
  },[])
  return (
    <div><h1>Dashbord</h1>
    
     {
      product.length>0 &&
      product.map((el)=>(
        <div key={el.id} style={{border:"2px solid black",margin:"20px"}}>
         <img src={el.image}alt=''width={200}height={200}></img>
         <h5>{el.title}</h5>
         <h5>{el.price}</h5>
        </div>
      ))}
    </div>
  )
}

export default Dashbord