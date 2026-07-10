import React from 'react'


const RHF = () => {


  return (
    <div className='w-80  h-screen'>
      <form 
      className='flex rounded p-6 bg-white flex-col gap-5 '>

        <input 
        

        className="p-2 border rounded border-gray-400" type="text" placeholder='product name' />
        
        <input  
        className="p-2 border rounded border-gray-400" type="text" placeholder='price' />
        
         <input 
         className="p-2 border rounded border-gray-400" type="text" placeholder='category'/>
        
        
        <input 
         className="p-2 border rounded border-gray-400" type="url" placeholder='image address'/>
        
        <button className='p-2 bg-blue-600 text-white rounded'>create</button>
      </form>

     
    </div>
  )
}

export default RHF
