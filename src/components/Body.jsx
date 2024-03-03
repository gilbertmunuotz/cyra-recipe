import React from 'react';
import vector from '../Images/5004254.jpg';

function Body() {
  return (
    <div className='Body'>
      <div className="bg-orange-500">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="self-center">
            <img src={vector} alt="vectorimage" className='p-6 rounded-xl' />
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
