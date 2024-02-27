import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import livingSpaceImage1 from "../assets/test_reach-in_closet.jpg";
import livingSpaceImage2 from "../assets/test_reach-in_closet.jpg";

const LivingSpaces = () => {
  return (
    <div>
      <Banner
        text="Create your ideal living space with our curated selection of furniture and decor."
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={livingSpaceImage1}
          header="Sofas & Sectionals"
          description="Find the perfect sofa or sectional to anchor your living room in comfort and style."
        />

        <Banner
          text="From coffee tables to accent chairs, we have everything you need to complete your living space."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={livingSpaceImage2}
          header="Home Decor"
          description="Discover unique decor pieces to add personality and charm to your living area."
        />
      </div>
    </div>
  );
};

export default LivingSpaces;
