import React from 'react';
import {data} from "../constants/data"

const Cities = () => {
  return (
    <>
         <div className='mt-90 md:mt-80 '>
         <h1 className='md:ml-16 md:mb-6 md:text-4xl ml-5 text-xl mb-4 font-bold'>
         Find us in these cities and many more!
         </h1>
          <div className='grid md:grid-cols-4 gap-8'>
             {data.map((text, index)=>(
                <div key={index}>
                   <img src={text.image} alt="city image" />
                   <h3>{text.city}</h3>
                </div>
             ))}
             
          </div>
         </div>
    </>
  )
}

export default Cities
