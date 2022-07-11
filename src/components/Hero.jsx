import React from 'react';
import Typed from 'react-typed';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="background h-screen">
    <div className=""> 
      <Navbar />
    </div> 
    <div className='flex  md:px-[8rem] sm:px-[1rem] px-2 text-white w-full  justify-center items-center'>
   
      <div className='max-w-[800px] mt-[-45px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-slate-700 font-bold px-2 sm:text-3xl text-2xl'>
         Do you have an event comming up?
        </p>
        <div className='flex justify-center items-center sm:text-[4rem] text-5xl text-pink-600 '>
          <h1 className="font-bold moveL">Khongi's Deco & Catering</h1>
        </div>
          <p className='text-slate-900 font-bold px-2 sm:text-3xl text-2xl py-1 sm:py-3 bg-pink-400 rounded-3xl mt-3 anim'>
         With over a decade of high services, surely you can trust us with your event.
          </p>
        <div className='flex justify-center   sm:py-1 py-3'>
              <p className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-slate-900'>Committed to</p>
   
              <Typed
              className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-slate-700'
                strings={['Value','Service','Style']}
                typeSpeed={120}
                backSpeed={50}
                loop
              />
            
        </div>

      </div>
    </div>
    </div>
  );
};

export default Hero;
