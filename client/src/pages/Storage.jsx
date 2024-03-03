import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import service_image_10 from "../assets/service_image_10.jpg";
import service_image_11 from "../assets/service_image_11.jpg";
import service_image_12 from "../assets/service_image_12.jpg";

const StorageSolutions = () => {
  return (
    <div>
      <Banner
        text="Discover smart storage solutions to declutter your space and simplify your life."
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={service_image_10}
          header="Laundry Area"
          description="Whites, colors, delicates……So many options!"
        />

        <Banner
          text="From pantry to garage, we have storage solutions for every area of your home."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_11}
          header="Pantry"
          description="Find what you need, in style!"
        />

        <ServiceCard
          image={service_image_12}
          header="Murphy Beds"
          description="Guests will love their stay!"
        />
      </div>
    </div>
  );
};

export default StorageSolutions;
