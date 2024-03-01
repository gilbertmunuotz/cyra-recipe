import React from 'react';
import Vector from "../Images/5004254.jpg";

function Home() {
    return (
        <div className='Home'>
            <div className="bg-orange-500 mt-8">
                <div className="mt-8">
                    <div className="grid grid-cols-2 gap-4 sm:block">
                        <div className="grid1 mt-8">
                            <img src={Vector} alt="simple Img vector" className='rounded-lg' />
                        </div>

                        <div className="grid2 mt-8">
                            <h1 className='text-5xl text-center font-myfont'>Karibu Nyumbani!</h1>
                            <p className='font-serif sm:text-base first-letter:italic first-letter:text-3xl m-3'>We're thrilled to welcome you to Kasiano, your haven for delicious authentic Tanzanian cuisine and warm hospitality in the heart of Arusha. Whether you're a seasoned explorer or a curious newcomer, we invite you to experience the vibrant flavors and rich culinary traditions of Tanzania at our table.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
