import React, { useRef, useState } from 'react'
import Cards from './components/Cards';

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState('');
  
  const [allUsers, setAllUsers] = useState([])
  const [allEmails, setAllEmails] = useState([])
  const [allDates, setAllDates] = useState([])
  const [allImages, setAllImages] = useState([]);

  const fileRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const oldUsers = [...allUsers,name]
    setAllUsers(oldUsers)

    const oldEmails = [...allEmails,email]
    setAllEmails(oldEmails)

    const oldDates = [...allDates,date]
    setAllDates(oldDates)

    const oldImages = [...allImages, image];
    setAllImages(oldImages);

    setName('')
    setEmail('')
    setDate('')

    fileRef.current.value = null;
  }

  return (
    <div>
      <form className='p-10 flex gap-5' 
        onSubmit={(e) => {
          handleSubmit(e)
      }}>
        <div>
          <input onChange={(e)=>{
            setName(e.target.value)
            }} 
            type="text" placeholder='Enter your name' className='border p-2' value={name} required/>
          <input onChange={(e)=>{
            setEmail(e.target.value)
            }}
            type="email" placeholder='Enter your email' className='border p-2 ' value={email} required />
          <input onChange={(e)=>{
            setDate(e.target.value)
            }}
            type="date" placeholder='Enter your email' className='border p-2' value={date} required/>

          <input 
            type="file" 
            accept="image/*"
            className='border p-2'
            ref={fileRef}
            onChange={(e) => {
              const file = e.target.files[0];
              const imageURL = URL.createObjectURL(file);
              setImage(imageURL);
            }}
          />

          <input type="submit" className='border p-2 bg-indigo-200' />
        </div>
      </form>

      <Cards alluser = {allUsers} allemail = {allEmails} alldate = {allDates} allimages = {allImages}/>
      
      {/* {allUsers.map(function(e){
        return <h1 className='text-cyan-950 text-5xl'>{e}</h1>
      })}
      {allEmails.map(function(e){
        return <h1 className='text-cyan-950 text-5xl'>{e}</h1>
      })}
      {allDates.map(function(e){
        return <h1 className='text-cyan-950 text-5xl'>{e}</h1>
      })} */}
      
    </div>
  )
}

export default App
