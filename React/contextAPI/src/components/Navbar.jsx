import React from 'react'
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';

const Navbar = () => {

  const [newUser, setNewUser] = useContext(UserDataContext)

  return (
    <div>
      Navbar 
      {newUser}
      <button onClick={()=>{
        if(newUser == 'John'){
          setNewUser('Lily')
        }else{
          setNewUser('John')
        }
      }}>Change User</button>
    </div>
  )
}

export default Navbar