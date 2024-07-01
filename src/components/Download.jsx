import React from 'react';
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import qr from "../assets/images/qr.png";
import app from "../assets/images/app.png";

const Download = () => {
  return (
    <>
    <div className='md:mt-24 mt-8'>
    <h1 className='md:ml-16 md:mb-6 md:text-4xl ml-5 text-xl mb-4 font-bold'>
    Put us in your pocket
    </h1>
    <div className='grid md:grid-cols-2 gap-12 bg-orange-500 mx-16 rounded-3xl'>
        <div className='text-white md:px-8 md:py-16 p-8'>
            <h3 className='font-semibold md:text-2xl text-xl md:mb-6 mb-4'>Download the food and groceries you love</h3>
            <div className='md:flex items-center gap-4'>
              <img src={qr} alt="qr" className='w-28 rounded-lg md:ml-0 ml-12' />
              <p className='text-justify md:text-lg md:mb-6 mb-8 mt-4 leading-5'>It&apos;s all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
            </div>
            <div className='flex items-center justify-around w-1/3 md:ml-0 ml-8'>
              <img src={google} alt="google" />
              <img src={apple} alt="apple" />
            </div>
        </div>
        <div className='md:-mt-72 md:pt-32 -mt-24 -pt-32'>
           <img src={app} alt="app" className='w-full' />           
        </div>
    </div>
    </div>

    </>
  )
}

export default Download
