import React from 'react'
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';

const Footer = () => {

  const [newUser, setNewUser] = useContext(UserDataContext)

  return (
    <div>Footer{newUser}</div>
  )
}

export default Footer