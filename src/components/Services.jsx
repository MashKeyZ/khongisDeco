import React from 'react';
import deco1 from '../assets/wed1.jpg';
import { AiFillCheckCircle, AiOutlineCheck } from 'react-icons/ai';
const Services = () => {
  return (
    <div id="Services" className="w-full bg-white py-16 md:px-[8rem] sm:px-[1rem] px-2">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className="w-[50%] mx-auto">
        <img className='w-[500px] mx-auto my-4 rounded-md' src={deco1} alt='/' />
        </div>
        <div className='flex flex-col justify-center py'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-slate-900'>Our Services</h1>
          <ul className="md:text-3xl sm:text-2xl text-xl py-3 text-pink-700">
            <li className="font-bold flex"><AiFillCheckCircle size={20}/><p className="pl-2">Wedding Decor</p>  </li>
                <ul className="font-500  pl-3 text-slate-900 py-3">
                    <li className="font-500  pl-3 flex py-1">
                      <AiOutlineCheck size={20}/><p className="pl-2">Traditional Setup</p>
                    </li>
                    <li className="font-500  pl-3 flex py-1">
                      <AiOutlineCheck size={20}/><p className="pl-2">Western Setup</p>
                    </li>
                </ul>
                <li className="font-bold flex"><AiFillCheckCircle size={20}/><p className="pl-2">Indoor and Outdoor Picnic Setup</p>  </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services