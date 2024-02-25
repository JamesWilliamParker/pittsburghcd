import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import image1 from "../assets/test_reach-in_closet.jpg";
import image2 from "../assets/test_reach-in_closet.jpg";

const Closets = () => {
  return (
    <div>
      <Banner
        text="No pushy sales tactics. No phony discounts. No inflated prices. Simply a pleasurable experience with trustworthy experts!"
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={image1}
          header="Reach-In Closet"
          description="Custom-built reach-in closets designed to maximize space and style."
        />

        <Banner
          text="Lifetime Warranty: We provide a lifetime warranty against defects. Additionally, we guarantee our installation will be beautifully and properly installed."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={image2}
          header="Walk-In Closet"
          description="Organize your clothes and accessories efficiently with our personalized solutions."
        />
      </div>
    </div>
  );
};

export default Closets;
