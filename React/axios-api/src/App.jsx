import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    let raw = await axios.get('https://randomuser.me/api/')
    console.log(raw.data.results[0].name);
    setUserData([...userData, raw.data.results[0].name])
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>

    {userData.map((elem, idx) => {
      return <h1 key={idx}>{elem.first}</h1>
    })}

    </div>
  )
}

export default App