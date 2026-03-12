import React from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';

const Section1 = () => {
  return (
    <div className="h-lvh p-7 flex flex-col justify-between">
      <div className="top flex items-center justify-between ">
        <button className="border rounded-2xl p-1 border-gray-400">
          About Horizon
        </button>
        <h1 className="text-2xl">
          At Horizon we don't just play tennis - we live it. Since 2021, <br />
          our club has been a home for players of all levels, from eager <br />{' '}
          beginners to seasoned pros.
        </h1>
      </div>

      <div className="middle flex justify-between">
        <div className="left h-100 w-118 rounded-4xl bg-[#0D1A2C] overflow-hidden flex flex-col gap-5 p-4">
          <img src={p1} alt="" className="h-25 w-25 object-contain " />
          <h1 className="text-white text-3xl">
            Professional hard courts <br />
            <span className="text-[#727F92]">
              with tournament-grade <br />
              lighting & climate control -
              <br />
              play in{' '}
            </span>
            <span>play in perfect conditions, </span>
            <br />
            <span>in any season.</span>{' '}
          </h1>
          <div className="flex gap-5">
            <div className="rounded-3xl w-16 bg-[#2DB3FF]">
              <i className="ri-record-circle-fill text-2xl ml-9 text-white"></i>
            </div>
            <h1 className="text-[#727F92] text-[20px] font-light">Game Mode</h1>
          </div>
        </div>

        <div className="middle h-100 w-118 rounded-4xl bg-linear-to-b from-blue-600 to-cyan-500 relative">
          <div className="h-10 rounded-4xl  p-6 max-w-sm mx-auto bg-linear-to-r from-white/65 to-white/10 backdrop-blur-xs border border-white/20 shadow-lg flex items-center absolute top-[45%] right-[25%] text-white font-light">
            Private and Group Lessons
          </div>
          <img src={p2} className="h-100" alt="#" />
        </div>

        <div className="right h-100 w-118 rounded-4xl bg-[#F7F8FC] p-7 flex justify-around flex-col">
          <div className="gap-2 flex flex-col">
            <h1 className="text-7xl font-medium text-[#2DB3FE]">100+</h1>
            <h2 className="text-2xl font-light">Pro Coaches</h2>
            <h3 className="text-1xl font-light">
              Certified Professionals ready to boost your <br />
              game from first serve to tournament level.
            </h3>
          </div>

          <div className="flex justify-between">
            <div className="font-light">
              <h1>Beginner</h1>
              <h1>Intermediate</h1>
              <h1>Advanced</h1>
            </div>

            <div>
              <div>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
              </div>
              <div>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
              </div>
              <div>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
                <i class="ri-circle-fill i-dots"></i>
              </div>
            </div>

            <div className="font-light">
              <h1>50</h1>
              <h1>40</h1>
              <h1>25</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 ">
        <h1 className="flex justify-center text-3xl font-light">
          A few more facts about us in numbers
        </h1>

        <div className="flex justify-around">
          <h1 className="num-1">
            12 000+
            <span className="text-[15px] font-light">
              Hours of play annually
            </span>
          </h1>

          <h1 className="num-1">
            89%
            <span className="text-[15px] font-light">
              Player Retention Rate
            </span>
          </h1>

          <h1 className="num-1">
            1200+
            <span className="text-[15px] font-light">Active Members</span>
          </h1>

          <h1 className="num-1">
            125+
            <span className="text-[15px] font-light">Annual Tournaments</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
