import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default AppRouter
