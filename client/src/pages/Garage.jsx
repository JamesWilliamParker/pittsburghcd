import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import garageImage1 from "../assets/test_reach-in_closet.jpg";
import garageImage2 from "../assets/test_reach-in_closet.jpg";

const GarageStorage = () => {
  return (
    <div>
      <Banner
        text="Maximize your garage space with our efficient storage solutions."
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={garageImage1}
          header="Wall-Mounted Storage"
          description="Utilize vertical space in your garage with our wall-mounted storage systems."
        />

        <Banner
          text="Our durable and customizable storage options help you keep your garage organized."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={garageImage2}
          header="Tool Cabinets"
          description="Store your tools securely and access them easily with our range of tool cabinets."
        />
      </div>
    </div>
  );
};

export default GarageStorage;
