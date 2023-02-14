import React from "react";
import ExternalLink from "/public/svg/ExternalLink";
function Project({ project: { img, desc, title, category }, styles, onClick }) {
  return (
    <div
      className={`rounded overflow-hidden group hover:cursor-pointer mb-4 animate-first-appearance md:w-[30%] md:gap-6 md:m-0 ${styles}`}
      onClick={onClick}
    >
      {/* image-container */}
      <div className=" aspect-4/3 overflow-hidden ">
        <img
          src={img}
          alt={desc}
          className="group-hover:scale-110 transition-all duration-700 ease-out w-full h-full object-cover"
        />
      </div>
      {/* text-container */}
      <div className="px-4 py-2 transition-all absolute bottom-0 flex-center-between bg-slate-800 w-full translate-y-full group-hover:translate-y-0 ">
        <div>
          <p>{category}</p>
          <h2 className="text-lg ">{title}</h2>
        </div>
        <ExternalLink
          styles={
            "fill-white transition-all duration-500 -translate-x-4  group-hover:translate-x-0"
          }
        />
      </div>
    </div>
  );
}

export default Project;
