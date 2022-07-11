import React from 'react';
import {
  FaFacebookSquare,

  FaInstagram,
  FaTwitterSquare,
  FaPhone,
  FaMailchimp,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4  gap-8 text-gray-300 md:px-[8rem] sm:px-[1rem]'>
      <div className="sm:flex justify-evenly">
        <div className="max-w-[20rem]">
          <h1 className='w-full text-3xl font-bold text-pink-600'>CONTUCT US.</h1>
          <p className='py-4'>A good event brings about friendship and business, which are priceless rewards, and careful planning is what makes it successful.</p>
        </div>
      
      <div className='flex justify-evenly mt-6'>
      <div>
        <h6 className='font-medium text-gray-400'>Contact Details</h6>
        <ul>
            <li className='py-2 text-sm flex'><FaPhone size={30}/><p className='py-2 px-3'>079 3966 488</p></li>
            <li className='py-2 text-sm flex'><FaWhatsapp size={30}/> <p className='py-2 px-3'>083 9482 738</p></li>
            <li className='py-2 text-sm flex'><FaMailchimp size={30}/> <a className='py-2 px-3' href='mailto:khongi.deco.gmail.com'>khongi.deco.gmail.com</a></li>
          
        </ul>
    </div>
  
    <div>
        <h6 className='font-medium text-gray-400'>Connect With Us</h6>
        <ul>
            <li className='py-2 text-sm flex'><a className='flex' href='https://www.facebook.com/'> <FaFacebookSquare size={30} /><p className='py-2 px-3'> Facebook</p></a></li>
            <li className='py-2 text-sm flex'><a className="flex"href='https://www.instagram.com/'> <FaInstagram size={30} /> <p className='py-2 px-3'>Instagram</p></a></li>
            <li className='py-2 text-sm flex'><a className="flex" href='https://www.twitter.com/'> <FaTwitterSquare size={30} /><p className='py-2 px-3'>Twitter</p></a></li>
        </ul>
    </div>
  
      </div></div>
    </div>
  );
};

export default Footer;
