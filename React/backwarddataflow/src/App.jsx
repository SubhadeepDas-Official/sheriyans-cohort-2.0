import React, { useState } from 'react'
import User from './components/User';


const App = () => {

  const [user, setUser] = useState('John')

  const changeUser = (newUser) => { //here we recieve the data from User.jsx using newUser
    setUser(newUser) // and set the user to newUser
  }
  return (
    <div>
      <h1>User is {user}</h1>
      <User user={user} changeUser={changeUser}/>
    </div>
  )
}

export default App