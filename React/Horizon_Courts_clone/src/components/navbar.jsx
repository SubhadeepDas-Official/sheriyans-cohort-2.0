import React from 'react';

const Navbar = () => {
  return (
    <div className='flex h-20 justify-between p-7 items-center'>
      <h1 className="brand font-bold text-3xl">
        Horizon Courts
      </h1>
      <div className="center flex gap-18">
        <button className='nav-btn'>About Us</button>
        <button className='nav-btn'>Services</button>
        <button className='nav-btn'>Coaches</button>
        <button className='nav-btn'>Events</button>
        <button className='nav-btn'>Contacts</button>
      </div>
      <button className='border rounded-[20px] px-5 gap-4 font-thin flex border-black p-1.25 bg-black text-white hover:inset-shadow-gray-300 hover:inset-shadow-sm'>Book Now<i className="ri-arrow-right-up-line"></i></button>
    </div>
  );
};

export default Navbar;
