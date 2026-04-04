import React from 'react'

const Cards = (props) => {

  console.log(props);
  
  return (
    <div className='p-10 flex flex-wrap gap-10 justify-center'>

      {props.allUserData.map((elem, idx)=> {
        return(
          <div key={idx} className='h-100 w-80 flex flex-col items-center p-5 justify-between rounded-2xl text-white bg-linear-to-br from-indigo-800 via-purple-600 to-pink-300  border-2 border-indigo-200 shadow-2xl shadow-pink-300'>

            <img 
              src={elem.image} 
              className='h-40 w-40 border-2 object-cover rounded-full' 
            />

            <h1 className='text-4xl'>{elem.name}</h1>

            <h1 className='text-1xl max-w-full break-all text-center'>{elem.email}</h1>
            <h1 className='text-1xl max-w-full break-all text-center'>{elem.date}</h1>
            <button 
              onClick={()=>{
                props.handleDeletion(idx)
              }}
              className='bg-red-500 px-4 py-2 rounded border-white border-2 active:scale-95'>Remove</button>

          </div>
        )
      })}
    </div>
  )
}

export default Cards