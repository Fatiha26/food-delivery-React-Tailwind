import React from 'react';
import { useParams } from 'react-router-dom';
import bowl from "../assets/images/bg3.png";
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Cityhero = () => {
  const { cityName } = useParams();

  return (
   <>
    <div className='flex justify-between gap-60 h-4/3 pt-12 items-center bg-orange-50 px-16'>
            <div className='w-full'>
              <h1 className='text-4xl md:text-4xl font-extrabold w-full'>Food Delivery from Barishal&apos;s Best Restaurants</h1>
            </div>
            <div className='w-1/2'>
              <img src={bowl} alt="burger"  className='w-full'/>
            </div>
    </div>
   </>
  );
};

export default Cityhero;
