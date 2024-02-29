import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const ServiceVideoCard = ({ videoId, header, description }) => {
  return (
    <div className="service-video-card">
      <div className="service-video-content">
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
      <div className="rounded-video-container">
        <YouTube videoId={"0Huazog37Qs"} className="service-video" />
      </div>
    </div>
  );
};

export default ServiceVideoCard;
