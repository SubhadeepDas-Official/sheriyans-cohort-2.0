import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <div style={{backgroundColor:props.color}} className='bg-amber-400 text-3xl h-15 flex justify-between items-center px-5 my-2'>
        <h2>{props.title}</h2>
        <div className='flex gap-40 w-[70%]'>
          {props.links.map(function(elem){
            return <h1>{elem}</h1>
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar