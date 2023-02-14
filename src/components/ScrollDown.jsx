import React from "react";
import Arrow from '/public/svg/Arrow'
import Mouse from '/public/svg/Mouse'

function ScrollDown({ styles, href }) {
  return (
    <a className={`${styles}`} href={href}>
      
      <Arrow styles={`lg:hidden animate-bounce`}/>
      <Mouse styles={`hidden lg:block`} />
      
    </a>
  );
}

export default ScrollDown;
