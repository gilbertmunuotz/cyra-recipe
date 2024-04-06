import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    const handleNav = () => {
        setNavOpen(prevNavOpen => !prevNavOpen);
    };

    return (
        <div className='Navbar fixed top-0 w-full z-10'>
            <div className="flex justify-between items-center h-16 px-4 backdrop-blur-md">
                <div className="text-3xl text-orange-500">Welcome</div>

                {/* NavBar By Default */}
                <ul className='hidden md:flex text-white'>
                    <button className='bg-orange-500 rounded-full px-5 py-2 m-10'>Login</button>
                </ul>

                <div className="md:hidden text-white" onClick={handleNav}>
                    {navOpen ? <FaTimes size={20} className='text-orange-500' /> : <FaBars size={20} className='text-orange-500' />}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed top-16 left-0 w-full h-full bg-black bg-opacity-75 z-50 transition-opacity ${navOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleNav}>
                <div className="flex flex-col justify-center items-center h-full">
                    <button className='text-white rounded-md bg-orange-500 py-2 px-4'>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
