import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="Image ml-7 mr-7">
        <img
          src="https://images.unsplash.com/photo-1656260240269-5341eb2438a9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-200 w-screen  object-cover rounded-lg"
        />
      </div>


      <div className="CenterText absolute top-45 left-2/8 text-center flex flex-col gap-5 items-center">
        <h1 className="text-5xl text-white font-bold">
          Unleash Your Inner Champion Today.
          <br />
          All In One Place.
        </h1>
        <h2 className="text-white text-xl">
          Join the ultimate tennis experience - where passion meets performance,
          <br />
          and every swings brings you closer to victory.
        </h2>
        <button className="border rounded-[50px] bg-transparent border-black p-2.5 text-black hover:bg-[#05E5F2] hover:text-white hover:border-[#05E5F2] font-light">
          Start your own journey
        </button>
      </div>


      <div className="SocialIcons absolute text-4xl bottom-1 right-15 gap-4 flex">
        <a href="https://www.instagram.com">
          <i class="ri-instagram-fill"></i>
        </a>
        <a href="https://www.tiktok.com">
          <i class="ri-tiktok-line"></i>
        </a>
        <a href="https://www.facebook.com">
          <i class="ri-facebook-circle-fill"></i>
        </a>
      </div>


      <div className="BottomLeft flex items-center-safe absolute bottom-1 left-15 h-20 w-100">
        <h1 className='text-white text-sm'>
          Train with real professionals. <br />
          Get the real results.
        </h1>
        <div className="relative h-15 w-35  rounded-4xl  p-6 max-w-sm mx-auto bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
            <img
              className="img-trainer absolute left-4 bottom-2.5 "
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="img-trainer absolute left-12 bottom-2.5"
              src="https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="img-trainer absolute left-21 bottom-2.5"
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
        </div>
      </div>


    </div>
  );
};

export default Hero;
