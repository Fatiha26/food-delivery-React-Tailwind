import React from 'react';
import burger from "../assets/images/bg2.png";
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Hero = () => {
  return (
    <>
        <div>
            <div>
              <h1>It&apos;s the food and groceries you love, delivered</h1>
              <div>
                <div>
                    <input type="text" placeholder='Your street and street number'/>
                    <div>
                        <MyLocationIcon />
                        <span>Locate me</span>
                    </div>
                </div>
                <button>Find food</button>
              </div>

            </div>
            <div>
              <img src={burger} alt="burger" />

            </div>
        </div>
    </>
  )
}

export default Hero
