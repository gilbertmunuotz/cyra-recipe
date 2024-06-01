import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='Footer'>
            <div className="bg-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 p-28">
                    <h3 className='text-center font-serif text-white text-4xl'>
                        <p>Welcome</p>
                    </h3>

                    <div className="flex text-center space-x-6 text-white sm:text-center justify-center">
                        <Link to={`https://github.com/gilbertmunuotz`} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={"2.5rem"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;