import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  useEffect(()=>{
    console.log('useEffect is running...');
    
},[num])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> {
        setCount(count+1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrease</button>
      <h1>{num}</h1>
      <button onClick={()=> {
        setNum(num+1)
      }}>Increase</button>
    </div>
  )
}

export default App