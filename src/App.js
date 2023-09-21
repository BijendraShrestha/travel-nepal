import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './../path to node modules/../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Top from './Component/Top/Top';
import Navbar from './Component/Navbar/Navbar';
import HeroBanner from './Component/Hero-banner/HeroBanner';
import Search from './Component/Search/Search';
import Tours from './Component/Tours/Tours';
import Offers from './Component/Offers/Offers';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
      
        <Top /> 
        <Navbar />   
        <HeroBanner />
        <Search />  
        <Tours />
        <Offers />
        <Footer />
        
    </>
  );
}

export default App;
