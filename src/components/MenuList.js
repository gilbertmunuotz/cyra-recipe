import React from 'react';
import Hamburger from '../Images/HamBurger.jpg'
import Tamales from '../Images/Tamales.jpg'
import IndianRoti from '../Images/Indian roti-composition.jpg'

function MenuList() {
    return (
        <div className='MenuList'>
            <div className="bg-white my-4 sm:my-8">
                <div className="text">
                    <h1 className='text-black text-3xl font-semibold text-left ml-6 sm:text-center italic'>Menu List</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-8 my-6 cursor-pointer">
                    <section>
                        <img src={Tamales} alt="TamalesImage" className='h-60 rounded-md' />
                    </section>
                    <section>
                        <img src={Hamburger} alt="pizzaImage" className='h-60' />
                    </section>
                    <section>
                        <img src={IndianRoti} alt="IndianRotiImage" className='h-60 rounded-md' />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default MenuList