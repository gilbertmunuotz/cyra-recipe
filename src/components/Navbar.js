import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import LandingPG from '../Images/Landing PG (1).jpg';

function Navbar() {
    const [nav, setNav] = useState(true);

    function handleNav() {
        setNav(!nav);
    }

    return (
        <div className='Navbar'>
            <div className="bg-current">
                <div className="flex justify-between items-center h-16 mx-auto px-4 text-white">
                    <h1 className='w-full text-3xl font-bold text-orange-500'>Welcome</h1>
                    <ul className='hidden md:flex'>
                        <li className='p-4'>Home</li>
                        <li className='p-4'>Login</li>
                    </ul>
                    <div className="block md:hidden" onClick={handleNav}>
                        {!nav ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </div>
                </div>
            </div>
            <div className={!nav ? 'fixed top-1/4 left-1/3 z-50' : 'hidden'}> {/* Add z-index */}
                <ul className='uppercase text-white font-bold'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Login</li>
                </ul>
            </div>
            <section className="">
                <div className="img-container relative">
                    <img src={LandingPG} alt="landing page" className="bg-contain w-full h-[80vh]" />
                    <h2 className="text-overlay absolute left-1/2 top-96 -translate-x-1/2 -translate-y-1/2 text-orange-500">
                        love | love | love | love | love
                    </h2>
                </div>
            </section>
        </div>
    );
}

export default Navbar;
