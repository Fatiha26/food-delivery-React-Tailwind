import React from 'react';
import chef from "../assets/images/chef2.png";

const PrepareList = () => {
  return (
    <div className='md:mt-24 mt-8'>
       <h1 className='md:ml-16 md:mb-6 md:text-4xl ml-5 text-xl mb-4 font-bold'>You prepare the food, we handle the rest</h1>
       <div className='relative'>
          <img src={chef} alt="chef" className='w-full h-1/2'  />
          <div className='rounded-xl shadow-lg shadow-gray-600 w-2/5 absolute top-60 left-24 bg-white p-6'>
             <h3 className='font-semibold text-2xl mb-8'>List your restaurant or shop on <span className='text-orange-500'>QuickBite</span></h3>
             <p className='text-justify text-lg mb-6'>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                <br/><br/>It&apos;s simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                <br/><br/>Interested? Let&apos;s start our partnership today!</p>
             <button className='w-32 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-700 transition delay-150'>Get Started</button>

          </div>
       </div>
      
    </div>
  )
}

export default PrepareList
