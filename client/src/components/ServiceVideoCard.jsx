import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import "../pages/ServiceVideoCard.css"; // Import the CSS file for the component

const ServiceVideoCard = ({ videoId, header, description }) => {
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
      <YouTube videoId={"0Huazog37Qs"} />
    </div>
  );
};

export default ServiceVideoCard;
