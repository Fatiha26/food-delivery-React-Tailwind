import React from 'react';
import { useParams } from 'react-router-dom';
import bowl from "../assets/images/bg3.png";
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Cityhero = () => {
  const { cityName } = useParams();

  return (
   <>
    <div className='flex justify-between md:gap-60 gap-3 h-80 md:h-96 pt-12 md:pt-40  items-center bg-orange-50 px-16'>
            <div className='w-full'>
              <h1 className='text-lg md:text-4xl font-extrabold w-full md:-mt-12'>Food Delivery from Barishal&apos;s Best Restaurants</h1>
            </div>
            <div className='md:w-1/2 w-full'>
              <img src={bowl} alt="burger"  className='w-full'/>
            </div>
    </div>
   </>
  );
};

export default Cityhero;
