import React from 'react';
import chef from "../assets/images/chef.jpg";

const PrepareList = () => {
  return (
    <div className='md:mt-24 mt-8'>
       <h1 className='md:ml-16 md:mb-6 md:text-4xl ml-5 text-xl mb-4 font-bold'>You prepare the food, we handle the rest</h1>
       <div>
          <img src={chef} alt="chef" className='w-full h-1/2'  />
          <div className='bg-gray-400'>
             <h3>List your restaurant or shop on foodpanda</h3>
             <p>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                <br/>It&apos;s simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                <br/>Interested? Let&apos;s start our partnership today!</p>
             <button>Get Started</button>

          </div>
       </div>
      
    </div>
  )
}

export default PrepareList
