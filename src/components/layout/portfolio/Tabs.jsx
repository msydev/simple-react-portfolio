import React, { useState } from "react";
import Button from "../../Button";

function Tabs({ categories, filterProjects }) {

  const [currentCategory, setCurrentCategory] = useState("all");


  const handleClick = (category)=>{
    setCurrentCategory(category);
    filterProjects(category);
  }
  return (
    <section className="flex-center-start py-2 rounded overflow-x-auto overflow-y-hidden scroll-shadow md:justify-center ">
      <div className="flex-center-center gap-2 px-2">
        {categories.map((category) => {
          return (
            <Button
              text={category}
              styles={'py-2 px-4 block whitespace-nowrap'}
              status={category === currentCategory?'active':'tertiary'}
              key={category}
              onClick={()=>handleClick(category)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Tabs;
