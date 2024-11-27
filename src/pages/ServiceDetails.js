import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div className="service-details-page">
      <h2>Service Details for Service ID: {serviceId}</h2>
      {/* Fetch and display service details using serviceId */}
    </div>
  );
};

export default ServiceDetails;
