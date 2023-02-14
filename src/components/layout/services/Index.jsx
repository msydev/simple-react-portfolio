import React from "react";
import Service from "./Service";
function Services({data}) {

  return (
    <section id="services" className="section padding">
      <h1 className="mb-8">Services</h1>
      <div className="md:flex justify-center md:flex-wrap md:gap-6">
        {data.map((service) => {
          return (
            <Service service={service} allServices={data.length} key={service.id}/>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
