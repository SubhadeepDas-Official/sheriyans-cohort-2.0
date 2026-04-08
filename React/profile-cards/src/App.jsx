import React, { useRef, useState } from 'react'
import Cards from './components/Cards';

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState('')

  const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
};

  const localData = JSON.parse(localStorage.getItem('all-user-data')) || [];
  

  const [userData, setUserData] = useState(localData)

  const fileRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const oldUserData = [...userData, {name,email,date,image}]
    setUserData(oldUserData)

    localStorage.setItem('all-user-data', JSON.stringify(oldUserData))


    setName('')
    setEmail('')
    setDate('')

    fileRef.current.value = null;
  }

  const handleDeletion = (idx) => {
    const copyUserData = [...userData]

    const conf = confirm("Are you sure you want to delete this user?")

    if(conf){
      copyUserData.splice(idx,1)
    }else{
      alert('User not deleted')
    }

    setUserData(copyUserData)
    localStorage.setItem('all-user-data', JSON.stringify(copyUserData));
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
            onChange={async (e) => {
              const file = e.target.files[0];
              if (!file) return;

              const base64 = await fileToBase64(file);
              setImage(base64);
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
