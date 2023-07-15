import React, { useState, useRef, useEffect } from "react";
import Logo from "/public/svg/logo";
import SocialMedia from './SocialMedia'

function NavBar({data}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);
  
  
  const navigate = ()=>{
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  }
  
  const openMenu = ()=>{
    setIsMenuOpen((prevCheck) => !prevCheck);
    document.body.classList.toggle('overflow-hidden'); // to prevent scrolling when mobile menue is open
    console.log('test*');
  }

  
  return (
    <div id="navbar" className="z-40 fixed top-0 left-0 w-full  bg-gradient-to-b from-slate-900 flex-center-center ">
      {/* container */}
      <div className={`padding h-16 flex-center-between w-full relative ${offset > 100? 'backdrop-blur':''}`} >
        <div className="w-8 h-8"><Logo/></div>

        {/* burger  */}
        <div
          className={`relative h-4 w-6 z-50 cursor-pointer md:hidden`}
          onClick={openMenu}
        >
          <div
            className={`absolute left-1/2 -translate-x-1/2 duration-75 h-[2px] w-full bg-white rounded-lg  
                ${
                  isMenuOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-0"
                } `}
          ></div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 duration-75 h-[2px] w-full bg-white rounded-lg ${
              isMenuOpen
                ? "bottom-1/2 translate-y-1/2 -rotate-45"
                : "bottom-0"
            } `}
          ></div>
        </div>
        {/* nav */}
        <nav
          className={`w-full pt-16 bg-[#121212] absolute top-0 right-0 h-screen transition-all duration-700 z-30
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            md:relative md:h-auto md:transform-none md:p-0 md:bg-transparent md:w-auto md:top-auto md:right-auto
            `}
        >
          <ul className="flex-center-between gap-8 md:gap-12 flex-col md:flex-row">
            <li >
              <a href="#home" onClick={navigate}>Home</a>
            </li>
            <li >
              <a href="#about" onClick={navigate}>About</a>
            </li>
            <li>
              <a href="#portfolio" onClick={navigate}>Portifolio</a>
            </li>
            <li>
              <a href="#services" onClick={navigate}>Services</a>
            </li>
            <li>
              <a href="#contact" onClick={navigate}>Contact</a>
            </li>
          </ul>
          <SocialMedia 
          styles={'flex-center-center gap-8 py-4 mt-8 md:hidden'}
          data={data.socialMedia}
          />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
