import React from 'react';
import landing from '../Images/Landing PG (1).jpg';
import { FaMagnifyingGlass } from "react-icons/fa6";

function Home() {
    function HandleForm(event) {
        event.preventDefault();
    }

    return (
        <div className='Home'>
            <div className="h-[90vh] overflow-hidden">
                <img src={landing} alt="landing page" className='object-cover w-full h-full' />
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-orange-500 text-xl p-4">
                    <h1 className='py-3'>Burger | Pizza | Tacco | Tamales | Sandwich</h1>
                    <form className='flex justify-between items-center mx-auto w-full border p-1 rounded-lg text-white bg-black max-w-[700px]'>
                        <div className="rounded-lg">
                            <input type="text" className="bg-transparent focus:outline-none" placeholder="Search Here" onClick={HandleForm} />
                        </div>
                        <div className="p-2">
                            <button type="button"><FaMagnifyingGlass size={20} /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
