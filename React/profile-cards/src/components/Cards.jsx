import React from 'react'

const Cards = (props) => {

  return (
    <div className='p-10 flex flex-wrap gap-10 justify-center'>

      {props.alluser.map((user, index) => {
        return(
          <div className='bg-indigo-400 h-100 w-80 flex flex-col items-center p-5 gap-8 rounded-2xl '>

            <img 
              src={props.allimages[index]} 
              className='h-40 w-40 object-cover rounded-full' 
            />

            <h1 className='text-4xl'>{user}</h1>

            <h1 className='text-1xl max-w-full break-all text-center'>{props.allemail[index]}</h1>
            <h1 className='text-1xl max-w-full break-all text-center'>{props.alldate[index]}</h1>

          </div>
        )
      })}
    </div>
  )
}

export default Cards