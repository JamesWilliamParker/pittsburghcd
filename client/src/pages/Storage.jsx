import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import service_image_15 from "../assets/service_image_15.jpg";
import service_image_11 from "../assets/service_image_11.jpg";
import service_image_12 from "../assets/service_image_12.jpg";

const StorageSolutions = () => {
  return (
    <div className="page-container">
      <Banner
        text="Experience a refreshing approach: No aggressive sales tactics, no artificial discounts, and no inflated prices. Just a delightful experience with reliable experts!"
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={service_image_15}
          header="Laundry Area"
          description="Whites, colors, delicates……So many options!"
        />

        <Banner
          text="Lifetime Warranty: Rest assured with our lifetime warranty against defects. Our guarantee extends to the flawless and meticulous installation of your project."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_11}
          header="Pantry"
          description="Find what you need, in style!"
        />

        <Banner
          text="Speak directly with our team, not a 1-800 number! Experience personalized service every time you call!"
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
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
