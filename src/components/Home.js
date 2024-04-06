import React from 'react';
import landing from '../Images/Landing PG (1).jpg';

function Home() {
    return (
        <div className='Home relative'>
            <div className="h-[90vh] overflow-hidden relative">
                <img src={landing} alt="landing page" className='object-cover w-full h-full' />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-orange-500 text-4xl p-4">
                    <h1>Burger | Pizza | Tacco | Tamales | Sandwich</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
