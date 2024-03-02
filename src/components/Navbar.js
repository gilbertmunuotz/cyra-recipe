import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Navbar() {

    const [nav, setNav] = useState(false)

    function handleNav() {
        setNav(!nav)
    }

    return (
        <div className='Navbar fixed w-full'>
            <div className="flex w-full justify-between items-center h-20 px-4 absolute backdrop-blur-md">
                <div className="text-3xl text-orange-500">Welcome</div>
                {/*NavBar By Default */}
                <ul className='hidden md:flex text-white'>
                    <button className='bg-orange-500 rounded-full px-5 py-2 m-10'>Login</button>
                </ul>

                <div className="md:hidden z-10 text-white" onClick={handleNav}>
                    {nav ? <FaTimes size={20} className='text-black' /> : <FaBars size={20} />}
                </div>

                {/*NavBar in sm Screens only */}
                <div className={`absolute top-0 left-0 w-full backdrop-blur-sm py-32 flex flex-row text-center transition duration-300 ${nav ? "" : "left-[-100%]"}`} onClick={handleNav}>
                    <ul className="mx-auto text-orange-500 uppercase w-full p-4">
                        <li className='border-b-2'>Login</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
