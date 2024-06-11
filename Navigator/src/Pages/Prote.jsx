import React from "react"

const Prote = ({ children }) => {

  const token = localStorage.getItem("token")

  if (!token) {
    return alert("you are not login!")
  }

  return children
}

export default Prote