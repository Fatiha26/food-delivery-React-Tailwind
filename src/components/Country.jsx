import React from 'react'
import { country } from '../constants/data'

const Country = () => {
  return (
    <>
        <div className='flex items-center justify-center md:gap-8 md:mx-16 mt-10 md:mt-20 border-t border-b border-orange-300 md:py-6 text-center mb-4'>
                {country.map((names,index)=>(
                    <div key={index}>
                        <a href="#" className='text-xs md:text-lg text-gray-500'>{names.cname}</a><span className='md:ml-6 ml-0 text-gray-500'>|</span>
                    </div>
                ))}
        </div>
    </>
  )
}

export default Country
