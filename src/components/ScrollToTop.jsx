import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Circle from "/public/svg/Circle";
import Arrow from "/public/svg/Arrow";

function ScrollToTop() {
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    calculateProgress();
    // clean up code
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  const calculateProgress = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let progress = Math.ceil((winScroll / height) * 100);
    setProgress(progress);
  };

  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className={`${
        offset < 400 ? "opacity-0 cursor-default" : "opacity-100"
      } cursor-pointer transition-all duration-500 
      fixed bottom-6 right-6 rotate-0 
      lg:bottom-auto lg:right-auto lg:top-1/2 lg:-left-8 lg:-translate-y-1/2 lg:-rotate-90 lg:flex lg:flex-center-center`}
    >
      {/* desktop version */}
      <div className="hidden lg:contents">
        <h3 className=" font-primary">Scroll To Top</h3>
        {/* line */}
        <div className="w-20 h-1 ml-1 bg-white bg-opacity-5">
          {/* progress */}
          <span
            className={`block bg-gradient-to-r from-fuchsia-600 to-sky-400 h-full glow`}
            style={{ width: `${progress}%` }}
          ></span>
        </div>
      </div>

      {/* mobile version */}
      <div className="contents relative w-8 h-8 lg:hidden opacity-90 ">
        <Circle progress={progress} />
        <Arrow
          styles={`absolute top-1/2 lef-1/2 p-4 fill-[rgba(255,255,255,0.8)]  -translate-y-1/2 rotate-180`}
        />
      </div>
    </div>
  );
}

export default ScrollToTop;
