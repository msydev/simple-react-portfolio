import React from "react";
import SocialMedia from "../../SocialMedia";
import Button from "../../Button";
function Index({data}) {
  
  return (
    <div id="about" className="section padding lg:flex items-start justify-center lg:gap-10">
      <div   className={`overflow-hidden h-80 w-80 transition-all duration-500 lg:w-auto lg:h-auto lg:flex-1 rounded-full lg:rounded-none mx-auto `}>
        <img src={data.about.img} alt="" />
      </div>
      <div className={` text-center py-4 transition-all duration-500 lg:text-left lg:py-0 lg:flex-1`}>
        <h1  className={`transition-all duration-500 lg:text-left `}>About Me</h1>
        <p
        
        className={`transition-all duration-500 `}
        >
          {data.about.aboutMe}
        </p>
        <Button
          text={"Download CV"}
          type='submit'
          styles={"py-2 px-8 mt-8"}
          status="primary"
          onClick={()=>window.open(data.about.cv)}
        />
      </div>
      <SocialMedia 
      styles={"flex-center-center gap-8 py-4 lg:hidden"}
      data={data.socialMedia}
       />
    </div>
  );
}

export default Index;
