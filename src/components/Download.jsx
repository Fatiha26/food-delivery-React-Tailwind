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
    <div>
        <div>
            <h3>Download the food and groceries you love</h3>
            <div>
              <img src={qr} alt="qr" />
              <p>It&apos;s all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
            </div>
            <div>
              <img src={google} alt="google" />
              <img src={apple} alt="apple" />
            </div>
        </div>
        <div>
           <img src={app} alt="app" />           
        </div>
    </div>
    </div>

    </>
  )
}

export default Download
