import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const Form = () => {

const [products, setproducts] = useState({});
const formRef = useRef({});

let handleSubmit = (e) => {
    e.preventDefault();

    let obj ={
        pName:formRef.current.productName.value,
        price: formRef.current.price.value,
        cat: formRef.current.cat.value,
        image: formRef.current.image.value,
    };
    setproducts(obj);

};

  return (
    <div className='w-80  h-screen'>
      <form onSubmit={handleSubmit} 
      className='flex rounded p-6 bg-white flex-col gap-5 '>

        <input 
        ref={(e) => formRef.current.productName = e}

        className="p-2 border rounded border-gray-400" type="text " placeholder='product name' />
        
        <input ref={(e) => formRef.current.price = e} 
        className="p-2 border rounded border-gray-400" type="text" placeholder='price' />
        
        <span>Select a category</span>
        <select ref={(e) => formRef.current.cat = e}
        className="p-2 border rounded border-gray-400" >
            <option value="MENS">Mens</option>
            <option value="WOMEN">Women</option>
            <option value="KIDS">Kids</option>
        </select>
        
        <input ref={(e) => formRef.current.image = e}
         className="p-2 border rounded border-gray-400" type="url" placeholder='image address'/>
        
        <button className='p-2 bg-blue-600 text-white rounded'>create</button>
      </form>

      <h1>{products.pName}</h1>
      <h1>{products.price}</h1>
      <h1>{products.cat}</h1>
      <h1>{products.image}</h1>
    </div>
  )
}

export default Form
