import React from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from "../constants/data";

const Cities = () => {
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    navigate(`/city/${city}`);
  };

  return (
    <div className='mt-96 pt-28 md:pt-0 md:mt-80 '>
      <h1 className='md:ml-16 md:mb-6 md:text-4xl ml-5 text-xl mb-4 font-bold'>
        Find us in these cities and many more!
      </h1>
      <div className='grid md:grid-cols-4 gap-8 px-16 py-4'>
        {data.map((text, index) => (
          <div
            key={index}
            className='relative cursor-pointer'
            onClick={() => handleCityClick(text.city)}
          >
            <img
              src={text.image}
              alt="city image"
              className='rounded-2xl h-52 w-full hover:scale-105 transition delay-100'
            />
            <h3
              className='py-2 px-4 bg-white rounded-lg absolute md:bottom-2 md:left-2 bottom-4 left-2 font-semibold md:text-md'
            >
              {text.city}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
