import React from 'react';
import logo from "../assets/images/logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-center md:justify-between  md:px-16 py-5 md:py-3 border-b-2 border-red-100'>
          <div className='flex items-center justify-center'>
            <img src={logo} alt="food" className='w-8 md:w-12 '/>
            <span className='text-xl md:text-2xl mt-2 md:mt-3 ml-2 text-orange-500'>QuickBite</span>
          </div>
          <div className='flex items-center justify-around'>
             <div className='px-4'>
                 <PersonIcon />
                 <span className='px-0 md:px-1 text-md text-gray-500'>Lamia</span>
                 <KeyboardArrowDownIcon className='text-orange-500' />
             </div>
             <div className='px-4'>
                 <LanguageIcon />
                 <span className='px-0 md:px-1'>EN</span>
                 <KeyboardArrowDownIcon className='text-orange-500' />
             </div>
             <div className='px-0 md:px-1 text-orange-500'>
                 <ShoppingCartIcon />
             </div>
          </div>
             
        </div>
    </>
  )
}

export default Navbar
