import React from 'react'
import eat from "../assets/images/meet.png"
const Office = () => {
  return (
   <>
    <div className='md:mt-24 mt-8'>
       <h1 className='md:ml-16 md:mb-6 md:text-4xl ml-5 text-xl mb-4 font-bold'>You prepare the food, we handle the rest</h1>
       <div className='relative'>
          <img src={eat} alt="chef" className='w-full h-1/2'  />
          <div className='rounded-xl shadow-lg shadow-gray-400 w-full md:w-2/5 absolute md:top-72 md:left-24 bg-white md:p-6 p-8'>
             <h3 className='font-semibold md:text-2xl text-xl md:mb-8 mb-4'><span className='text-orange-500'>QuickBite</span> for business</h3>
             <p className='text-justify md:text-lg md:mb-6 mb-8'>Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>
             <button className='w-32 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-700 transition delay-150'>Get Started</button>

          </div>
       </div>
      
    </div>
   </>
  )
}

export default Office
