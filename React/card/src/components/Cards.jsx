import React from 'react'

const Card = (props) => {
  
  return (
    <div className='p-5'>
      <div className='h-150 w-100 bg-white rounded-4xl relative'>
        <img src={props.user.cover} className='p-2 rounded-4xl object-cover h-60 w-110'/>
        <img src={props.user.profile} className='h-40 w-40 object-cover rounded-[50%] border-white border-4 absolute top-[25%] left-[50%] -translate-x-1/2 ' />
        <h1 className='text-4xl text-black font-bold absolute top-[53%] left-[50%] -translate-x-1/2 whitespace-nowrap'>{props.user.name}</h1>
        <h2 className='w-[70%] text-center text-xl font-light text-gray-500 absolute top-[60%] left-[50%] -translate-x-1/2'>{props.user.description}</h2>

        <div className='h-20 w-[90%] mx-5  bg-gray-200 absolute bottom-20 rounded-3xl flex text-black font-bold p-4 justify-around text-center inset-shadow-gray-400 inset-shadow-sm'>
          <div>
            <h1>{props.user.likes}</h1>
            <h2 className='text-gray-500 font-light'>Likes</h2>
          </div>
          <div>
            <h1>{props.user.posts}</h1>
            <h2 className='text-gray-500 font-light'>Posts</h2>
          </div>
          <div>
            <h1>{props.user.views}</h1>
            <h2 className='text-gray-500 font-light'>Views</h2>
          </div>
        </div>

        <div className='w-full bottom-5 absolute text-black text-3xl text-center flex justify-evenly'>
          <i class="ri-instagram-line "></i>
          <i class="ri-threads-line"></i>
          <i class="ri-twitter-x-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default Card