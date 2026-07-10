import React from 'react'

const Navbar = () => {
  return (
    <div className='p-4 m-3 rounded text-white flex items-center justify-between bg-black'>
      <img width={35} className='rounded-full ' src="https://img.magnific.com/free-vector/user-blue-gradient_78370-4692.jpg" alt="" />
      <div className='flex gap-6 font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button className='p-2 bg-blue-700 rounded cursor-pointer '> Create User</button>
    </div>
  )
}

export default Navbar
