import React from "react";
import { Link } from "react-router-dom";
import "../pages/ServiceVideoCard.css"; // Import the CSS file for the component

const ServiceVideoCard = ({ video, header, description }) => {
  return (
    <div className="service-video-card">
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
      <video src={video} className="service-video" controls />
    </div>
  );
};

export default ServiceVideoCard;
