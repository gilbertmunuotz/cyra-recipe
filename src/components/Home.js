import React from 'react';
import landing from '../Images/Landing PG (1).jpg'

function Home() {
    return (
        <div className='Home'>
            <div className="h-[90vh] overflow-hidden">
                <img src={landing} alt="landing page" className='object-cover' />
            </div>
        </div>
    )
}

export default Home;
