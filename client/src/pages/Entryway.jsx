import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import service_image_6 from "../assets/service_image_6.jpg";


const Entryway = () => {
  return (
    <div>
      <Banner
        text="Transform your entryway into an inviting space with our stylish solutions."
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={service_image_6}
          header="Mudroom"
          description="Great combinations of style & storage."
        />

        <Banner
          text="We offer customization options to tailor our products to your entryway's unique dimensions."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        
      </div>
    </div>
  );
};

export default Entryway;
