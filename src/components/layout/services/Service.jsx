import React from "react";

function Service({ service: { id, name, desc }, allServices }) {
  return (
    <div
      key={id}
      className={` bg-white bg-opacity-5 p-4 transition-all duration-500  mb-4 rounded md:m-0 md:w-2/5 ${
        allServices % 2 !== 0 && allServices == index + 1 ? "grow-0" : "grow"
      }
      `}
    >
      <h2 className="text-lg mb-1">{name}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Service;
