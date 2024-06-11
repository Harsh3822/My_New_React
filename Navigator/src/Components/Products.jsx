import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Project from "./Project";


const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    axios.get("https://fakestoreapi.com/products")
      .then((response) =>{
        setData(response.data)
        setloading(false)
      })
      .catch((err) => alert("Error Found"));
  }, []);
  return loading ? <h1> Loading......</h1> : (
    <div>
      <h1>Product page</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"15px"}}>
          {data.map((el)=>{
            const { id, title, price, image,category,description, rating} = el;
              return(
                <Link to={`/project/${el.id}`} key={el.id} style={{border:"1px solid black",textDecoration:"none",color:"black"}} >
                  <h4>{id}</h4>
                  <img src={image} width={200} height={200} alt="" />
                  <h3>{title}</h3>
                  <h4>{category}</h4> 
                  <p>{description}</p>
                  <h5>{rating.rate}</h5>
                </Link>
              )
          })}
      </div>
    </div>
  )
}

export default Products