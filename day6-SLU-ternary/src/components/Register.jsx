import React, { useState } from 'react'

const Register = ({setToggle, setUsers}) => {


  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  });


  const handleChange = (e) => {
    let { name, value} = e.target;
    setFormData({...formData, [name] : value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name:"",
      email:"",
      password:""
    })
    console.log(formData)
  }





  return (
  <div className='bg-white rounded-xl flex flex-col gap-4 p-6 '>
    <h1>Register</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-6 ' action="">
            <input 
            required
            value={formData.name}
            name="name"
            onChange={handleChange}
            className='p-2 border border-gray-400 rounded-2xl' type="text" placeholder='Name' />

            <input
            required
            value={formData.email}
            name="email"
            onChange={handleChange}
             className='p-2 border border-gray-400 rounded-2xl' type="text" placeholder='Email' />

            <input
            required
            value={formData.password}
            name="password" 
            onChange={handleChange}
            className='p-2 border border-gray-400 rounded-2xl' type="password" placeholder='password' />
            

            <input
            required
            value={formData.image}
            name="image" 
            onChange={handleChange}
            className='p-2 border border-gray-400 rounded-2xl' type="url" placeholder='image-url' />
            <button className='p-2 bg-blue-600 text-white rounded-3xl cursor-pointer'>Register</button>
        </form>
        <p>Already have an Account? <span
        onClick={() => setToggle((prev) => !prev )}
        className='text-blue-600 cursor-pointer'>Login Here</span></p>

  </div>
    
  )
}

export default Register
