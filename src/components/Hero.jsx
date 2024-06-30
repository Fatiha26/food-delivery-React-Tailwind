import React from 'react';
import burger from "../assets/images/bg2.png";
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Hero = () => {
  return (
    <>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-screen items-center bg-orange-50'>
            <div className='mx-7 mt-28 md:ml-16 md:mt-12'>
              <h1 className='text-4xl md:text-5xl font-extrabold'>It&apos;s the food and groceries you love, delivered.</h1>
                <div className='relative my-6 w-auto md:w-full  py-2 px-4 md:px-0 md:py-3 shadow shadow-gray-700/25 rounded-xl flex items-center justify-center gap-2 md:gap-4'>
                    <input type="text" placeholder='Your street and street number'
                     className='border border-gray-300 outline-none w-full md:w-96 px-2 py-3 md:px-4 md:py-3 rounded-md 
                     font-normal text-xs md:text-sm' />
                    <div className='absolute right-24 md:right-40'>
                        <MyLocationIcon className='text-orange-500 mr-1'/>
                        <span className='text-orange-500 hidden md:inline-block'>Locate me</span>
                    </div>
                    <button className='w-1/5 bg-orange-500 text-white px-1 md:px-4 py-1 md:py-2 text-xs md:text-lg rounded-md
                    hover:bg-orange-700 transition delay-150'>Find food</button>
                </div>
            </div>

            <div>
              <img src={burger} alt="burger" className='w-full' />
            </div>
        </div>
    </>
  )
}

export default Hero
