import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar title = "Deep" color = "red" links = {['Home','Shop','Logout','Login']}/>
      <Navbar title = "Harpit"  color = "blue" links = {['Home','Shop','Logout','Login','Account']}/>
      <Navbar title = "Subha"  color = "green" links = {['Home','Shop','Logout','Login','Videos','Audio']}/>
    </div>
  )
}

export default App