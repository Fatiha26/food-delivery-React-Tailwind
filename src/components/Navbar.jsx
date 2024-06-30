import React from 'react';
import logo from "../assets/images/logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between'>
          <div>
            <img src={logo} alt="food" className=''/>
            <span>QuickBite</span>
          </div>
          <div>
             <div>
                 <PersonIcon />
                 <span>lamia</span>
                 <KeyboardArrowDownIcon />
             </div>
             <div>
                 <LanguageIcon />
                 <span>lamia</span>
                 <KeyboardArrowDownIcon />
             </div>
             <div>
                 <ShoppingCartIcon />
             </div>
          </div>
             
        </div>
    </>
  )
}

export default Navbar
