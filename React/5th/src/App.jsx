import React from 'react'
import { useState } from 'react';
import Washroom from './components/washroom';

const App = () => {
  const [gender, setGender] = useState('Male')

  const changeGender = () => {
    if (gender == 'Male') {
      setGender('Female')
    }else if(gender == 'Female'){
      setGender('Others')
    }else{
      setGender('Male')
    }
  }

  return (
    <div>
      <h1>Your Gender is - {gender}</h1>

      <button onClick={changeGender}>Change Gender</button>

      <Washroom user = {gender}/>
    </div>
  )
}

export default App