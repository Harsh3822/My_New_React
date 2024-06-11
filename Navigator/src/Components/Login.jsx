import React, { useState } from 'react'
import axios from 'axios'
function Login() {
  const [email,setemail]=useState("")
  const[password,setpassword]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault()
    let userdata={
      email,password
    }
    axios.post('https://reqres.in/api/login',userdata,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      const data = response.data;
      alert("Login Succesfull")
      localStorage.setItem('token', data.token);
    })
    .catch(error => {
      console.error('There was an error logging in!', error);
    });
  }

  return (
    <div>
      <form onSubmit={handlesubmit} style={{backgroundColor:"teal",width:"50%",height:"200px",margin:"auto"}}>
      <h1 style={{ marginTop: "50px"}}>User-Information</h1>
        <input type='email' onChange={(e)=>setemail(e.target.value)} placeholder='Enter The Email' style={{ width: "200px" }}></input><br></br><br></br>
        <input type='Password'onChange={(e)=>setpassword(e.target.value)} placeholder='Enter The Password' style={{ width: "200px" }}></input><br></br><br></br>
        <button style={{width:"150px",backgroundColor:"green"}}>Submit</button>
      </form>
    </div>
  )
}

export default Login