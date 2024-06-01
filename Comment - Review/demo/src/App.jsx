import { useState } from 'react'
import './App.css'
import StudentForm from './Components/StudentForm'
import Login from './Components/Login'

function App() {
  const [toggle, setToggle] = useState(false)


  const Toggle = () => {
    setToggle(prevtoggle => !prevtoggle);
  }
  return (
    <div className='App'>
      {toggle ? <StudentForm /> : <Login />}
      <button onClick={Toggle}>{toggle ? "Sign-up" : "Login"}</button>
    </div>
  )
}

export default App