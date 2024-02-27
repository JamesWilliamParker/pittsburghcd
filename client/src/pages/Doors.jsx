import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import doorImage1 from "../assets/test_reach-in_closet.jpg";
import doorImage2 from "../assets/test_reach-in_closet.jpg";

const Doors = () => {
  return (
    <div>
      <Banner
        text="Explore our wide range of high-quality doors for your home."
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={doorImage1}
          header="Front Doors"
          description="Make a grand entrance with our stylish front door options."
        />

        <Banner
          text="We offer professional installation services to ensure a perfect fit for your new doors."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={doorImage2}
          header="Interior Doors"
          description="Enhance the aesthetic appeal of your interiors with our diverse range of interior doors."
        />
      </div>
    </div>
  );
};

export default Doors;
