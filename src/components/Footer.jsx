import React from 'react'
import { links1, links2, links3 } from '../constants/data'
import logo from '../assets/images/logo.png'
import { FacebookRounded, Instagram, LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
   <footer>
   <div className='grid md:grid-cols-4 grid-cols-2 md:gap-12 gap-8 px-12 md:px-0 md:py-20 py-8 md:mx-16 border-b border-orange-300 md:py-6'>
               
               <div className='flex items-center justify-center'>
                  <img src={logo} alt="logo" className='w-8 md:w-12 '/>
                  <span className='text-xl md:text-2xl mt-2 md:mt-3 ml-2 text-orange-500'>QuickBite</span>
               </div>
               
               <div>
               {links1.map((item,index)=>(
                    <div key={index} className='mb-2'>
                        <a href={item.feature} className='text-md md:text-md text-orange-500 hover:text-orange-700'>
                        {item.text}
                        </a>
                    </div>
                ))}
               </div>
               <div>
               {links2.map((item,index)=>(
                    <div key={index} className='mb-2'>
                        <a href={item.feature} className='text-md md:text-md text-orange-500 hover:text-orange-700 '>
                        {item.text}
                        </a>
                    </div>
                ))}
               </div>
               <div>
               {links3.map((item,index)=>(
                    <div key={index} className='mb-2'>
                        <a href={item.feature} className='text-md md:text-md text-orange-500 hover:text-orange-700'>
                        {item.text}
                        </a>
                    </div>
                ))}
               </div>
        </div>
        <div className='flex items-center justify-around'>

            <div className='text-orange-500 py-4'>
                <p>&copy; Lamia 2024, All Right Reserved. </p>
            </div>
            <div className='text-orange-500  flex items-center'>
              <FacebookRounded  className='mr-4 hover:text-orange-700  ' />
              <Instagram className='mr-4 hover:text-orange-700  ' />
              <LinkedIn className=' hover:text-orange-700  ' />
            </div>
        </div>
   </footer>    
    </>
  )
}

export default Footer
