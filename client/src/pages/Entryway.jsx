import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import entrywayImage1 from "../assets/test_reach-in_closet.jpg";
import entrywayImage2 from "../assets/test_reach-in_closet.jpg";

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
          image={entrywayImage1}
          header="Entryway Furniture"
          description="Discover functional and beautiful furniture pieces to organize your entryway."
        />

        <Banner
          text="We offer customization options to tailor our products to your entryway's unique dimensions."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={entrywayImage2}
          header="Decor Accents"
          description="Add personality to your entryway with our collection of decor accents."
        />
      </div>
    </div>
  );
};

export default Entryway;
