import React from 'react'
import Navbar from './components/Navbar'
import AppRouter from './routes/AppRouter'

const App = () => {
  return (
    <div className='h-screen p-2'>
      <Navbar />
      <AppRouter/>
    </div>
  )
}

export default App
