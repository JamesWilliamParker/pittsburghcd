import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import service_image_8 from "../assets/service_image_8.jpg";
import service_image_9 from "../assets/service_image_9.jpg";

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
          image={service_image_8}
          header="Built-Ins"
          description="Making your living area ALIVE!"
        />

        <Banner
          text="From coffee tables to accent chairs, we have everything you need to complete your living space."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_9}
          header="Entertainment Centers"
          description="Bringing style and function to your home's entertainment spaces."
        />
      </div>
    </div>
  );
};

export default LivingSpaces;
