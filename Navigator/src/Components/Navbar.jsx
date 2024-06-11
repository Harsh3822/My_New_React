import React from 'react'
import { NavLink } from 'react-router-dom'

let links = [
    { path: "/", title: "Home" },
    { path: "/About", title: "About" },
    { path: "/Project", title: "Project" },
    { path: "/Products", title: "Products" },
    { path: "/Login", title: "Login" },
]

const Navbar = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-around"}}>
            {links.map((el) => <NavLink style={({isActive})=>{
           return isActive ? {color:"red",textDecoration:"none"}:{color:"teal",textDecoration:"none"}
            }} key={el.path} to={el.path}>{el.title}</NavLink>)}
        </div>
    )
}

export default Navbar