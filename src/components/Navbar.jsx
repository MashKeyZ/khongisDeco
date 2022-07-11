import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto md:px-[8rem] px-2 ftop'     >
      <div className="flex flex-col justify-between">
        <h1 className='w-full text-4xl font-bold text-pink-700 '>KhongisDeco.com</h1>
      </div>
      <ul className='hidden md:flex text-2xl font-semibold text-slate-700'>
        <li className='p-4 navList  hover:scale-105  duration-300 hover:shadow-blue-700 '>
          <a href="#Reviews">Reviews</a>
        </li>
        <li className='p-4 navList  hover:scale-105  duration-300 hover:shadow-blue-700 '>
          <a href="#Services">Services</a>
        </li>
        <li className='p-4 navList  hover:scale-105  duration-300 hover:shadow-blue-700 '>
          <a href="#About">About</a>
        </li>
        <li className='p-4 navList  hover:scale-105  duration-300 hover:shadow-blue-700 '>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden text-slate-700 '>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
        
          <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600  bg-blue-100 ease-in-out duration-500 text-xl ' : 'ease-in-out duration-500 fixed left-[-100%]'}>
           
            <h1 className='w-full text-3xl font-bold text-pink-600 m-4'>KhongisDeco</h1>
            <div className="px-5">
              <li className='py-4 border-b  border-gray-600 hover:scale-105  duration-300 hover:text-gray-500'>
                <a href="#Reviews" onClick={handleNav}>Reviews</a>
              </li>
              <li className='py-4 border-b border-gray-600 hover:scale-105 duration-300 hover:text-gray-500'>
              <a href="#Services" onClick={handleNav}>Services</a>
              </li>
              <li className='py-4 border-b border-gray-600 hover:scale-105 duration-300 hover:text-gray-500'>
                <a href="#About" onClick={handleNav}>About</a>
              </li>
              <li className='py-4 border-b border-gray-600 hover:scale-105 duration-300 hover:text-gray-500'>
                <a href="#Contact" onClick={handleNav}>Contact</a>
              </li>
              </div>
          </ul>
       
    </div>
  );
};

export default Navbar;
