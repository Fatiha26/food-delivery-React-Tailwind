import React from 'react';
import { useParams } from 'react-router-dom';
import bowl from "../assets/images/bg3.png";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { food } from '../constants/data';

const Restaurents = () => {
  const { cityName } = useParams();

  return (
   <>
   <div className='-mt-16 pt-28 md:pt-0 md:mt-24 md:mb-16 mb-9'>
      <h1 className='md:ml-16 md:mb-6 md:text-4xl ml-5 text-xl mb-4 font-bold'>
      All restaurants
      </h1>
      <div className='grid md:grid-cols-3 gap-8 px-16 py-4 '>
       {food.map((item,index)=>(
        <div key={index} className='rounded-xl shadow-lg shadow-gray-400 hover:cursor-pointer hover:scale-105 transition delay-75'>
            <div>
                <img src={item.image} alt="" className='rounded-xl'/>
            </div>
          <div className='p-6'>
          <div className='flex justify-between items-center mb-2'>
                <h2 className='text-xl font-bold'>{item.title}</h2>
                <div className='text-orange-500 text-lg flex items-center'>
                <StarIcon/>{item.rating}<span></span>
               </div>
            </div>
            <p className='text-sm text-gray-600 mb-1'>Fast Food</p>
            <LocalShippingIcon className='text-orange-500 mr-1' /><span className='text-sm text-orange-500 '>Free</span>
          </div>
        </div>

       ))}
      </div>
     </div> 
   </>
  );
};

export default Restaurents;
