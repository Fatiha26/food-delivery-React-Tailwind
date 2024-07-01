import React from 'react';
import { useParams } from 'react-router-dom';
import bowl from "../assets/images/bg3.png";
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Restaurents = () => {
  const { cityName } = useParams();

  return (
   <>
   <div className='mt-12 pt-28 md:pt-0 md:mt-12 '>
      <h1 className='md:ml-16 md:mb-6 md:text-4xl ml-5 text-xl mb-4 font-bold'>
      All restaurants
      </h1>
      <div className='grid md:grid-cols-4 gap-8 px-16 py-4'>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h3></h3>
                <span></span>
            </div>
            <p></p>
            <p></p>
        </div>

      </div>
     </div> 
   </>
  );
};

export default Restaurents;
