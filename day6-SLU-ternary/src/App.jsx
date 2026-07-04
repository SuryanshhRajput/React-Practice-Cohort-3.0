import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Usercard from './components/Usercard'

const App = () => {


  const [toggle, setToggle] = useState(false)
    const [users, setUsers] = useState([]);



  return (
    <div className='bg-gray-300 h-screen w-screen flex justify-center items-center '>
      { toggle ?
       users.map((elem) => <Usercard user={elem}/>)
      : <Register setUsers={setUsers} setToggle={setToggle}/>}
    </div>
  )
}

export default App
