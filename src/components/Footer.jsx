import React from 'react';
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className='Footer'>
            <div className="bg-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-8 p-28">
                    <h3 className='text-center font-serif text-white'>
                        <p>Welcome</p>
                    </h3>

                    <div className="flex text-center space-x-4 text-white sm:text-center justify-center">
                        <GrInstagram size={"1.5rem"} />
                        <FaXTwitter size={"1.5rem"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
