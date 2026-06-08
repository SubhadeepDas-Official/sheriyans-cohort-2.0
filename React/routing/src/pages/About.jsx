import React from 'react'
import { Route, Routes } from "react-router-dom";


const About = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<About />}/>
      </Routes>
    </div>
  )
}

export default About