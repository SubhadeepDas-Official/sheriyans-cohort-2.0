/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const UserDataContext = createContext();

const UserContext = (props) => {

  const [newUser, setNewUser] = useState('John')

  // const user = 'Subhadeep'

  return (
    <div>
      <UserDataContext.Provider value={[newUser, setNewUser]}>
        {props.children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
