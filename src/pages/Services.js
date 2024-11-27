import React from "react";

const Services = () => {
  // Sample service data (You can fetch this from an API)
  const services = [
    { id: 1, name: "Plumbing" },
    { id: 2, name: "Electrical Repair" },
    { id: 3, name: "House Cleaning" },
  ];

  return (
    <div className="services-page">
      <h2>Available Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <a href={`/services/${service.id}`}>{service.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
