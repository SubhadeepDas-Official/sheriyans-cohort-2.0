import React, { useState } from 'react'

const User = (props) => {

  const [newUser, setNewUser] = useState('')
  return (
    <div>
      <form
      onSubmit={(e)=>{
        e.preventDefault()

        props.changeUser(newUser) //here we are sending data from User.jsx to App.jsx -> backward flow of data

        setNewUser('')
      }}>
        <input 
        value={newUser}
        onChange={(e)=>{
          setNewUser(e.target.value)
        }}
        type="text" placeholder='Enter Name' />
        <button type="submit" placeholder='submit'>Submit</button>
      </form>
    </div>
  )
}

export default User