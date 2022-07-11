import React from 'react';
import Form from './Form'

const Newsletter = () => {

 
  return (
    <div className='w-full py-16 text-white md:px-[8rem] sm:px-[1rem] px-2 bg-slate-700 '>
      <div className='max-w-[1240px] mx-auto sm:flex justify-between  '>
        <div className=' my-4 sm:pt-[7rem]'>
          <h1 className='md:text-7xl sm:text-4xl text-3xl font-bold py-2 text-pink-500'>
            Get Your Quote today!!!
          </h1>
          <p className=" py-4 sm:mt-2 bg-pink-400 sm:mr-5 rounded-md text-l">Leave us a message here and we will keep in touch</p>
        </div>
        <div className='my-4 background2 sm:w-[60%] rounded-lg text-[#fdfdfd] py-10 px-5'>
            <Form/>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
