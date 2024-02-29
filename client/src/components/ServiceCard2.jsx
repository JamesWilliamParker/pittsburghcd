// ServiceCard2.jsx
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard2 = ({ image, header, description }) => {
  return (
    <div className="service-card">
      <div className="service-content">
        <h3 className="service-header">{header}</h3>
        <p className="service-description">{description}</p>
        <Link
          to="/consultation"
          className="service-button"
          style={{ textDecoration: "none" }}
        >
          Free Design Consultation
        </Link>
      </div>
      <img src={image} alt="Service" className="service-image" />
    </div>
  );
};

export default ServiceCard2;
