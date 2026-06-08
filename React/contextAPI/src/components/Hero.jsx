import React from 'react'
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';

const Hero = () => {

  const [newUser, setNewUser] = useContext(UserDataContext)

  return (
    <div>Hero
      {newUser}
    </div>
  )
}

export default Hero