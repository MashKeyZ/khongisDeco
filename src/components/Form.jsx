import React from 'react'
import emailjs from 'emailjs-com'

const Form = () => {


    const sendEmail= (e)=>{
        
        e.preventDefault();
        emailjs.sendForm('service_9yax44k',
        'template_3smzssr',
        e.target,
        'D_3hC3fuSShkFcdk9').then(res=>{
            console.log(res);
            alert("Thanks for Contacting us\nWe will attend to it soon!!");
        }).catch(err=>console.log(err) );
      }
  return (
    <div>
             <form onSubmit={sendEmail} className='flex flex-col items-center justify-between w-[cover] trans rounded-md' method='POST' action='/'>
         
         <div className="name w-[80%]">
               <div>
               <label For="name" className=" text-center text-lg font-semibold bg-inherit ">
                   Name
               </label>
             </div>
             <input
               className='px-3 flex w-full rounded-md text-white bg-inherit border-b-2'
               type='text'
               placeholder=''
               name='name'
               id="name"
               required
             />
         </div>
         <div className="Phone w-[80%]">
             <div>
               <label For="phone" className=" text-center text-lg font-semibold bg-inherit">
                   Contact Number
               </label>
             </div>
             <input
               className='px-3 flex w-full rounded-md text-white bg-inherit border-b-2'
               type='text'
               placeholder=''
               name='phone'
               id="phone"
               required
             />
         </div>
         <div className="Email w-[80%]">
             <div>
               <label For="email" className=" text-center text-lg font-semibold bg-inherit">
                   Email Address.
               </label>
             </div>
             <input
               className='px-3 flex w-full rounded-md text-white bg-inherit border-b-2'
               type='email'
               placeholder='abc@example.com'
               name='email'
               id="email"
               required
             />
         </div>
         <div className="Message w-[80%]">
             <div>
               <label For="message" className=" text-center text-lg font-semibold bg-inherit">
                   Message
               </label>
             </div>
             <textarea
               className='px-3 flex w-full rounded-md text-white bg-inherit border-b-2 h-[8rem]'
               type='text'
               placeholder='Enter Your Message'
               name='message'
               id="message"
             />
         </div>
         <div className="sub">
             <button  name="submit" className='bg-pink-600 text-black rounded-md font-bold w-[200px] ml-4 my-6 px-6 py-3'>
               Submit
             </button>
         </div>
    
       </form>
    </div>
  )
}

export default Form