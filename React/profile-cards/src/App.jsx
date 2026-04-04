import React, { useRef, useState } from 'react'
import Cards from './components/Cards';

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState('')

  const [userData, setUserData] = useState([])

  const fileRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault()

    setUserData([...userData,{name,email,date,image}])


    setName('')
    setEmail('')
    setDate('')

    fileRef.current.value = null;
  }

  const handleDeletion = (idx) => {
    const copyUserData = [...userData]
    copyUserData.splice(idx,1)
    setUserData(copyUserData)
  }

  return (
    <div>
      <form 
        onSubmit={(e) => {
          handleSubmit(e)
      }}>
        <div className='flex gap-2 justify-between p-5'>
          <input onChange={(e)=>{
            setName(e.target.value)
            }} 
            type="text" placeholder='Enter your name' className='border-2 text-xl rounded font-semibold p-2' value={name} required/>
          <input onChange={(e)=>{
            setEmail(e.target.value)
            }}
            type="email" placeholder='Enter your email' className='border-2 p-2 text-xl rounded font-semibold' value={email} required />
          <input onChange={(e)=>{
            setDate(e.target.value)
            }}
            type="date" placeholder='Enter your email' className='border-2 p-2 text-xl rounded font-semibold' value={date} required/>

          <input 
            type="file" 
            accept="image/*"
            className='border-2 p-2 text-xl rounded font-semibold'
            ref={fileRef}
            onChange={(e) => {
              const file = e.target.files[0];
              const imageURL = URL.createObjectURL(file);
              setImage(imageURL);
            }}
          />

          <input type="submit" className='text-white border-2 p-2 text-xl bg-linear-to-br from-indigo-800 via-purple-600 to-pink-300 rounded font-semibold' />
        </div>
      </form>

      <Cards allUserData = {userData} handleDeletion = {handleDeletion}/>
      
    </div>
  )
}

export default App
