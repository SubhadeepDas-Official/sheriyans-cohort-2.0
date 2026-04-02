import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitForm = (e) => {   // receive 'e' here
    e.preventDefault();         // and use 'preventDefault' to 'e' to prevent auto reload of pages while form submission
    console.log(title);

    const newAllUsers = [...allUsers,title]
    setAllUsers(newAllUsers)
    console.log(newAllUsers);

    setTitle('')
  }


  return(
    <div>
      <form
        onSubmit={(e) => {     //to prevent auto reload we pass 'e' here     
          submitForm(e)              //to prevent auto reload we pass 'e' here 
        }} 
      >
        <input type="text" placeholder='Enter Name' value={title} required         
          onChange={(e) => {
            setTitle(e.target.value);          
          }}
        />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App