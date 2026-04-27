import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [btn, setBtn] = useState('')

  const [username, setUsername] = useState('')

  const getData = async () => {
    const raw =await axios.get('https://randomuser.me/api/')
    setUsername(raw.data.results[0].name.first+" "+raw.data.results[0].name.last)
  }

  useEffect(function(){
    getData()
  },[btn])

  return (
    <div>
      <h1>{username}</h1>
      <button onClick={()=> {
        setBtn(prev => prev + 1)
      }}>Change User</button>
    </div>
  )
}

export default App