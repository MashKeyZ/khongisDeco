import React from 'react';
import deco1 from '../assets/deco4.jpg';

const Analytics = () => {
  return (
    <div id="About" className='w-full bg-white py-16 md:px-[8rem] sm:px-[1rem] px-2'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className="w-[50%] mx-auto">
        <img className='w-[500px] mx-auto my-4 rounded-md' src={deco1} alt='/' />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-pink-600 font-bold '>WHO ARE WE!!!</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-slate-900'>Why Should You Trust Us With Your Event</h1>
          <p>
          Organizers and decorators of events based in Limpopo and Gauteng. We are an event management company with a focus on corporate events, social gatherings, and art. We provide you with specialized service and assistance throughout the entire process, including event idea, planning, and décor organization. We cover everything, including finding the perfect location, catering, entertainment, and décor.   We prioritize building great customer connections because we place a premium on quality of work. You receive a personalized service that pays close attention to every last detail. With every project, we approach it with a can-do enthusiasm and take pride in our work. Our primary goals are to fulfill your needs, improve your quality of life, and make you happy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
