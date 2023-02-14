import React from "react";
import ScrollDown from "../ScrollDown";
import Button from "../Button";

function Home({ data }) {
  return (
    <main id="home" className="relative w-full h-screen  overflow-hidden">
      <div className="relative lg:flex-center-between flex-row-reverse h-full lg:px-28">
        <div className=" w-full h-full ">
          <div className=" relative h-full ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-sky-400 to-fuchsia-600 animate-zero-to-hero w-2/5 glow"></div>
            <div className="absolute bottom-14 lg:bottom-0 h-1/2 w-full lg:h-4/5">
              <img
                src={data.img}
                alt=""
                className="animate-[firstAppearance_.5s_ease-out_1_forwards_.5s] opacity-0 h-full w-auto mx-auto lg:object-contain lg:object-bottom"
              />
            </div>
            <div className="absolute bottom-20 lg:bottom-0 w-full bg-gradient-to-t from-slate-900 h-40"></div>
            <div className="lg:hidden absolute bottom-0 w-full h-20 bg-slate-900"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full  lg:relative lg:top-auto lg:h-auto">
          <div className=" relative h-full pt-32 lg:pt-0">
            <div className="text-center  animate-[firstAppearance_.5s_ease-out_1_forwards_.2s] opacity-0 lg:text-left">
              <h2 className="text-4xl md:text-5xl pb-2 md:mb-4">
                Hi, Im <span className="lg:text-gradient">{data.name}</span>
              </h2>
              <h2 className="text-4xl md:text-5xl mb-4">{data.whatIdo}</h2>
              <p>{data.breif}</p>
            </div>
            <Button
              onClick={() => {
                document.getElementById("portfolio").scrollIntoView();
              }}
              type={"submit"}
              text="See Portfolio"
              status="primary"
              styles="px-8 py-2 mt-16 text-xl opacity-0 hidden animate-[firstAppearance_.5s_ease-out_1_forwards_.4s] lg:block "
            />
          </div>
        </div>
      </div>
      <ScrollDown
        styles={
          " w-16 cursor-pointer p-4 h-auto absolute bottom-16 left-1/2  fill-white -translate-x-1/2"
        }
        href="#about"
      />
    </main>
  );
}

export default Home;
