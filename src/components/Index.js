import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import Home from './Home';
import MenuList from './MenuList';

function Index() {
    return (
        <div className='Index'>
            <Navbar />
            <Home />
            <Body />
            <MenuList />
            <Footer />
        </div>
    )
}

export default Index