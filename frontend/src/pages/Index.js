import React from 'react'
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuList from '../components/MenuList';

function Index() {
    return (
        <div className='Index'>
            <Navbar />
            <Body />
            <MenuList />
            <Footer />
        </div>
    )
}

export default Index