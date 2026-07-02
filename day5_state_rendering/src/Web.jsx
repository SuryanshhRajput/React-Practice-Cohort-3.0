import React, { useState } from 'react'

const Web = () => {


    const [email, setEmail] = useState("");
  return (
    <div>
      <input
      onChange={(e) => {
        setEmail(e.target.value);
      }}
       type="text" placeholder='email' />
      <h1>this is email - {email}</h1>
    </div>
  )
}

export default Web
