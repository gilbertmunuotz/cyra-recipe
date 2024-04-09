import React from 'react';
import vector from '../Images/5004254.jpg';
import landing from '../Images/Landing PG (1).jpg';

function Body() {
  return (
    <div className='Body'>
      <div className='Home relative'>
        <div className="h-[90vh] overflow-hidden relative">
          <img src={landing} alt="landing page" className='object-cover w-full h-full' />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-orange-500 text-4xl p-4">
            <h1>Burger | Pizza | Tacco | Tamales | Sandwich</h1>
          </div>
        </div>
      </div>


      <div className="bg-orange-500">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="self-center my-12">
            <img src={vector} alt="vectorimage" className="p-6 rounded-full rounded-r-2xl" />
          </div>
          <div className="self-center">
            <h1 className='text-center text-4xl'>Karibu Nyumbani!</h1>
            <p className='p-6'>We're thrilled to welcome you to Grand Melia, your haven for delicious authentic Tanzanian cuisine and warm hospitality in the heart of Arusha. Whether you're a seasoned explorer or a curious newcomer, we invite you to experience the vibrant flavors and rich culinary traditions of Tanzania at our table.</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Body;
