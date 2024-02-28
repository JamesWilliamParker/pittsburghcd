import React from "react";
import ServiceVideoCard from "../components/ServiceVideoCard";
import BulletCard from "../components/BulletCard";
import Carousel_Gallery from "../components/Carousel_Gallery";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      {/* The ServiceVideoCard */}
      <ServiceVideoCard
        videoId="0Huazog37Qs"
        header="Discover the beauty of a perfectly organized home."
        description="The perfect combination of Quality & Beauty, tailored to your style and budget!"
      />

      {/* The BulletCard */}
      <BulletCard
        leftHeader="Meet & Greet In-Home Consultation"
        centerHeader="Custom 3D Design & Visuals"
        rightHeader="Professional Installation by Our Team"
        fontSize="25px"
        color="#333333"
        marginLeft="360px"
        marginRight="360px"
        marginTop="100px"
        lineColor="#9f6f81" // Color of the lines
      />

      {/* The Carousel */}
      <div style={{ marginTop: "150px" }}>
        <Carousel_Gallery />
      </div>

      {/* The Button */}
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Link
          to="/consultation"
          className="service-button"
          style={{ textDecoration: "none" }}
        >
          Free Design Consultation
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
