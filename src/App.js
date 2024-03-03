import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Body from './components/Body'; // Assuming Body is required
import Footer from './components/Footer';
import MenuList from './components/MenuList';

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
