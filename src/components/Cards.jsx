import React from 'react';
import Single from '../assets/wed2.png'
import Double from '../assets/wed3.jpg'
import Triple from '../assets/couple1.jpg'

const Cards = () => {
  return (
    <div id="Reviews" className='w-full py-[10rem]  bg-white  md:px-[8rem] sm:px-[1rem] px-2'>
        <div className='flex flex-col justify-center mb-6 text-center'>
        <p className='text-pink-600 font-bold text-2lg '>Reviews!!</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-slate-900'>This is what some of our clients says about our service</h1>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-[500px] mx-auto mt-[-3rem] bg-white rounded-[100%]' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-pink-700'>Mr & Mrs Baloyi</h2>
              <p className='text-center text-4xl font-bold text-slate-900'>Wedding</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 '>Don't have time to master photoshop, premiere pro for your content creation?Tired of using softwares like Canva with the same-old limited features?Need an easy-to-use software to convert your creative thoughts into fantastic content?SIMPLIFIED is the answer.</p> 
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-[500px] mx-auto mt-[-3rem] bg-white rounded-[100%]' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-pink-700'>Mr & Mrs Ngobeni</h2>
              <p className='text-center text-4xl font-bold text-slate-900'>Wedding</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 '>Don't have time to master photoshop, premiere pro for your content creation?Tired of using softwares like Canva with the same-old limited features?Need an easy-to-use software to convert your creative thoughts into fantastic content?SIMPLIFIED is the answer.</p> 
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-[500px] mx-auto mt-[-3rem] bg-white rounded-[100%]' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-pink-700'>Mr & Mrs Maluleke</h2>
              <p className='text-center text-4xl font-bold text-slate-900'>Wedding</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 '>Don't have time to master photoshop, premiere pro for your content creation?Tired of using softwares like Canva with the same-old limited features?Need an easy-to-use software to convert your creative thoughts into fantastic content?SIMPLIFIED is the answer.</p> 
              </div>
          </div>
      
    
      </div>
    </div>
  );
};

export default Cards;
