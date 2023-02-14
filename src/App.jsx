import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import Portfolio from './components/layout/portfolio'
import Services from './components/layout/services'
import Contact from './components/layout/contact' 
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import ScrollToTop from './components/ScrollToTop'
import data from './data'
function App() {
  
  return (
    
    <div className="App bg-slate-900 relative ">
        <NavBar data={data} />
        <Home data={data.home} />
        <About data={data} />
        <Portfolio data={data.portfolio}/>
        <Services data={data.services} />
        <Contact data={data.contact} />
        <Footer />
        <SocialMedia 
        styles={'hidden lg:flex lg:flex-col lg:gap-12 lg:fixed lg:top-1/2 lg:right-12 lg:-translate-y-1/2'}
        data={data.socialMedia}
        />
        <ScrollToTop />
    </div>
        
    
  );
}

export default App;
