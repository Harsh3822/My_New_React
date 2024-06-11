import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Project = () => {
  let [data, setData] = useState([]);
  const [loading, setloading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setloading(true)
        setData(response.data);
      })
      .catch((err) => alert("Error Found", err));
  }, [id]);
  return (
    <div>
      <h1>Projectpage</h1>
      <div style={{ border: "2px solid", borderRadius: "5px", padding: "20px", margin: "30px 0", maxWidth: "400px", minHeight: "300px", textAlign: "center", margin: "15% auto" }}>
        <h1>{data.title}</h1>
        <img src={data.image} alt={data.title} height={150} width={150} />
        <p>{data.description}</p>
        <h4>Price: ${data.price}</h4>
        <b>Category: {data.category}</b><br /><br />
      </div>
    </div>
  )
}

export default Project