import React, { useState } from 'react'

const App = () => {


  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name:"Raman",
  });


  return (
    <div>
      <h1>Count is {count}</h1>
      <h1>name is - {user.name}</h1>

      <button onClick={()=>{
        setCount(count+1);

      }}>Count inc</button>


      <button onClick={() => {
        
        setUser({name: "Suryansh"});

      }}>change name</button>

    </div>
  )
}

export default App;
