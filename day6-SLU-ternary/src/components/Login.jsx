import React from 'react'

const Login = ({setToggle}) => {
  return (
  <div className='bg-white rounded-xl flex flex-col gap-4 p-6 '>
    <h1>Login</h1>
        <form className='flex flex-col gap-4 p-6 ' action="">
            <input className='p-2 border border-gray-400 rounded-2xl' type="text" placeholder='Email' />
            <input className='p-2 border border-gray-400 rounded-2xl' type="text" placeholder='password' />
            <button className='p-2 bg-blue-600 text-white rounded-3xl cursor-pointer'>Login</button>
        </form>
        <p>didnt have an Account? <span onClick={()=> setToggle(prev => !prev)} className='text-blue-600 cursor-pointer'>Register Here</span></p>

  </div>
    
  )
}

export default Login
