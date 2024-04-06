import React from 'react';
import Body from './components/Body';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuList from './components/MenuList';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Body />
        <MenuList />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
